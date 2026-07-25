---
title: "Add Supabase Storage as a storage auth provider"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:29:35Z
updated_at: 2026-07-06T10:08:48Z
source_issues: ["https://github.com/meta-secret/nook/issues/10"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add Supabase Storage as a storage auth provider

## Imported context

This record was imported from [Nook GitHub issue #10](https://github.com/meta-secret/nook/issues/10)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **Supabase Storage** as a storage provider preset alongside **Local**, **GitHub**, and other backends — using the same vault-file model (`nook-vault.yaml`) and multi-device sync semantics.

Users should be able to pick **Supabase sync** at login, enter their project’s Storage S3 credentials once, and have them persisted in IndexedDB — mirroring the GitHub PAT flow described in [auth-providers.md](.cortex/design-docs/auth-providers.md).

**Depends on:** [#7 — generic S3-compatible storage adapter](https://github.com/meta-secret/nook/issues/7). Supabase is **not** a separate WASM storage module — it is an **S3 preset** with Supabase-specific default parameters.

**Model:** User brings **their own Supabase project** (like GitHub PAT today), not Nook-hosted Supabase Auth. Vault encryption stays client-side; Supabase credentials only grant access to the user’s bucket.

Related:
- [#7 — Cloudflare R2 / generic S3](https://github.com/meta-secret/nook/issues/7)
- [#9 — Fly.io / Tigris S3 preset](https://github.com/meta-secret/nook/issues/9)
- [#8 — GitLab (repository-file API)](https://github.com/meta-secret/nook/issues/8)

---

## Why Supabase?

Supabase Storage is **S3-compatible** ([announcement](https://supabase.com/blog/s3-compatible-storage), [S3 auth docs](https://supabase.com/docs/guides/storage/s3/authentication)) — same vault blob model as R2/Tigris, with the added appeal of users who already run a Supabase project for other apps.

### Free tier (Forever free plan)

| Resource | Free limit | Notes for Nook |
|----------|------------|----------------|
| **File storage** | 1 GB | Plenty for encrypted `nook-vault.yaml` |
| **Max upload size** | 50 MB / file | Vault file is tiny — not a concern |
| **Egress** | 5 GB uncached + 5 GB cached / month | Sync polling should stay well under this |
| **Active projects** | 2 max | User’s own Supabase account |
| **Inactivity** | Project pauses after 1 week idle | User must keep project active or upgrade |

Smaller storage free tier than R2 (10 GB) or Tigris (5 GB), but strong if the user **already has Supabase** and wants vault in the same project ecosystem.

### Why Supabase Storage (not Supabase Auth / Postgres)

| Supabase product | Fit for Nook vault |
|------------------|-------------------|
| **Storage (S3 API)** | ✅ One encrypted blob — same as R2/Tigris |
| **Supabase Auth** (email, OAuth) | ❌ Different model — Nook has no master passphrase; device keys + vault `auth:` section |
| **Postgres** | ❌ Relational DB — wrong model for vault file sync |
| **Edge Functions** | ❌ Out of scope — browser talks directly to Storage |

**Future (out of scope):** Supabase Auth could complement login UX later, but v1 should match other providers: **user-owned project + storage credentials**, zero-knowledge vault unchanged.

### Provisioning path

User creates or uses an existing Supabase project, then in **Project Settings → Storage → S3 Configuration**:

1. Generate S3 access key + secret
2. Copy project ref, region, endpoint
3. Create a private bucket (e.g. `nook-vault`)
4. Paste credentials into Nook

**S3 endpoint (platform):**

```
https://<project-ref>.storage.supabase.co/storage/v1/s3
```

(Legacy/alternate: `https://<project-ref>.supabase.co/storage/v1/s3` — user-editable in form)

**S3 client requirements** (from Supabase / Litestream docs):

- `forcePathStyle: true`
- Payload signing may be required (`sign-payload: true`) — verify in generic S3 adapter (#7)

### Security note (unchanged from GitHub / R2)

Supabase S3 access keys in IndexedDB are **storage convenience**, not vault encryption. Compromise of browser storage exposes bucket access, not plaintext secrets — vault content stays encrypted client-side before upload.

Supabase documents S3 access keys as intended for server-side use; Nook’s browser-direct model matches R2/Tigris tradeoffs — scoped keys, user-owned project, encrypted blob only.

---

## Architecture: S3 preset (required — see #7)

Supabase **must** plug into the generic S3 adapter from [#7](https://github.com/meta-secret/nook/issues/7).

### Supabase Storage preset config

| Field | Value (preset defaults) |
|-------|-------------------------|
| `preset` | `'supabase-storage'` |
| `endpoint` | `https://<project-ref>.storage.supabase.co/storage/v1/s3` |
| `region` | from Supabase S3 config page (e.g. `us-east-1`) |
| `bucket` | user-created bucket name |
| `access_key_id` | from Storage S3 settings |
| `secret_access_key` | from Storage S3 settings |
| `object_key` | `nook-vault.yaml` (default) |
| `force_path_style` | `true` (required — preset flag for S3 adapter) |

UI shows **“Supabase sync”**; saved provider is `type: 's3'`, `preset: 'supabase-storage'`.

```typescript
// Extends S3StorageConfig from #7
interface S3StorageConfig {
  preset?: 'cloudflare-r2' | 'fly-tigris' | 'supabase-storage' | 'backblaze-b2' | 'custom'
  endpoint: string
  region: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
  objectKey?: string
  forcePathStyle?: boolean   // true for Supabase preset
}
```

**Optional v2:** Session-token auth (`project_ref` + anon key + user JWT + RLS) — more complex, better least-privilege; not required for v1 parity with other S3 presets.

---

## Comparison with other S3 presets

| Preset | Free storage | S3 API | Browser-direct | Notes |
|--------|-------------|--------|----------------|-------|
| Cloudflare R2 (#7) | 10 GB | ✓ | ✓ + CORS | Best free GB |
| Fly/Tigris (#9) | 5 GB | ✓ | ✓ + CORS | Global edge caching |
| **Supabase** | **1 GB** | ✓ | ✓ + CORS | Best if user already on Supabase |
| Custom S3 (#7) | varies | ✓ | ✓ | MinIO, AWS, B2, … |

---

## Proposed scope

### User-facing

- [ ] New provider option: **Supabase sync** on login gate (`LoginGate`) and settings (`AuthStorage`) — S3 preset (blocked on #7)
- [ ] Setup fields:
  - Project ref (used to build default endpoint; editable)
  - Region (from S3 config page)
  - Bucket name
  - S3 Access Key ID + Secret Access Key
  - Optional object key (default: `nook-vault.yaml`)
- [ ] Label in UI: e.g. `Supabase · {bucket}` or `Supabase · {project-ref}`
- [ ] Status chip shows **Supabase** when active
- [ ] Setup docs: create bucket, generate S3 keys, configure CORS for browser origin

### Data model

- [ ] No new `StorageProviderType` — use `type: 's3'`, `preset: 'supabase-storage'`
- [ ] `forcePathStyle: true` stored or implied by preset

### Rust / WASM

- [ ] **No Supabase-specific adapter** — reuse generic S3 module from #7
- [ ] Preset helper: build endpoint from project ref; set `force_path_style`
- [ ] Validate non-empty project ref, bucket, keys, region
- [ ] Ensure S3 adapter supports path-style addressing and payload signing if Supabase requires it

### Tests

- [ ] E2e spec behind env vars (e.g. `NOOK_SUPABASE_S3_*`), skipped unless secrets present
- [ ] Multi-device enroll/join/sync on Supabase-backed vault

### Docs

- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) — S3 presets include Supabase
- [ ] User setup guide:
  1. Create Supabase project + private bucket
  2. Generate S3 access keys (Settings → Storage)
  3. Configure bucket CORS for `https://nokey.sh` (and local dev)
  4. Paste credentials into Nook
- [ ] Note free-tier limits: 1 GB storage, 50 MB/file, project pause after inactivity

---

## Out of scope (for this issue)

- Generic S3 adapter implementation ([#7](https://github.com/meta-secret/nook/issues/7))
- Supabase Auth (email/OAuth login) as Nook identity provider
- Postgres / Realtime / Edge Functions
- Row Level Security + JWT session-token S3 auth (v2 enhancement)
- Multi-provider replication — auth-providers §5
- Self-hosted Supabase (possible via custom endpoint — document as advanced/custom S3, or add preset field later)

---

## Open questions

1. **S3 adapter quirks:** Does Supabase require payload signing in browser/WASM? Test early in #7 implementation.
2. **Endpoint hostname:** Default to `*.storage.supabase.co` (performance) vs `*.supabase.co` — user override always available?
3. **Bucket bootstrap:** Auto-create bucket via Supabase REST API (needs service role?) vs require user pre-creates bucket?
4. **Issue ordering:** Part of #7 multi-preset PR or fast follow-up after #7 merges?
5. **Branding:** `Supabase` vs `Supabase Storage` in UI?

---

## Acceptance criteria

- Blocked on #7 generic S3 adapter being merged
- User can select Supabase at login, save credentials, and unlock vault stored in their bucket
- Provider saved as `type: 's3'`, `preset: 'supabase-storage'` with path-style + correct endpoint defaults
- Multi-device enroll/join/sync works with Supabase-backed vault
- Encrypted vault blob structure is byte-identical to other backends
- No new WASM storage code beyond preset defaults, validation, and any required S3 client flags
- No regression to Local, GitHub, or other S3 presets
- E2E coverage when Supabase test credentials are present in CI secrets (optional / skipped otherwise)

## Historical comments

### cypherkitty — 2026-06-21T20:33:12Z

Tracked under the aggregated storage platform epic: #12
