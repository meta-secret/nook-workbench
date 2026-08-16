---
title: Restore post-recovery app and extension unlock
status: ready
priority: p1
automation: agent
owner: codex
created_at: 2026-08-16T06:00:00Z
updated_at: 2026-08-16T06:00:00Z
source_issues: []
related_prs: []
depends_on: []
---

# Restore post-recovery app and extension unlock

## Context

Main run 31928499672 failed after the security-epoch recovery delivery. The
recovery lifecycle must leave persisted state that a reloaded Simple Vault and
its paired browser extension can unlock and re-approve without a stale runtime
or event-log access rejection.

This focused repair belongs to [Browser regression repairs from Main c597249](README.md).

## Outcome

After security-epoch recovery, a reload preserves a safe unlock path for both
the app and paired extension. Re-approval completes without restoring stale
authorization or bypassing user authentication.

## Scope

- Start a dedicated repair branch from the current `origin/main`.
- Correct only the security-epoch recovery, persisted runtime, and paired
  extension unlock/re-approval lifecycle.
- Add exact Playwright coverage for recovery followed by app reload/unlock and
  paired extension reload/unlock/re-approval.
- Run fresh exact-head Main-equivalent browser validation before merge.
- Exclude secret-row rendering and all unrelated disclosure behavior.

## Acceptance criteria

- [ ] A recovered app reload reaches an explicit, successful unlock path.
- [ ] A paired extension reload can unlock and re-approve the recovered vault
  without `event-log-access-not-granted` or stale-runtime reuse.
- [ ] Browser regressions cover the app recovery path and
  `extension-passkey-session.spec.ts` re-approval path.
- [ ] The repair passes an exact-head Main-equivalent browser validation and
  is squash-merged independently.

## Findings and decisions

- Main 31928499672 failed only in Web e2e and Extension e2e; native, WASM,
  web-build, and UI-demo jobs passed.
- This repair owns the lifecycle boundary, not secret disclosure rendering.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31928499672)
- `nook-app/nook-web/nook-web-app/e2e/device-identity-recovery.spec.ts`
- `nook-app/nook-web/nook-web-extension/e2e/extension-passkey-session.spec.ts`
