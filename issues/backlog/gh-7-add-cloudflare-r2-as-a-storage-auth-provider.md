---
title: "Add Cloudflare (R2) as a storage auth provider"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:20:03Z
updated_at: 2026-07-10T07:46:49Z
source_issues: ["https://github.com/meta-secret/nook/issues/7"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add Cloudflare (R2) as a storage auth provider

## Imported context

This record was imported from [Nook GitHub issue #7](https://github.com/meta-secret/nook/issues/7)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **Cloudflare R2** as a third storage provider alongside **Local** and **GitHub**, using the same vault-file model (`nook-vault.yaml`) and multi-device sync semantics we already have for GitHub.

Users with a Cloudflare account (and domain like `nokey.sh`) should be able to pick **Cloudflare sync** at login, enter R2 credentials once, and have credentials persisted in IndexedDB — mirroring the GitHub PAT flow described in [auth-providers.md](.cortex/design-docs/auth-providers.md).

**Important:** R2 is the first target, but implementation must be a **generic S3-compatible storage backend** — not a one-off Cloudflare integration. Cloudflare (and Backblaze B2, Tigris, AWS S3, MinIO, etc.) should be **presets** that pre-fill a small set of provider-specific parameters on top of one shared adapter.

---

## Why Cloudflare / R2?

Cloudflare offers **free storage and database options on the Workers Free plan** — no paid Cloudflare plan required for basic use. This makes it a strong fit for Nook users who want decentralized, user-owned vault storage without depending on GitHub.

### Free options (no paid plan)

| Product | What it is | Free tier (approx.) | Good for |
|--------|------------|---------------------|----------|
| **D1** | Serverless **SQL** (SQLite) | **5 GB** total storage, **500 MB** max per DB, **5M rows read/day**, **100K rows written/day** | User data, metadata, small relational apps |
| **R2** | **Object storage** (S3-like) | **10 GB** storage, **1M writes/mo**, **10M reads/mo**, **no egress fees** | Files, images, vault blobs, backups |
| **Workers KV** | **Key-value** store | **1 GB** storage, **100K reads/day**, **1K writes/day** | Config, cache, simple flags, session-ish data |
| **Durable Objects** | Stateful Workers (in-memory + storage) | Limited free allowance | Real-time / per-user state, WebSockets |

All of these are usable from **Cloudflare Workers** (also free: ~100K requests/day).

### What you don’t get for free

- **Traditional managed Postgres/MySQL** on Cloudflare — not a thing; use **D1** instead.
- **Large scale** — free tiers have daily/monthly caps; over limit, queries fail until reset (or you upgrade).
- **Workers Paid ($5/mo)** — optional; raises limits but **not required** to start.

### Quick pick guide

- **Structured data (tables, queries)** → **D1**
- **Files / encrypted vault blobs** → **R2** ✅ *best match for Nook*
- **Simple key → JSON string** → **KV**
- **Live sync / one object per user** → **Durable Objects**

### Why R2 (not D1/KV) for Nook

GitHub storage today is **one encrypted vault file** (`nook-vault.yaml`) read/written via the Contents API. R2 is the closest analogue:

- S3-compatible object API → store a single blob per vault (same content model as GitHub)
- **10 GB free**, no egress fees → good for encrypted YAML vaults + growth
- Works with access keys scoped to a bucket — similar mental model to a GitHub PAT scoped to a repo

**D1** could store metadata later (device enrollments, indexes) but is not required for v1 parity with GitHub.

### Security note (unchanged from GitHub)

Cloudflare credentials in IndexedDB are **storage convenience**, not vault encryption. Compromise of browser storage exposes R2 bucket access, not plaintext secrets — vault content stays encrypted client-side before upload (same as GitHub).

---

## Architecture: generic S3-compatible backend (required)

We **must not** build separate read/write/delete paths per vendor. S3 compatibility is the generic solution — one storage adapter, many providers.

### One adapter, provider presets

Implement a single **S3-compatible vault backend** in Rust/WASM that speaks the standard object API:

- `GetObject` / `PutObject` / `DeleteObject` (or equivalent HTTP)
- ETag-based optimistic concurrency (mirror GitHub `file_sha` today)
- Fixed object key default: `nook-vault.yaml`

Each provider is then just **configuration**:

| Field | Purpose | Example (Cloudflare R2) | Example (Backblaze B2) |
|-------|---------|-------------------------|------------------------|
| `endpoint` | S3 API base URL | `https://<account_id>.r2.cloudflarestorage.com` | `https://s3.us-west-004.backblazeb2.com` |
| `region` | S3 region string | `auto` | `us-west-004` |
| `bucket` | Bucket name | `nook-vault` | `my-nook-bucket` |
| `access_key_id` | Access key | R2 access key | B2 key ID |
| `secret_access_key` | Secret key | R2 secret | B2 application key |
| `object_key` | Vault blob path | `nook-vault.yaml` | `nook-vault.yaml` |

**Provider presets** in the UI map friendly names → default endpoint/region hints:

- **Cloudflare R2** — user supplies account ID + bucket + keys; endpoint derived from account ID
- **Backblaze B2** — user supplies bucket + keys; endpoint/region from B2 dashboard
- **Custom S3** — user fills endpoint, region, bucket, keys manually (covers AWS, MinIO, Tigris, etc.)

This means adding Backblaze B2 or Tigris later is mostly **UI preset + docs**, not a new WASM storage module.

### Why this matters

- R2, B2, Tigris, AWS S3, MinIO, Storj (S3 gateway) all share the same vault semantics
- One test suite for S3 adapter; provider-specific e2e only for preset validation
- Aligns with multi-provider roadmap in auth-providers §5 (GitHub + S3-backed providers side by side)

### Storage provider types (revised)

Prefer a generic type over per-vendor enums where possible:

```typescript
type StorageProviderType = 'local' | 'github' | 's3'

interface S3StorageConfig {
  preset?: 'cloudflare-r2' | 'backblaze-b2' | 'custom'  // UI helper only
  endpoint: string
  region: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
  objectKey?: string   // default: nook-vault.yaml
}

interface StorageProvider {
  id: string
  type: StorageProviderType
  label: string
  createdAt: string
  // github-specific
  githubPat?: string
  githubRepo?: string
  // s3-compatible (all object-store providers)
  s3?: S3StorageConfig
}
```

UI can still show **“Cloudflare sync”** as a branded entry point — it just saves an `s3` provider with `preset: 'cloudflare-r2'` and a derived endpoint.

---

## Current GitHub model (reference)

Today Nook treats GitHub as a blob backend:

- `StorageProviderType`: `'local' | 'github'` ([auth-providers.ts](nook-web/src/lib/auth-providers.ts))
- GitHub provider stores `githubPat`, `githubRepo` in IndexedDB (`nook_auth`)
- WASM `prepare_storage()` resolves `{username}/{repo}` and reads/writes `nook-vault.yaml` via GitHub API ([nook-wasm](nook-wasm/src/lib.rs))
- `VaultState` passes `(storageMode, githubPat, githubRepo)` into WASM on each call

S3 providers plug into the same **provider → credentials → WASM storage adapter** pattern. GitHub remains a separate adapter (Contents API, not S3).

---

## Proposed scope

### User-facing

- [ ] New provider option: **Cloudflare sync** on login gate (`LoginGate`) and settings (`AuthStorage`) — first S3 preset
- [ ] Optional **Custom S3** advanced path (same form, all fields editable) for power users
- [ ] One-time setup fields for Cloudflare preset:
  - Account ID (used to derive endpoint)
  - Bucket name
  - Access Key ID + Secret Access Key (scoped to bucket read/write)
  - Optional object key (default: `nook-vault.yaml`)
- [ ] Label in UI: e.g. `Cloudflare · {bucket}` or `S3 · {bucket}` depending on preset
- [ ] Status chip shows provider name when active (like **GitHub** / **local storage**)

### Data model

- [ ] Extend `StorageProviderType` with `'s3'` and `S3StorageConfig` (see Architecture above)
- [ ] Cloudflare R2 = `type: 's3'`, `preset: 'cloudflare-r2'`, derived endpoint

### Rust / WASM

- [ ] Add `STORAGE_MODE_S3` in [validation.rs](nook-core/src/validation.rs)
- [ ] **One** generic S3-compatible read/write/delete adapter in `nook-wasm` (not Cloudflare-specific)
- [ ] Credential validation: endpoint URL, bucket name, non-empty keys
- [ ] Same vault file format, ETag/version handling for optimistic concurrency (mirror GitHub `file_sha` flow)
- [ ] `prepare_storage()` branch for S3 config (endpoint, region, bucket, keys, object key)
- [ ] Cloudflare preset: helper to build endpoint from account ID

### Tests

- [ ] Unit tests for S3 config validation in `nook-core`
- [ ] Adapter tests against S3-compatible mock or MinIO in CI (generic, not vendor-specific)
- [ ] E2e spec for Cloudflare R2 preset behind env vars (e.g. `NOOK_S3_*` / `NOOK_CLOUDFLARE_*`), similar to [github-vault.spec.ts](nook-web/e2e/github-vault.spec.ts)

### Docs

- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) §2 and §5 — document generic S3 provider + presets
- [ ] User-facing setup guide: Cloudflare R2 bucket, scoped keys, CORS policy
- [ ] Note that B2 / Tigris / custom S3 work via same backend with different preset params

---

## Out of scope (for this issue)

- Multi-provider replication (write vault to GitHub **and** S3 simultaneously) — future work per auth-providers §5
- D1 for relational metadata
- Cloudflare Workers proxy (direct browser → S3 endpoint with scoped keys is enough for v1; CORS on bucket may need configuration)
- Dedicated UI presets for B2 / Tigris (follow-up once generic S3 adapter lands — should be trivial)

---

## Open questions

1. **S3 client in WASM:** Use existing Rust S3 crate vs minimal signed HTTP — evaluate bundle size and CORS constraints in browser.
2. **CORS:** Bucket CORS policy required for browser-direct uploads — document default policy per preset (R2, B2, custom).
3. **Bucket bootstrap:** Should Nook auto-create bucket/object like `ensure_github_repo_exists`, or require pre-created bucket?
4. **UI naming:** Branded presets in login (`Cloudflare sync`) vs generic `S3-compatible storage` with preset dropdown?

---

## Acceptance criteria

- Generic S3 adapter implemented once; Cloudflare R2 works via preset + account-specific endpoint params
- User can select Cloudflare at login, save credentials, and unlock vault stored in R2
- Multi-device enroll/join/sync works with S3-backed vault (same as GitHub)
- Encrypted vault blob in object storage is byte-identical in structure to GitHub-stored vault
- Adding a new S3-compatible provider requires **config/preset only**, not a new storage adapter
- No regression to Local or GitHub providers
- E2E coverage when S3 test credentials are present in CI secrets (optional / skipped otherwise)

## Historical comments

### cypherkitty — 2026-06-21T20:33:08Z

Tracked under the aggregated storage platform epic: #12
