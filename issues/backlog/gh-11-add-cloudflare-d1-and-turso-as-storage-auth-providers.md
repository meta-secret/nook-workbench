---
title: "Add Cloudflare D1 and Turso as storage auth providers"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:30:56Z
updated_at: 2026-07-10T07:47:16Z
source_issues: ["https://github.com/meta-secret/nook/issues/11"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add Cloudflare D1 and Turso as storage auth providers

## Imported context

This record was imported from [Nook GitHub issue #11](https://github.com/meta-secret/nook/issues/11)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **Cloudflare D1** and **Turso** as storage providers alongside **Local**, **GitHub**, and S3-compatible backends — using the same encrypted vault content and multi-device sync semantics, but persisting via **edge SQLite** instead of a single object file or git blob.

Users bring **their own** D1 database or Turso database, enter credentials once at login, and have them persisted in IndexedDB — same provider UX as GitHub ([auth-providers.md](.cortex/design-docs/auth-providers.md)).

**Important:** D1 and Turso are **not** S3 presets ([#7](https://github.com/meta-secret/nook/issues/7)) and **not** repository-file APIs ([#8](https://github.com/meta-secret/nook/issues/8)). They need a **new generic edge-SQLite adapter** with provider-specific connection parameters — the same architectural idea as generic S3: **one adapter, multiple presets**.

Related:
- [#7 — S3 object storage (R2, Fly/Tigris, Supabase)](https://github.com/meta-secret/nook/issues/7)
- [#8 — GitLab (git-hosting file API)](https://github.com/meta-secret/nook/issues/8)
- [#9 — Fly.io / Tigris](https://github.com/meta-secret/nook/issues/9)
- [#10 — Supabase Storage](https://github.com/meta-secret/nook/issues/10)

---

## Why D1 and Turso?

Both are **serverless SQLite at the edge** — strong free tiers, user-owned accounts, and a natural fit for storing vault data as **one encrypted row** rather than a file in git or an object bucket.

### Free tier comparison

| | **Cloudflare D1** | **Turso** |
|--|-------------------|-----------|
| **Engine** | SQLite (Cloudflare-managed) | libSQL (SQLite fork) |
| **Total storage** | 5 GB (account total) | 5 GB |
| **Per-DB limit** | 500 MB (free) | Shared quota |
| **Databases** | 10 (free) | 500 (free) |
| **Rows read** | 5M / day | 500M / month |
| **Rows written** | 100K / day | 10M / month |
| **Permanent free** | ✓ (Workers Free) | ✓ (no credit card) |
| **Browser-direct API** | ⚠️ D1 REST API (rate-limited) | ✅ libSQL HTTP (`/v2/pipeline`) |

### Why edge SQLite (not R2 / GitHub)

| Backend type | Vault representation | Issue |
|--------------|---------------------|-------|
| GitHub / GitLab | `nook-vault.yaml` file in repo | [#8](https://github.com/meta-secret/nook/issues/8) |
| R2 / Tigris / Supabase | `nook-vault.yaml` object in bucket | [#7](https://github.com/meta-secret/nook/issues/7) |
| **D1 / Turso** | **Encrypted vault row in SQL table** | **This issue** |

Same encrypted YAML/text payload as today — only the **transport and concurrency model** change (SQL `UPDATE … WHERE version = ?` instead of file SHA / object ETag).

### Why both in one issue

Turso and D1 share:

- SQLite semantics and a simple vault table schema
- User-owned cloud resource + token auth
- Low-frequency sync (Nook polls ~every 10s — well within free limits)

They differ in **wire protocol** (libSQL HTTP vs Cloudflare D1 REST API) — implement **one domain adapter, two transport presets**, not two separate storage systems.

### Security note (unchanged)

Database credentials in IndexedDB are **storage convenience**, not vault encryption. Compromise exposes DB access, not plaintext secrets — vault content stays encrypted client-side before write (same as GitHub / R2).

---

## Architecture: generic edge-SQLite adapter (required)

### Vault table schema (shared)

Single table, one logical vault per database (multi-device sync unchanged at vault format level):

```sql
CREATE TABLE IF NOT EXISTS nook_vault (
  id          TEXT PRIMARY KEY DEFAULT 'default',
  content     TEXT NOT NULL,   -- encrypted vault YAML (same bytes as nook-vault.yaml)
  version     INTEGER NOT NULL DEFAULT 1,
  updated_at  TEXT NOT NULL    -- ISO timestamp
);
```

Operations:

| Op | SQL | Concurrency |
|----|-----|-------------|
| Read | `SELECT content, version, updated_at FROM nook_vault WHERE id = 'default'` | — |
| Create | `INSERT INTO nook_vault …` | only if row missing |
| Update | `UPDATE nook_vault SET content = ?, version = version + 1, updated_at = ? WHERE id = 'default' AND version = ?` | optimistic lock (mirror GitHub `file_sha` / S3 ETag) |

Bootstrap: on first connect, run `CREATE TABLE IF NOT EXISTS` if missing.

### Provider presets

```typescript
type StorageProviderType = 'local' | 'github' | 's3' | 'sqlite-edge'

interface SqliteEdgeConfig {
  preset: 'turso' | 'cloudflare-d1'
  // Turso
  databaseUrl?: string    // https://[name]-[org].turso.io
  authToken?: string      // Turso database token
  // Cloudflare D1
  accountId?: string
  databaseId?: string
  apiToken?: string       // Cloudflare API token with D1:Edit
}

interface StorageProvider {
  id: string
  type: StorageProviderType
  label: string
  createdAt: string
  sqliteEdge?: SqliteEdgeConfig
  // …existing github / s3 fields
}
```

UI branded options: **Turso sync** | **Cloudflare D1 sync** — both save `type: 'sqlite-edge'` with different presets.

### Transport layer (two presets, one trait)

| Preset | Client access | Notes |
|--------|---------------|-------|
| **Turso** | libSQL HTTP — `POST {databaseUrl}/v2/pipeline` with `Authorization: Bearer {authToken}` | Best browser-direct fit; `@libsql/client/web` or minimal fetch in WASM |
| **Cloudflare D1** | Cloudflare REST API — `POST https://api.cloudflare.com/client/v4/accounts/{account_id}/d1/database/{database_id}/query` with `Authorization: Bearer {apiToken}` | [D1 HTTP API](https://developers.cloudflare.com/api/resources/d1/subresources/database/methods/query/); rate-limited (1,200 req / 5 min global API limit) — acceptable for vault sync cadence; document for high-traffic use |

**Not v1:** User-deployed D1 proxy Worker ([tutorial](https://developers.cloudflare.com/d1/tutorials/build-an-api-to-access-d1/)) — optional advanced path later.

**WASM vs web layer:** Evaluate whether SQL HTTP calls live in `nook-wasm` (alongside GitHub) or `nook-web` with vault bytes passed to WASM — follow existing GitHub pattern (I/O in WASM).

---

## Why Turso first within this issue

Turso is the easier preset to ship:

- Purpose-built **HTTP API for remote SQLite** ([HTTP quickstart](https://docs.turso.tech/sdk/http/quickstart))
- Works from browser/edge with `fetch` + bearer token
- 500 databases on free tier — per-user vault DB is feasible long-term
- libSQL is SQLite-compatible — schema above works as-is

D1 second preset reuses schema + domain logic; only transport differs.

---

## Why D1 is still worth including

- Same Cloudflare account users already use for `nokey.sh` / R2 ([#7](https://github.com/meta-secret/nook/issues/7))
- **5 GB** total storage on Workers Free — generous for many small vault DBs
- D1 REST API supports SQL execution with API token — no Worker deploy required for v1
- Cloudflare docs note REST API is best for admin/low-frequency access — **matches Nook sync pattern**

Caveats to document:

- Global Cloudflare API rate limits apply
- Daily read/write caps on free plan (5M reads / 100K writes per day)
- Slower than D1 Worker bindings — acceptable for vault sync

---

## Comparison with other provider families

| Family | Examples | Vault shape | Generic adapter |
|--------|----------|-------------|-----------------|
| Git-hosting | GitHub, GitLab | File in repo | Repo-file API ([#8](https://github.com/meta-secret/nook/issues/8)) |
| Object storage | R2, Tigris, Supabase | Object blob | S3-compatible ([#7](https://github.com/meta-secret/nook/issues/7)) |
| **Edge SQLite** | **Turso, D1** | **SQL row** | **This issue** |
| Local | IndexedDB | IDB record | Existing |

---

## Proposed scope

### User-facing

- [ ] **Turso sync** — login + settings preset
  - Database URL (from Turso dashboard)
  - Auth token (database token)
- [ ] **Cloudflare D1 sync** — login + settings preset
  - Account ID
  - Database ID
  - Cloudflare API token (`D1:Edit`)
- [ ] Labels: `Turso · {db}` / `D1 · {database-id}`
- [ ] Status chips: **Turso** / **D1**
- [ ] Setup docs for each preset

### Data model

- [ ] `StorageProviderType` += `'sqlite-edge'`
- [ ] `SqliteEdgeConfig` with `preset: 'turso' | 'cloudflare-d1'`

### Rust / WASM

- [ ] `STORAGE_MODE_SQLITE_EDGE` (or preset-aware storage mode) in [validation.rs](nook-core/src/validation.rs)
- [ ] Shared vault row schema + bootstrap SQL
- [ ] Optimistic concurrency via `version` column
- [ ] **Turso transport:** libSQL HTTP pipeline
- [ ] **D1 transport:** Cloudflare D1 query REST API
- [ ] Credential validation per preset
- [ ] `prepare_storage()` branches for Turso vs D1

### Tests

- [ ] Unit tests: SQL bootstrap, version conflict detection, credential validation
- [ ] E2e: Turso behind `NOOK_TURSO_*` env vars (skipped without secrets)
- [ ] E2e: D1 behind `NOOK_D1_*` env vars (skipped without secrets)
- [ ] Multi-device enroll/join/sync for both presets

### Docs

- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) — third adapter family (edge SQLite)
- [ ] Update [password-manager.md](.cortex/product-specs/password-manager.md) — new adapter section (parallel to §2D GitHub)
- [ ] Turso: create DB, generate token, paste URL + token
- [ ] D1: create database in dashboard, create API token with `D1:Edit`, paste IDs + token
- [ ] Clarify: encrypted **content** is identical to `nook-vault.yaml`; only storage envelope differs

---

## Out of scope (for this issue)

- S3 / R2 / object storage ([#7](https://github.com/meta-secret/nook/issues/7))
- GitLab / git-hosting ([#8](https://github.com/meta-secret/nook/issues/8))
- D1 **only** for metadata while vault stays in R2 — this issue stores the **full vault** in SQL
- D1 Worker proxy deployment (advanced / v2)
- Turso Embedded Replicas / `@tursodatabase/sync` local-first mode
- Multi-provider replication (GitHub **and** Turso simultaneously) — auth-providers §5
- Relational schema for individual secrets (vault stays one encrypted blob row — no per-secret SQL rows)

---

## Open questions

1. **Implementation order:** Turso preset first, D1 in same PR or fast follow-up?
2. **WASM HTTP:** Implement Turso/D1 HTTP in Rust (`reqwest` like GitHub) or TypeScript with WASM receiving vault bytes only?
3. **One DB per user vs shared table:** v1 single row in user-provided DB, or namespace by device/vault id in `id` column?
4. **D1 rate limits:** Is 10s sync polling safe under free-tier daily caps + global API limits? (Likely yes — document math.)
5. **Content encoding:** Store raw YAML string vs base64 in `TEXT` column?
6. **Naming:** `sqlite-edge` vs `libsql` vs `sql` in code and UI?

---

## Acceptance criteria

- Generic edge-SQLite adapter with shared schema and version-based concurrency
- **Turso preset:** user connects with database URL + token; vault read/write works
- **D1 preset:** user connects with account ID + database ID + API token; vault read/write works
- Multi-device enroll/join/sync works for both presets (same vault format as GitHub/S3)
- Encrypted vault **content** is semantically identical to `nook-vault.yaml` on other backends
- Adding a future libSQL-compatible host is **transport + preset only** (e.g. self-hosted libSQL)
- No regression to Local, GitHub, or S3 providers
- E2E coverage when test credentials present (optional / skipped otherwise)

## Historical comments

### cypherkitty — 2026-06-21T20:33:13Z

Tracked under the aggregated storage platform epic: #12
