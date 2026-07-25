---
title: "Add Fly.io (Tigris) as a storage auth provider"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:28:15Z
updated_at: 2026-07-10T07:47:01Z
source_issues: ["https://github.com/meta-secret/nook/issues/9"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add Fly.io (Tigris) as a storage auth provider

## Imported context

This record was imported from [Nook GitHub issue #9](https://github.com/meta-secret/nook/issues/9)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **Fly.io / Tigris** as a storage provider preset alongside **Local**, **GitHub**, and other backends — using the same vault-file model (`nook-vault.yaml`) and multi-device sync semantics.

Users should be able to pick **Fly.io sync** at login, enter Tigris S3 credentials once, and have them persisted in IndexedDB — mirroring the GitHub PAT flow described in [auth-providers.md](.cortex/design-docs/auth-providers.md).

**Depends on:** [#7 — generic S3-compatible storage adapter](https://github.com/meta-secret/nook/issues/7). Fly.io is **not** a separate WASM storage module — it is an **S3 preset** with Fly/Tigris-specific default parameters.

Related: [#8 — GitLab (repository-file API)](https://github.com/meta-secret/nook/issues/8) covers git-hosting backends; this issue covers **object storage** via Tigris on Fly.io infrastructure.

---

## Why Fly.io / Tigris?

Fly.io’s object storage is **[Tigris](https://www.tigrisdata.com/)** — globally distributed, **S3-compatible**, zero egress — provisioned with `fly storage create` or via the Tigris console. It fits Nook’s vault blob model the same way Cloudflare R2 does.

### Free tier (no credit card required)

| | Tigris (Fly.io) | Cloudflare R2 (#7) |
|--|-----------------|---------------------|
| **Storage** | 5 GB | 10 GB |
| **Class A ops** (PUT, LIST, …) | 10,000 / month | 1M / month |
| **Class B ops** (GET, …) | 100,000 / month | 10M / month |
| **Egress** | $0 | $0 |
| **S3 API** | ✓ (~90%+ S3 surface) | ✓ |
| **Permanent free** | ✓ | ✓ |

Smaller free storage than R2, but strong for globally distributed reads (automatic edge caching) and zero egress. Good option for users already on Fly.io or who want an R2 alternative without Cloudflare.

### Why Tigris (not Fly Volumes / Fly Postgres)

| Fly product | Fit for Nook vault |
|-------------|-------------------|
| **Tigris** (object storage) | ✅ Same as R2 — one encrypted blob (`nook-vault.yaml`) |
| **Fly Volumes** | ❌ Block storage attached to Fly Machines — not browser-direct |
| **Fly Postgres** | ❌ Relational DB — wrong model for vault file sync |

### Provisioning path

Users typically create a bucket via Fly CLI:

```bash
fly storage create
```

Fly sets S3-compatible secrets:

| Secret | Example |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | `tid_xxxx` |
| `AWS_SECRET_ACCESS_KEY` | `tsec_xxxx` |
| `AWS_ENDPOINT_URL_S3` | `https://fly.storage.tigris.dev` |
| `AWS_REGION` | `auto` |
| `BUCKET_NAME` | generated bucket name |

Tigris also works **standalone** (without deploying a Fly app) via [console.storage.dev](https://console.storage.dev) — endpoint may be `https://t3.storage.dev` or `https://fly.storage.tigris.dev` depending on provisioning path. Nook should accept the endpoint the user copies from their dashboard/CLI.

### Security note (unchanged from GitHub / R2)

Tigris access keys in IndexedDB are **storage convenience**, not vault encryption. Compromise of browser storage exposes bucket access, not plaintext secrets — vault content stays encrypted client-side before upload.

---

## Architecture: S3 preset (required — see #7)

Fly.io **must** plug into the generic S3 adapter from [#7](https://github.com/meta-secret/nook/issues/7). Adding Fly/Tigris later should be **preset + docs only**, not a new storage adapter.

### Fly.io / Tigris preset config

| Field | Value (preset defaults) |
|-------|-------------------------|
| `preset` | `'fly-tigris'` |
| `endpoint` | `https://fly.storage.tigris.dev` (user-editable if console shows `t3.storage.dev`) |
| `region` | `auto` |
| `bucket` | from `fly storage create` or Tigris console |
| `access_key_id` | `tid_…` |
| `secret_access_key` | `tsec_…` |
| `object_key` | `nook-vault.yaml` (default) |

UI shows **“Fly.io sync”** as a branded login option; saved provider is `type: 's3'`, `preset: 'fly-tigris'`.

```typescript
// Same S3StorageConfig as #7 — Fly is a preset, not a new type
interface S3StorageConfig {
  preset?: 'cloudflare-r2' | 'fly-tigris' | 'backblaze-b2' | 'custom'
  endpoint: string
  region: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
  objectKey?: string
}
```

---

## Current GitHub model (reference)

GitHub uses a repository Contents API — different adapter. Object-store providers (R2, Tigris, B2) share the S3 path:

- `StorageProviderType`: `'local' | 'github'` today → `'local' | 'github' | 's3'` after #7
- WASM storage adapters: git-hosting (GitHub, future GitLab) vs S3-compatible (R2, Fly/Tigris, custom)
- Optimistic concurrency via ETag (S3) — mirror GitHub `file_sha` semantics

---

## Proposed scope

### User-facing

- [ ] New provider option: **Fly.io sync** on login gate (`LoginGate`) and settings (`AuthStorage`) — S3 preset (blocked on #7 landing)
- [ ] Setup fields (pre-filled by preset, all editable):
  - Endpoint (default: `https://fly.storage.tigris.dev`)
  - Region (default: `auto`)
  - Bucket name
  - Access Key ID (`tid_…`)
  - Secret Access Key (`tsec_…`)
  - Optional object key (default: `nook-vault.yaml`)
- [ ] Label in UI: e.g. `Fly.io · {bucket}`
- [ ] Status chip shows **Fly.io** when active
- [ ] Link to setup docs: `fly storage create` + where to copy keys

### Data model

- [ ] No new `StorageProviderType` — use `type: 's3'`, `preset: 'fly-tigris'` (see #7)
- [ ] Optional: store `flyAppName` as display metadata only (not required for S3 API)

### Rust / WASM

- [ ] **No Fly-specific adapter** — reuse generic S3 module from #7
- [ ] Optional: `fly-tigris` preset helper in `nook-core` validation (default endpoint + region)
- [ ] Credential validation: non-empty keys, `tid_` / endpoint URL format hints (soft warnings, not hard failures)

### Tests

- [ ] E2e spec behind env vars (e.g. `NOOK_FLY_S3_*` or reuse `NOOK_S3_*` with fly preset), similar to [github-vault.spec.ts](nook-web/e2e/github-vault.spec.ts)
- [ ] Skipped in CI unless secrets present

### Docs

- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) — list S3 presets including Fly/Tigris
- [ ] User setup guide:
  1. `fly storage create` (or Tigris console)
  2. Copy endpoint, bucket, access key, secret
  3. Paste into Nook
  4. Configure bucket CORS for browser-direct access (same concern as R2 in #7)

---

## Out of scope (for this issue)

- Implementing the generic S3 adapter itself ([#7](https://github.com/meta-secret/nook/issues/7))
- Fly Machines, Fly Volumes, Fly Postgres, or deploying a Fly app
- Multi-provider replication (GitHub **and** Fly simultaneously) — auth-providers §5
- Backblaze B2 / custom S3 UI presets (trivial follow-ups once #7 lands)

---

## Open questions

1. **Endpoint normalization:** Support both `fly.storage.tigris.dev` and `t3.storage.dev` — same backend, different provisioning paths?
2. **CORS:** Document required bucket CORS policy for browser → Tigris (parallel to R2 in #7).
3. **Issue ordering:** Ship as part of #7 (multiple presets in one PR) or as a fast follow-up PR that only adds UI preset + docs?
4. **Branding:** UI label `Fly.io` vs `Tigris` — Fly is familiar to devs who ran `fly storage create`; Tigris is the actual storage product name.

---

## Acceptance criteria

- Blocked on #7 generic S3 adapter being merged
- User can select Fly.io at login, save Tigris credentials, and unlock vault stored in bucket
- Provider saved as `type: 's3'`, `preset: 'fly-tigris'` with correct default endpoint/region
- Multi-device enroll/join/sync works with Fly/Tigris-backed vault (same as GitHub/R2)
- Encrypted vault blob structure is byte-identical to other backends
- No new WASM storage code beyond preset defaults + validation
- No regression to Local, GitHub, or other S3 presets
- E2E coverage when Fly/Tigris test credentials are present in CI secrets (optional / skipped otherwise)

## Historical comments

### cypherkitty — 2026-06-21T20:33:10Z

Tracked under the aggregated storage platform epic: #12
