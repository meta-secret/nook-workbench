---
title: "Auto-lock vault after idle session expiration"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T00:30:27Z
updated_at: 2026-06-28T22:02:01Z
source_issues: ["https://github.com/meta-secret/nook/issues/33"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Auto-lock vault after idle session expiration

## Imported context

This record was imported from [Nook GitHub issue #33](https://github.com/meta-secret/nook/issues/33)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add automatic session expiration so an unlocked Nook vault locks itself after a period of inactivity. Default timeout should be **5 minutes**. When the session expires, clear the in-memory unlock state and return the user to the login gate, where they reconnect to their saved auth provider and re-authorize (device keys or backup password).

## Problem

Today a vault stays unlocked indefinitely once the user connects and decrypts it. There is a manual **Lock vault** action (`VaultState.lockVault()`), but no idle timeout. For a password manager, decrypted keys and secrets should not remain in memory when the user walks away.

The auth-providers design doc already anticipates this transition (`Vault → LoginGate: session ends`), but automatic expiration is not implemented yet.

## Desired behavior

### Session lifetime

- Track **last user activity** while the vault is authenticated (e.g. pointer, keyboard, touch, scroll, and meaningful app interactions).
- Reset the idle timer on activity.
- **Default timeout: 5 minutes** of inactivity.
- Optionally make the timeout user-configurable in settings (e.g. 1 / 5 / 15 / 30 minutes, or “never” for local-only dev if we want an escape hatch — TBD).

### On expiration

- Stop background vault sync.
- Call the same session teardown path as manual lock (`clearUnlockedSession()` / `lockVault()`): drop decrypted secrets, vault keys in WASM session state, and authenticated UI.
- Navigate to the **login gate** — not a blank error state.
- Saved auth providers remain in `nook_auth` (IndexedDB); the user does **not** lose provider setup.
- User must complete the existing two-step unlock flow:
  1. **Connection** — pick/reconnect to their auth provider (local or GitHub).
  2. **Get access** — unlock with device keys or backup password.

### UX details

- Show a clear message on the login gate when lock was due to timeout (e.g. “Session expired — unlock again to continue”).
- Optional: brief warning toast ~30s before lock (“Locking in 30 seconds…”).
- Background tabs: consider `document.visibilitychange` — either pause the timer while hidden or lock immediately when hidden past timeout (product decision; document the choice).
- Manual **Lock vault** in settings should remain and behave the same as today.

## Acceptance criteria

- [ ] Unlocked vault auto-locks after **5 minutes** of no user activity (default).
- [ ] Expiration uses the existing lock/session-clear path; no decrypted secrets remain in the web layer after lock.
- [ ] After auto-lock, user lands on `LoginGate` and can reconnect via saved auth provider + unlock method.
- [ ] Activity during an unlocked session resets the idle timer.
- [ ] Manual lock still works and is unchanged.
- [ ] E2E or unit coverage for: idle timeout fires → login gate shown → user can unlock again with saved provider.
- [ ] (Optional) Configurable timeout in settings; if omitted from v1, note as follow-up.

## Security notes

- Session expiration is about **in-memory session lifetime**, not deleting provider credentials or device identity from IndexedDB.
- GitHub PAT and device keys stay in browser storage; re-unlock re-decrypts the vault file using the existing connect / `connectWithPassword` flows.
- Align with zero-knowledge model: timeout reduces exposure window for keys held in Wasm memory after unlock.

## Related areas

- `nook-web/src/lib/vault.svelte.ts` — `lockVault()`, `clearUnlockedSession()`, `isAuthenticated`
- `nook-web/src/App.svelte` — login gate vs vault routing
- `nook-web/src/lib/components/login/` — `LoginWizard`, connection + authorization steps
- `.cortex/design-docs/auth-providers.md` — login-first UX, state diagram (`session ends`)
- Settings UI — possible home for timeout preference

## Open questions

1. Should the timeout apply while the tab is in the background, or only when the tab is visible/focused?
2. Do we want a pre-lock warning, or silent lock only?
3. Is “never auto-lock” acceptable as an advanced setting, or should there always be a maximum?

## Historical comments

No comments.
