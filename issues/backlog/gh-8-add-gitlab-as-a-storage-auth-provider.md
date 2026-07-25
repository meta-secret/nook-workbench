---
title: "Add GitLab as a storage auth provider"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:27:13Z
updated_at: 2026-07-06T10:08:32Z
source_issues: ["https://github.com/meta-secret/nook/issues/8"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add GitLab as a storage auth provider

## Imported context

This record was imported from [Nook GitHub issue #8](https://github.com/meta-secret/nook/issues/8)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **GitLab** as a storage provider alongside **Local** and **GitHub**, using the same vault-file model (`nook-vault.yaml`) and multi-device sync semantics.

Users should be able to pick **GitLab sync** at login, enter a GitLab Personal Access Token (PAT) once, and have credentials persisted in IndexedDB — mirroring the GitHub flow described in [auth-providers.md](.cortex/design-docs/auth-providers.md).

Related: [#7 — Cloudflare R2 / generic S3 provider](https://github.com/meta-secret/nook/issues/7) covers object storage; this issue covers **repository file API** storage (Git-hosting backends).

---

## Why GitLab?

GitLab is the closest peer to GitHub for Nook’s current remote storage model:

| | GitHub (today) | GitLab |
|--|----------------|--------|
| Vault location | `{username}/nook/nook-vault.yaml` | `{username}/nook/nook-vault.yaml` (same idea) |
| Auth | PAT with repo scope | PAT with `api` + `write_repository` (or `read_repository` + write) |
| API style | Contents API (GET/PUT file + SHA) | Repository Files API (GET/PUT file + `commit_id`) |
| Free private repos | ✓ | ✓ on gitlab.com |
| Self-hosted | — | ✓ GitLab CE/EE with custom base URL |

**Benefits for Nook users:**

- Alternative to GitHub without changing the vault format or crypto model
- Same mental model: “my encrypted vault lives in *my* git repo”
- Self-hosted GitLab support (enterprise, air-gapped, or personal Forge-style setups) via configurable API base URL
- Complements [#7](https://github.com/meta-secret/nook/issues/7): Git-hosting providers (GitHub, GitLab) vs S3-compatible object stores (R2, B2, …)

### Security note (unchanged from GitHub)

GitLab PAT in IndexedDB is **storage convenience**, not vault encryption. Compromise of browser storage exposes repository access, not plaintext secrets — vault content stays encrypted client-side before upload.

---

## Architecture: generic repository-file backend (recommended)

GitHub integration today is a dedicated code path in `nook-wasm` (fetch user, ensure repo, read/write `nook-vault.yaml` via Contents API). **GitLab should not copy-paste that logic.**

Implement (or refactor toward) a **generic repository-file storage adapter** with provider-specific configuration:

| Field | Purpose | GitHub | GitLab |
|-------|---------|--------|--------|
| `api_base_url` | REST API root | `https://api.github.com` | `https://gitlab.com/api/v4` (or self-hosted) |
| `token` | PAT | GitHub PAT | GitLab PAT |
| `project_path` | Repo identifier | `{owner}/{repo}` | `{namespace}/{repo}` (URL-encoded for API) |
| `file_path` | Vault blob path | `nook-vault.yaml` | `nook-vault.yaml` |
| `version_id` | Optimistic concurrency | blob `sha` | last commit `id` / file blob id |

Shared operations:

1. Resolve authenticated username / namespace
2. Ensure project/repo exists (create private repo if missing)
3. GET file → decode base64 content + capture version id
4. PUT file → base64 content + version id for conflict detection

Provider presets in UI:

- **GitHub** — existing behavior, refactored onto shared trait/module if practical
- **GitLab.com** — default `api_base_url`, user supplies PAT + repo name (default `nook`)
- **GitLab self-hosted** — user also supplies instance URL (e.g. `https://gitlab.example.com`)

This keeps adding Gitea/Forgejo/Codeberg-style hosts as **config + preset** later, not new WASM modules.

---

## Current GitHub model (reference)

- `StorageProviderType`: `'local' | 'github'` ([auth-providers.ts](nook-web/src/lib/auth-providers.ts))
- GitHub provider stores `githubPat`, `githubRepo` in IndexedDB (`nook_auth`)
- WASM `prepare_storage()` resolves `{username}/{repo}` and reads/writes `nook-vault.yaml` ([nook-wasm/src/lib.rs](nook-wasm/src/lib.rs))
- Optimistic concurrency via cached blob SHA on PUT
- Product spec: [password-manager.md](.cortex/product-specs/password-manager.md) §2D

GitLab plugs into the same **provider → credentials → WASM storage adapter** pattern.

---

## GitLab API specifics

**gitlab.com defaults:**

- API base: `https://gitlab.com/api/v4`
- Auth header: `PRIVATE-TOKEN: {pat}` or `Authorization: Bearer {pat}`
- Current user: `GET /user` → `username`
- Ensure project: `GET /projects/{url-encoded-path}`; if 404 → `POST /projects` with `name`, `path`, `visibility: private`
- Read vault: `GET /projects/{id}/repository/files/nook-vault.yaml?ref=main`
- Write vault: `PUT /projects/{id}/repository/files/nook-vault.yaml` with `branch`, `content` (base64), `commit_message`, and last known `last_commit_id` / content sha for updates

**Differences from GitHub to handle:**

- Project ID can be numeric or URL-encoded path (`username%2Fnook`)
- Concurrency field names differ (`sha` vs `last_commit_id` / blob id)
- Default branch may be `main` or `master` — detect or configure
- Self-hosted instances need user-supplied `api_base_url`

---

## Proposed scope

### User-facing

- [ ] New provider option: **GitLab sync** on login gate (`LoginGate`) and settings (`AuthStorage`)
- [ ] One-time setup fields:
  - GitLab PAT
  - Repository name (default: `nook`, same as GitHub)
  - Optional: GitLab instance URL (default: gitlab.com)
- [ ] Label in UI: e.g. `GitLab · {repo}` or `GitLab · {instance}/{repo}` for self-hosted
- [ ] Status chip shows **GitLab** when active

### Data model

```typescript
type StorageProviderType = 'local' | 'github' | 'gitlab'

interface StorageProvider {
  id: string
  type: StorageProviderType
  label: string
  createdAt: string
  // github
  githubPat?: string
  githubRepo?: string
  // gitlab
  gitlabPat?: string
  gitlabRepo?: string
  gitlabBaseUrl?: string   // default: https://gitlab.com
}
```

Longer term, consider collapsing `github` + `gitlab` into `type: 'git-hosting'` with a shared config struct (mirrors the `s3` approach in #7).

### Rust / WASM

- [ ] Add `STORAGE_MODE_GITLAB` in [validation.rs](nook-core/src/validation.rs)
- [ ] GitLab read/write/delete via Repository Files API
- [ ] PAT validation (non-empty, basic format checks)
- [ ] `prepare_storage()` branch: resolve `{username}/{repo}`, ensure project exists, set vault path
- [ ] Optimistic concurrency via GitLab commit/blob version id (mirror `file_sha` flow)
- [ ] **Recommended:** extract shared repo-file trait; migrate GitHub onto it in same PR or immediate follow-up

### Tests

- [ ] Unit tests for GitLab PAT / repo name / base URL validation in `nook-core`
- [ ] E2e spec behind env vars (e.g. `NOOK_GITLAB_PAT`), similar to [github-vault.spec.ts](nook-web/e2e/github-vault.spec.ts) and [multi-device-github.spec.ts](nook-web/e2e/multi-device-github.spec.ts)
- [ ] Multi-device enroll/join/sync on GitLab-backed vault

### Docs

- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) §2 (provider types, IndexedDB fields)
- [ ] Update [password-manager.md](.cortex/product-specs/password-manager.md) with GitLab adapter section (parallel to §2D GitHub)
- [ ] User setup guide: create PAT scopes, optional self-hosted URL, CORS not applicable (API calls from browser — verify GitLab CORS / token exposure same as GitHub)

---

## Out of scope (for this issue)

- Multi-provider replication (GitHub **and** GitLab simultaneously) — auth-providers §5
- GitLab CI/CD, packages, or other GitLab features
- Gitea / Forgejo / Codeberg presets (follow-up once generic git-hosting adapter exists)
- S3 / R2 storage ([#7](https://github.com/meta-secret/nook/issues/7))

---

## Open questions

1. **Refactor timing:** Implement GitLab on shared repo-file adapter in this PR, or ship GitLab first and refactor GitHub in a follow-up?
2. **Self-hosted v1:** Include instance URL field in v1, or gitlab.com only initially?
3. **PAT scopes:** Document minimum scopes (`api`, `read_repository`, `write_repository`) — align with GitLab’s current PAT UI.
4. **Default branch:** Hardcode `main`, auto-detect from project API, or let user configure?
5. **WASM API:** Extend `connect(storage_mode, token, repo, …)` vs pass a serialized provider config JSON to avoid N provider-specific args.

---

## Acceptance criteria

- User can select GitLab at login, save credentials, and unlock vault stored in GitLab project
- Default project path `{username}/nook` with file `nook-vault.yaml`, auto-created if missing (parity with GitHub)
- Multi-device enroll/join/sync works with GitLab-backed vault
- Encrypted vault blob structure is byte-identical to GitHub-stored vault
- Self-hosted GitLab works when user supplies custom base URL (if in scope for v1)
- No regression to Local or GitHub providers
- E2E coverage when GitLab test credentials are present in CI secrets (optional / skipped otherwise)

## Historical comments

### cypherkitty — 2026-06-21T20:33:09Z

Tracked under the aggregated storage platform epic: #12
