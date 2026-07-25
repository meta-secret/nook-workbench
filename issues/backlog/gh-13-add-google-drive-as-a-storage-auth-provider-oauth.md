---
title: "Add Google Drive as a storage auth provider (OAuth)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-21T20:45:00Z
updated_at: 2026-06-28T07:20:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/13"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add Google Drive as a storage auth provider (OAuth)

## Imported context

This record was imported from [Nook GitHub issue #13](https://github.com/meta-secret/nook/issues/13)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add **Google Drive** as a storage provider using **OAuth 2** — the best mainstream onboarding path: users click **Sign in with Google** instead of copying PATs or S3 keys.

Vault content remains the same encrypted blob (`nook-vault.yaml` semantics); Drive stores it as a single file. Multi-device enroll/join/sync behavior matches GitHub.

**Parent epic:** [#12 — Multi-provider storage platform](https://github.com/meta-secret/nook/issues/12) (Adapter 4 — OAuth file storage).

Related:
- [#8 — GitLab (git-hosting file API)](https://github.com/meta-secret/nook/issues/8) — same vault-as-file model, PAT auth instead of OAuth
- [#7 — S3 object storage](https://github.com/meta-secret/nook/issues/7)

---

## Why Google Drive?

| | Google Drive | GitHub (today) | S3 / R2 (#7) |
|--|--------------|--------------|--------------|
| **User auth** | OAuth — one click | Copy PAT | Copy access keys + endpoint |
| **Account ownership** | User's Google account | User's GitHub account | User's cloud account |
| **Free storage** | ~15 GB (shared with Gmail/Photos) | Repo fair use | 1–10 GB depending on preset |
| **Audience** | Everyone with Gmail | Developers | Power users |

**For the user, the only action is authenticate via OAuth.** That is the primary product advantage.

**For Nook:** OAuth app setup, token lifecycle, and Drive file API — similar effort to GitHub, better UX, more platform overhead (Google Cloud Console, consent screen, optional app verification).

---

## Architecture: OAuth file adapter (Adapter 4)

Part of the three-adapter platform in [#12](https://github.com/meta-secret/nook/issues/12):

| Adapter | Auth | Vault shape |
|---------|------|-------------|
| Git-hosting | PAT | File in repo |
| S3 | Access keys | Object blob |
| Edge SQLite | DB token | SQL row |
| **OAuth file** | **OAuth 2** | **File in Drive** |

### Recommended: shared OAuth-file trait

Implement a generic **OAuth file storage adapter** with Google as the first preset. Future: Dropbox, OneDrive — preset + OAuth provider config only.

```typescript
type StorageProviderType = 'local' | 'github' | 's3' | 'sqlite-edge' | 'oauth-file'

interface OAuthFileConfig {
  preset: 'google-drive'   // future: 'dropbox' | 'onedrive'
  accessToken: string
  refreshToken?: string    // required for long-lived sessions
  expiresAt?: string       // ISO — access token expiry
  fileId?: string          // Drive file id once created/found
  folderId?: string        // app-data folder id if using drive.appdata
}

interface StorageProvider {
  id: string
  type: 'oauth-file'
  label: string
  createdAt: string
  oauthFile?: OAuthFileConfig
}
```

UI label: **Google Drive** or **Google Drive sync**.

---

## OAuth flow (user-facing)

1. User selects **Google Drive** on login gate
2. Redirect to Google consent (or popup / GIS token client)
3. User approves scoped access
4. Nook receives **access token** + **refresh token** (first consent only)
5. Tokens saved in IndexedDB (`nook_auth`) — same security model as GitHub PAT
6. Nook finds or creates vault file; connect proceeds as today

**No API keys for the user to copy.**

---

## Developer setup (one-time, Nook project)

Google Cloud Console:

1. Create project (or use existing)
2. Enable **Google Drive API**
3. Create **OAuth 2.0 Client ID** (Web application)
4. Configure:
   - **Authorized JavaScript origins:** `https://nokey.sh`, `http://localhost:5173` (dev)
   - **Authorized redirect URIs:** OAuth callback URL(s)
5. Store `GOOGLE_CLIENT_ID` in build/env (public client id — OK in frontend)
6. **Client secret:** prefer PKCE flow for SPA; avoid embedding secret in static app if possible

### Scope choice (important)

| Scope | Use case | Consent UX |
|-------|----------|------------|
| **`drive.appdata`** ✅ recommended | Hidden app data folder; vault not visible in user's Drive UI | Minimal — "app data" |
| **`drive.file`** | Only files Nook creates/opens | Good — limited to app files |
| `drive` (full) | ❌ avoid | Scary — full Drive access |

**Recommendation:** start with **`drive.appdata`** for a password manager vault. Document fallback to `drive.file` if appdata limitations block multi-device file discovery.

### Production considerations

- **OAuth app verification** may be required for sensitive/restricted scopes with public users
- **Refresh token** rotation / revocation — handle gracefully (re-prompt OAuth)
- **Token storage** in IndexedDB — document threat model (same as [#12](https://github.com/meta-secret/nook/issues/12) security notes)

---

## Drive file API (technical)

Same operations as GitHub git-file adapter ([#8](https://github.com/meta-secret/nook/issues/8)):

| Op | Drive API | Concurrency |
|----|-----------|-------------|
| Find vault | `files.list` (appDataFolder or known `fileId`) | — |
| Read | `files.get` + `alt=media` or export | capture `revisionId` / `md5Checksum` |
| Create | `files.create` with encrypted content | — |
| Update | `files.update` with `If-Match` / revision check | optimistic lock (mirror GitHub `file_sha`) |

Default file name: `nook-vault.yaml` (content = encrypted YAML bytes, same as GitHub).

**API base:** `https://www.googleapis.com/drive/v3`  
**Auth header:** `Authorization: Bearer {access_token}`

### Token refresh

Before each sync (or on 401):

```
POST https://oauth2.googleapis.com/token
  grant_type=refresh_token
  refresh_token=...
  client_id=...
```

Implement in `nook-web` (natural home for OAuth) or WASM if unified with other adapters.

### Layer placement

| Layer | Responsibility |
|-------|----------------|
| `nook-web` | OAuth redirect/PKCE, token refresh, token storage, Drive `fetch` calls |
| `nook-wasm` | Vault crypto, format, device identity (unchanged) |
| `nook-core` | Validation helpers for OAuth config shape |

Unlike GitHub (WASM + `reqwest`), Drive may stay **web-layer I/O** with vault bytes passed to WASM — evaluate during implementation; prioritize OAuth ergonomics.

---

## Proposed scope

### User-facing

- [ ] **Google Drive sync** on login gate and settings
- [ ] **Sign in with Google** button — no manual credential fields
- [ ] Reconnect / token expired flow (re-OAuth)
- [ ] Status chip: **Google Drive**
- [ ] Label: `Google Drive`

### Data model

- [ ] `StorageProviderType` += `'oauth-file'`
- [ ] `OAuthFileConfig` with `preset: 'google-drive'`
- [ ] Persist access + refresh tokens + `fileId` after first connect

### Implementation

- [ ] Google OAuth 2 (PKCE recommended for SPA)
- [ ] Token refresh before sync / on 401
- [ ] Drive file CRUD with revision-based concurrency
- [ ] Bootstrap: create vault file in app data folder on first connect
- [ ] `VaultState` integration — apply OAuth provider before WASM connect
- [ ] Extend storage dispatch (or pass decrypted vault sync via web layer)

### Tests

- [ ] Unit tests: token expiry detection, config validation
- [ ] E2e behind `NOOK_GOOGLE_*` / service account test project (optional; skipped without secrets)
- [ ] Multi-device sync on Drive-backed vault

### Docs

- [ ] User guide: click Sign in with Google — that's it
- [ ] Developer guide: Google Cloud Console setup for contributors
- [ ] Update [auth-providers.md](.cortex/design-docs/auth-providers.md) — OAuth file adapter
- [ ] Update [#12](https://github.com/meta-secret/nook/issues/12) phase checklist when complete

---

## Out of scope (for this issue)

- Dropbox, OneDrive (future OAuth-file presets)
- Google Sign-In as **Nook identity** separate from storage (storage-only OAuth here)
- Multi-provider replication (Drive + GitHub simultaneously) — [#12](https://github.com/meta-secret/nook/issues/12) Phase 5
- S3 / D1 / Turso ([#7](https://github.com/meta-secret/nook/issues/7), [#11](https://github.com/meta-secret/nook/issues/11))
- Storing vault in Google Docs format — raw file bytes only

---

## Open questions

1. **OAuth library:** Google Identity Services (GIS) vs manual PKCE redirect?
2. **Scope:** `drive.appdata` only for v1, or also support `drive.file` for users who want to see the file in Drive?
3. **WASM boundary:** Web-only Drive I/O vs port to WASM for consistency with GitHub?
4. **File discovery:** Store `fileId` in provider config vs search by name on every connect?
5. **App verification timeline:** Ship to limited testers first (unverified app) or wait for verification?
6. **Shared git-file refactor:** Block on [#8](https://github.com/meta-secret/nook/issues/8) generic adapter, or implement Drive standalone first?

---

## Acceptance criteria

- User selects Google Drive, completes OAuth once, vault syncs without copying keys
- Refresh token enables return visits without re-consent (until revoked)
- Multi-device enroll/join/sync works with Drive-backed vault
- Encrypted vault content is semantically identical to GitHub `nook-vault.yaml`
- Tokens in IndexedDB; compromise exposes Drive access only, not plaintext secrets
- No regression to Local, GitHub, or other providers
- E2E coverage when Google test OAuth credentials present (optional / skipped otherwise)
- Documented in epic [#12](https://github.com/meta-secret/nook/issues/12) Phase 4

## Historical comments

### cypherkitty — 2026-06-21T20:45:05Z

Tracked under the aggregated storage platform epic: #12 (Phase 4 — OAuth file adapter).

### cypherkitty — 2026-06-26T03:41:29Z

## Client-side OAuth strategy (no Nook server)

Clarification for implementation — **end users never touch Google Cloud Console**.

### One OAuth app for all users (maintainer setup)

| Who | Action |
|-----|--------|
| **Nook maintainers** (once) | Google Cloud project → enable Drive API → OAuth Web client → consent screen → authorized origins (`https://nokey.sh`, `http://localhost:5173`) + redirect URI (`…/oauth/google/callback`) |
| **End users** | Click **Sign in with Google** → pick account → Allow → done |

`VITE_GOOGLE_CLIENT_ID` is baked into the static build (public client id — intentional). Security: origin lock + redirect URI lock + **PKCE** (no client secret in browser).

### Auth flow (browser ↔ Google only)

1. User selects **Google Drive** on login gate
2. PKCE: generate verifier/challenge → popup or redirect to `accounts.google.com`
3. User approves `drive.appdata` scope
4. Callback at `/oauth/google/callback` receives `code`
5. Browser exchanges `code` + verifier → `POST oauth2.googleapis.com/token` (no Nook backend)
6. `access_token` + `refresh_token` → IndexedDB `nook_auth` (same threat model as GitHub PAT)
7. Drive sync: `fetch googleapis.com/drive/v3/...` with `Bearer access_token`
8. Token refresh on 401 / before sync: client-side refresh via `oauth2.googleapis.com/token`

### Layer placement (confirmed)

| Layer | Responsibility |
|-------|----------------|
| `nook-web` | GIS/PKCE OAuth, token refresh, token storage, optional account email for UI |
| `nook-wasm` | Drive file CRUD via `reqwest` (mirror GitHub adapter), vault crypto unchanged |
| `nook-core` | `StorageMode::GoogleDrive`, token/file-id validation |

### WASM parameter mapping (reuse existing bridge)

- `storage_mode` = `"google-drive"`
- arg2 = `access_token`
- arg3 = `file_id` (empty → discover/create in appDataFolder on first connect)

### Scope v1

- **`drive.appdata`** only — hidden app folder, minimal consent
- Store `fileId` in provider config after first connect
- Popup OAuth with redirect fallback on callback page

### Out of scope for users

- No Google Cloud project per user
- No API keys / client secrets pasted by users
- No Nook-hosted token exchange server

### cypherkitty — 2026-06-26T05:15:38Z

## Implementation update: GIS token client (me-ai pattern)

We migrated away from **authorization-code + PKCE + redirect callback** (which required `client_secret` for Web application OAuth clients — not viable in a static SPA).

### New approach (shipped in PR #53)

Same model as [me-ai](https://github.com/cypherkitty/me-ai):

- **Google Identity Services (GIS)** `google.accounts.oauth2.initTokenClient`
- **Public OAuth client id only** — no client secret, no backend, no `/oauth/google/callback`
- User clicks **Sign in with Google** → GIS returns `access_token` in-browser
- Tokens stored in IndexedDB (`nook_auth`) per provider — same threat model as GitHub PAT
- **Silent refresh** before sync via `requestAccessToken({ prompt: '' })` while the user's Google session is active (~1h access token lifetime)
- If silent refresh fails → user clicks sign-in again (no long-lived refresh token in this flow)

### Google Cloud setup (maintainer)

1. **Enable Google Drive API**
2. **OAuth consent screen** (External for public nokey.sh)
   - Scope: `https://www.googleapis.com/auth/drive.appdata`
   - Add test users while app is in Testing; submit for verification for production
3. **Credentials → OAuth 2.0 Client ID → Web application**
   - **Authorized JavaScript origins only:**
     - `http://localhost:5173`
     - `https://nokey.sh`
   - **Redirect URIs:** not required for GIS token client (can remove `/oauth/google/callback` entries)
4. Copy **Client ID** into `nook-web/src/lib/google-oauth-config.ts` (`GOOGLE_OAUTH_CLIENT_ID`)

No service account. No client secret in the app.

### Resolved open questions

| Question | Decision |
|----------|----------|
| GIS vs PKCE redirect? | **GIS token client** |
| WASM boundary? | Drive I/O in `nook-wasm` (`drive.rs`), OAuth lifecycle in `nook-web` |
| Scope | `drive.appdata` |
| File discovery | `fileId` stored in provider config after first connect |

### Acceptance criteria note

- ~~Refresh token enables return visits without re-consent~~ → **Silent GIS token refresh** while Google session active; re-click sign-in if expired/revoked

### cypherkitty — 2026-06-28T07:20:08Z

Google Drive OAuth sync is implemented (Sign in with Google, `drive.appdata` scope, OAuth setup wizard). Shipped as part of the unified vault rollout in #79.
