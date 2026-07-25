---
title: "Vault schema versioning, safe migration, and pinned app rollback (v1.nokey.sh)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-26T03:45:33Z
updated_at: 2026-07-04T03:52:19Z
source_issues: ["https://github.com/meta-secret/nook/issues/52"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Vault schema versioning, safe migration, and pinned app rollback (v1.nokey.sh)

## Imported context

This record was imported from [Nook GitHub issue #52](https://github.com/meta-secret/nook/issues/52)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Introduce **explicit vault schema versioning** and a **copy-on-upgrade migration pipeline** so major Nook releases can evolve the on-disk format without destroying the user’s only backup. Pair this with **pinned app deployments** (`v1.nokey.sh` serving a frozen WASM/UI build) so users can roll back the *application* if migration fails, new functionality is broken, or an accident occurs — while their **original vault file remains intact**.

Today Nook uses a single vault path (`nook-vault.yaml`) and **lazy in-place migration** (read legacy shape → normalize in memory → overwrite on next save). That pattern works for small backward-compatible changes (e.g. `password_envelope` → `unlock` + `password_entries`) but is **unsafe for major upgrades**: a failed or buggy migration, or a broken v2 app, can leave the user with no rollback path.

**Vision:** A user on v2 who hits a problem opens `https://v1.nokey.sh`, unlocks with their existing credentials, and continues working against an **unchanged v1 vault snapshot** — not a corrupted or half-migrated file.

---

## Problem statement (current state)

| Area | Today | Risk |
|------|-------|------|
| Vault YAML | No top-level `schema_version`; implicit evolution via serde defaults + legacy fields | App cannot distinguish “unsupported future schema” from “parse error” |
| Migration | In-place rewrite on save (`vault_format.rs` legacy bridges) | Single copy — failure or bug = data loss risk |
| Storage path | Hardcoded `nook-vault.yaml` (GitHub, Drive, IndexedDB) | No room for side-by-side v1/v2 files during cutover |
| IndexedDB | `nook_db` v1, single key `encrypted_db` | Same in-place rewrite risk for local users |
| App deploy | `nokey.sh` always serves latest `main` | No safe rollback if new release is broken |
| Multi-device | One file, optimistic concurrency (SHA / md5) | Migrating on one device without a shared pointer → split brain |

Relevant code today:
- `nook-core/src/vault_format.rs` — `StoredVaultYaml`, legacy `password_envelope` migration
- `nook-wasm/src/manager/mod.rs` — `github_path = "nook-vault.yaml"`
- `nook-wasm/src/storage/indexed_db.rs` — `nook_db` version 1, key `encrypted_db`
- `.github/workflows/ci.yml` — GitHub Pages deploy from `main` → `nokey.sh`

---

## Goals

1. **Explicit `schema_version`** in vault YAML — separate from app semver and from password-envelope `version`.
2. **Copy-on-upgrade migration** — never mutate the only vault copy during a major upgrade.
3. **Active-vault pointer** — small manifest so all devices agree which file is live after migration.
4. **Verification gate** — decrypt, parse, migrate, round-trip, and count-check before flipping the pointer.
5. **App rollback** — `v1.nokey.sh` pinned to a maintenance branch/tag; reads v1-era vault files only.
6. **IndexedDB parity** — local-mode users get the same backup + pointer semantics as GitHub/Drive.
7. **Clear UX** — detect → explain → migrate → verify → cut over; link to v1 on failure; no silent destructive upgrade.

## Non-goals (this issue)

- CRDT / merge UI for conflicting edits across providers ([#12](https://github.com/meta-secret/nook/issues/12) future work).
- Automatic deletion of v1 backup files (user-initiated or time-delayed opt-in only).
- Supporting N concurrent major app versions indefinitely (maintain **one** previous major pin, e.g. v1).
- Re-encrypting all secret values during schema migration (layout/metadata only unless explicitly required).

---

## Architecture: two independent version axes

```
┌─────────────────────────────┐     ┌─────────────────────────────┐
│  App version (deploy pin)   │     │  Vault schema_version       │
│  nokey.sh      → app 2.x    │     │  nook-vault.yaml  → 1       │
│  v1.nokey.sh   → app 1.x    │     │  nook-vault.v2.yaml → 2      │
└─────────────────────────────┘     └─────────────────────────────┘
         │                                      │
         └──────── reads/writes ────────────────┘
              (compatibility matrix documented per release)
```

| Concept | Examples | Owned by |
|---------|----------|----------|
| **App semver** | `2.0.0` on `nokey.sh`, `1.4.x` on `v1.nokey.sh` | CI / GitHub Pages / DNS |
| **Vault `schema_version`** | `1` (today implicit), `2` (first explicit major) | `nook-core` serde + migrators |
| **Password envelope `version`** | Crypto wrap format inside `password_entries` | `password_envelope.rs` (unchanged) |
| **QR payload `"v"`** | Enrollment code format | Separate from vault schema |

**Compatibility rule (document per release):** App M.x supports **read** schema `N..M`, **write** schema `M` only. Older pinned app reads/writes up to its max schema.

---

## Vault schema versioning (data model)

### Add to `StoredVaultYaml`

```yaml
schema_version: 2          # NEW — top-level, required on all new writes
unlock:
  type: keys
secrets:
  - key: github.com
    value: |
      -----BEGIN AGE ENCRYPTED FILE-----
      ...
```

- Missing `schema_version` on load → treat as **`1`** (all existing vaults).
- Deserializer rejects `schema_version > app_max_supported` with a clear error (“vault was upgraded on a newer Nook — update the app or use v1.nokey.sh”).
- Minor additive fields continue to use serde `default` + legacy bridges; **major** bumps require an explicit migrator.

### Core API (`nook-core`)

| Function | Role |
|----------|------|
| `current_schema_version() -> u32` | Write target for this build |
| `read_schema_version(stored: &str) -> u32` | Cheap header parse |
| `migrate_vault(stored, from, to) -> Result<String>` | Pure, tested transforms |
| `verify_migration(src, dst, keys) -> Result<MigrationReport>` | Decrypt both, compare secret counts/ids, auth rows, members |

Migration logic lives in Rust only — no duplication in TypeScript.

---

## Migration strategy: copy-on-upgrade

### Principles

1. **Read** the active vault file; **never delete or overwrite** the pre-migration file during migration.
2. **Migrate in memory** via `migrate_vault`.
3. **Write** the result to a **new path** (e.g. `nook-vault.v2.yaml`).
4. **Verify** round-trip before any pointer update.
5. **Flip pointer** atomically (manifest write + provider config).
6. **v1 file remains** as rollback snapshot until user explicitly finalizes.

### Recommended file layout (GitHub / Drive)

| File | Purpose |
|------|---------|
| `nook-vault.yaml` | **Schema v1 snapshot** — frozen after migration; v1 app continues to use this |
| `nook-vault.v2.yaml` | **Schema v2 live vault** — v2 app reads/writes after cutover |
| `nook-vault.meta.yaml` | **Pointer + metadata** — which file is active, migration audit trail |

Alternative considered: rename `nook-vault.yaml` → `vault-v1.yaml` upfront. **Rejected for rollout** — unnecessary breaking change for existing repos; keep `nook-vault.yaml` as the v1 artifact name users already have.

### Manifest (`nook-vault.meta.yaml`)

```yaml
schema_version: 2
active: nook-vault.v2.yaml
backup: nook-vault.yaml
migrated_at: 2026-06-25T12:00:00Z
migration_app: "2.0.0"
migration_device_id: "<short fingerprint>"
```

- **Small file** — cheap to poll on connect; resolves multi-device split brain.
- Written **only after** successful verification.
- v1 app **ignores** manifest (does not exist in v1 builds) — continues using `nook-vault.yaml`.

### IndexedDB parity

| Key / store | Purpose |
|-------------|---------|
| `encrypted_db` | Pre-migration v1 blob (frozen after migration, same as GitHub backup) |
| `encrypted_db.v2` | Live v2 blob |
| `vault_meta` (new) | JSON mirror of manifest fields |
| `nook_auth` provider entry | Optional `activeVaultPath` / `schemaVersion` cache |

Same state machine as remote storage; only transport differs.

---

## App rollback: GitHub Pages pinning

| Host | Deploy source | Purpose |
|------|---------------|---------|
| `nokey.sh` | `main` (current) | Latest app |
| `v1.nokey.sh` | Branch `release/v1` or tag `app-v1.x` | Frozen previous major |

Implementation notes:
- DNS: `v1.nokey.sh` CNAME → GitHub Pages (same repo, different branch or separate Pages environment).
- Build with same `VITE_BASE=/` as production (subdomain routing, not path prefix).
- Pin **WASM + nook-core** on the maintenance branch — parser and crypto must match v1 schema writes.
- CI: add workflow or job to deploy `release/v1` to the v1 Pages environment on tag/merge.
- Document compatibility matrix in `.cortex/` (e.g. “App 1.x: schema 1 read/write; App 2.x: schema 1 read, 2 read/write”).

PR previews (Cloudflare) remain unchanged — they are not a user rollback channel.

---

## UX flows

### Flow A — Existing v1 user opens v2 (`nokey.sh`)

```
1. Connect to storage provider
2. Load nook-vault.meta.yaml (if absent → active = nook-vault.yaml, schema = 1)
3. If schema_version < app target AND no v2 file yet:
   → Show "Upgrade vault format" screen
     - What changes (plain language)
     - "Your original file is kept as backup"
     - "If anything goes wrong, use v1.nokey.sh"
4. User confirms → run migration pipeline (background, status events)
5. Success → unlock v2 vault, normal app
6. Failure → error + prominent link to https://v1.nokey.sh
              (v1 file untouched)
```

**Not mandatory blind migrate:** v2 should **read schema 1 transparently** for in-session use where possible; explicit migration is for **cutover** (new file + pointer), not for merely opening the app.

### Flow B — User hits v2 bug, rolls back app

```
1. Open https://v1.nokey.sh
2. Same provider credentials (IndexedDB) or re-auth
3. v1 loads nook-vault.yaml (ignores manifest)
4. User works against pre-migration snapshot
5. UI banner if nook-vault.v2.yaml / meta exists:
   "A newer vault copy exists — changes here won't sync to v2 until you migrate again"
```

### Flow C — Second device after primary migrated

```
1. v2 connect → fetch nook-vault.meta.yaml
2. active = nook-vault.v2.yaml → load v2 directly (no re-migration)
3. If meta says v2 active but v2 file missing → error + support copy
4. If meta missing but v2 file exists → treat as inconsistent; prefer v1 + offer re-migration
```

### Flow D — New user on v2

```
1. Create empty vault with schema_version: 2
2. Write directly to nook-vault.v2.yaml (or single file if we simplify greenfield — see Open questions)
3. Write meta with active = v2, no backup
```

### Flow E — Finalize upgrade (optional, later phase)

```
Settings → "Remove v1 backup" (destructive, confirmed)
  → DELETE nook-vault.yaml backup only after user types confirm phrase
  → Update meta.backup = null
  → v1.nokey.sh still works but only for users who retained backup
```

---

## Scenario matrix

| Scenario | Expected behavior |
|----------|-------------------|
| Migration fails mid-write | v2 file incomplete or absent; pointer not flipped; v1 file intact; user sent to v1.nokey.sh |
| Migration succeeds, v2 app crash-loops | User uses v1.nokey.sh + v1 vault snapshot; no data loss |
| User edits vault on v2 after migration | v1 snapshot stale — rollback shows old data; banner explains |
| User edits on v1 after v2 migration | v2 unchanged; re-migration or manual merge out of scope (warn loudly) |
| Device A migrated, device B still on v1 app | B reads old file until B upgrades app + sees meta; no silent overwrite |
| Two devices migrate concurrently | Optimistic lock on meta + vault files; second writer retries or surfaces conflict |
| schema_version 3 vault opened in app 2 | Clear error: upgrade app; do not attempt partial read |
| Local-only user | Same copy-on-upgrade in IndexedDB keys |
| Google Drive provider ([#13](https://github.com/meta-secret/nook/issues/13)) | Same file names in appDataFolder; manifest + v2 blob alongside v1 |
| JSONL legacy on disk | schema_version 1; migrator normalizes to YAML v2 |

---

## Relationship to existing lazy migration

Keep **two tiers**:

| Tier | When | Behavior |
|------|------|----------|
| **Minor** (same major schema) | Additive fields, legacy serde bridges | Lazy read-migrate-write on save (current pattern) |
| **Major** (schema bump) | Breaking layout / new top-level sections | Explicit migration wizard + copy-on-write + pointer flip |

Existing `password_envelope` → `unlock` migration remains a **minor** within schema 1 until we bundle it into the schema 2 cutover (if not already written out on all vault: v2 migrator idempotently applies it).

---

## Implementation plan & checklist

### Phase 0 — Design & spec (`.cortex/`)

- [ ] Add design doc: `.cortex/design-docs/vault-schema-versioning.md`
- [ ] Update `.cortex/product-specs/password-manager.md` §3 (schema_version, manifest, paths)
- [ ] Update `.cortex/ARCHITECTURE.md` connect/save diagrams with manifest load step
- [ ] Document app ↔ schema compatibility matrix per release
- [ ] Define schema v2 delta (what actually changes from v1 — even if v2 is “v1 + explicit version field” initially)

### Phase 1 — `nook-core` foundation

- [ ] Add `schema_version: u32` to `StoredVaultYaml` (`#[serde(default = "one")]`)
- [ ] `read_schema_version()`, `current_schema_version()`
- [ ] `migrate_v1_to_v2()` — pure function + unit tests
- [ ] `verify_migration()` — compare secret ids, auth pk_ids, member counts, unlock mode
- [ ] Fixtures: `nook-core/fixtures/nook-vault.schema-v1.yaml`, `…schema-v2.yaml`
- [ ] Export migrator + verify from crate root for WASM use
- [ ] Test: legacy vaults without field → schema 1
- [ ] Test: reject schema > supported with actionable error message

### Phase 2 — Manifest & path resolution

- [ ] Define `VaultManifest` struct + YAML serde in `nook-core`
- [ ] Path constants: `VAULT_PATH_V1`, `VAULT_PATH_V2`, `VAULT_META_PATH`
- [ ] `resolve_active_vault_path(manifest, fallback) -> ActiveVault`
- [ ] WASM: load meta before vault on connect (GitHub, Drive, local)

### Phase 3 — Migration pipeline (`nook-wasm`)

- [ ] `assess_migration()` — returns `{ needed, from_schema, to_schema, backup_exists }`
- [ ] `run_migration()` — orchestrate: read v1 → migrate → verify → write v2 → write meta
- [ ] Status events: `MIGRATION_START`, `MIGRATION_VERIFY`, `MIGRATION_SUCCESS`, `MIGRATION_FAILED`
- [ ] **Do not flip meta** if verify fails; **do not truncate** v1 file on failure
- [ ] GitHub: PUT new files (v2 + meta) with correct SHAs; handle 409 retry
- [ ] Drive: same for appDataFolder ([#13](https://github.com/meta-secret/nook/issues/13))
- [ ] IndexedDB: write `encrypted_db.v2` + `vault_meta`; leave `encrypted_db` frozen
- [ ] Connect path: if meta.active = v2, skip migration gate

### Phase 4 — `nook-web` UX

- [ ] Migration gate screen (after provider connect, before vault unlock)
- [ ] Copy: backup preserved, v1.nokey.sh fallback link
- [ ] Progress UI wired to WASM status events
- [ ] Post-migration success state
- [ ] Error state with rollback instructions
- [ ] Rollback banner on v1 when meta/v2 detected (if we ever ship v1 patch)
- [ ] Settings (Phase E optional): “Remove v1 backup” with confirm phrase
- [ ] Help content update (`help-content.ts`)

### Phase 5 — App pinning (`v1.nokey.sh`)

- [ ] Create `release/v1` branch from last v1-compatible tag
- [ ] CI job: deploy `release/v1` to GitHub Pages environment → `v1.nokey.sh`
- [ ] DNS: `v1.nokey.sh` CNAME configured
- [ ] README / docs: rollback URL and when to use it
- [ ] Process doc: how to cut v1 maintenance releases (security fixes only)

### Phase 6 — Testing

- [ ] `nook-core`: migrator round-trip tests, verify_migration failure cases
- [ ] WASM integration tests for migration orchestration (if feasible in Rust)
- [ ] E2E: migrate GitHub vault v1→v2, assert v1 file byte-stable, meta flipped, v2 unlock works
- [ ] E2E: migration failure injection → v1 file unchanged, no meta
- [ ] E2E: second browser context loads via meta (no re-migration)
- [ ] E2E: local IndexedDB migration parity
- [ ] Manual: v1.nokey.sh opens pre-migration vault after v2 migration

### Phase 7 — Rollout

- [ ] Ship schema v2 + migration in app 2.0.0 on `nokey.sh`
- [ ] Pin v1 app **before** enabling migration for production users
- [ ] Monitor migration success/failure (client-side only — no telemetry unless opted in)
- [ ] Announce: upgrade path + rollback URL

---

## Open questions

1. **Greenfield v2 users:** Single file `nook-vault.yaml` with `schema_version: 2`, or always `nook-vault.v2.yaml` + meta? (Recommend: single file for simplicity when no v1 exists.)
2. **Schema v2 scope:** Is v2 only “add `schema_version` field” or does it bundle other breaking changes (e.g. secret record shape from [#25](https://github.com/meta-secret/nook/issues/25))?
3. **Meta file concurrency:** Serialize meta updates through same optimistic-lock pattern as vault files, or always migrate from primary device only?
4. **v1 maintenance window:** How long do we keep `v1.nokey.sh` live after v2 GA?
5. **Enrollment QR / multi-provider:** Should QR payload include `schema_version` and active path ([#12](https://github.com/meta-secret/nook/issues/12))?

---

## Success criteria

- [ ] A user can migrate v1 → v2 without losing the original `nook-vault.yaml` content
- [ ] A failed migration never flips `nook-vault.meta.yaml` and never deletes the v1 backup
- [ ] `v1.nokey.sh` unlocks the pre-migration vault after a successful v2 migration
- [ ] Second device joins post-migration via manifest without running migration again
- [ ] Local and GitHub (and Drive, when landed) behave identically
- [ ] All migrators and verify steps covered by Rust tests; critical paths by E2E

## Historical comments

### cypherkitty — 2026-07-04T03:52:19Z

PR #181 completes the #112 event-log migration path and supersedes the mutable-manifest cutover shape originally discussed here:

- `nook-vault.yaml` is treated as a legacy import/export/projection cache, not the replicated source of truth;
- migration saves a byte-for-byte `legacy_backup:{store_id}` before importing a deterministic `vault-imported` root event;
- local event append happens before remote upload, and provider fan-out repairs append-only event records across GitHub/Drive/iCloud;
- `nook_db` v2 separates `events`, `projections`, and `outbox` state while retaining fallback reads from the legacy `vault` store.

So #52's rollback/safety requirement is preserved by backup + event import, while active synchronization correctness comes from the immutable event set rather than a mutable `nook-vault.meta.yaml` pointer.

