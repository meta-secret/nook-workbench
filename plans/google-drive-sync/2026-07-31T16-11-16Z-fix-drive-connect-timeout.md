---
title: Fix Google Drive Connect assess timeout
feature: google-drive-sync
issue: issues/google-drive-sync/README.md
status: active
---

# Fix Google Drive Connect assess timeout

## Interpreted outcome
Google Drive Admin "Connect & sync" must finish assess/reconcile without the 30s connection timeout when the vault is already present on Drive. The user-visible timeout must not mention a PAT.

## Requirements
- Drive listing must not treat name-only `{digest}.yaml` junk as events.
- When the local store already has remote event ids, sync must not re-download them all.
- Timeout messaging must be provider-agnostic and come from shared locales.
- Keep put-if-absent / unreadable-candidate behavior from the prior Drive event-parse fix.

## Constraints
- Domain sync behavior stays in Rust/WASM.
- No secrets, raw prompts, or local paths in Workbench records.
- Validate on GitHub Actions; format locally only.

## Assumptions
- The screenshot timeout is `assess_vault_connect` racing full provider sync.
- OAuth itself already succeeds; failure is sync duration / list inflation.

## Exclusions
- Changing Google OAuth consent / client configuration.
- Raising the 30s timeout as the primary fix.

## Execution plan
1. Require matching `appProperties.event_id` on Drive list entries.
2. Fetch only missing remote event ids during sync / writable guard.
3. Replace hardcoded PAT timeout strings with `toasts.error_timeout`.
4. Format, PR, hosted validate, squash-merge, worklog/stats.

## Completion evidence
- Nook PR merged with Rust list-filter test and i18n updates.
- Assess no longer fails solely from re-fetching already-local Drive events.
