---
title: Render login passwords only after explicit reveal
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

# Render login passwords only after explicit reveal

## Context

`SecretDetailRow` fails to render a login password even after the user invokes
the explicit reveal action. This is a distinct disclosure rendering defect and
must not be folded into security-epoch recovery work.

This focused repair belongs to [Browser regression repairs from Main c597249](README.md).

## Outcome

A login row keeps its password masked until the explicit reveal action, then
renders the revealed password in the row. No password is introduced into list
metadata, hidden markup, logs, or persisted browser state.

## Scope

- Start a dedicated repair branch from the current `origin/main`.
- Correct the `SecretDetailRow` login-password rendering path only.
- Add an exact browser regression that verifies masking before reveal and the
  password value after a user-driven reveal.
- Run fresh exact-head Main-equivalent browser validation before merge.
- Exclude security-epoch recovery, extension pairing, and unlock lifecycle
  changes.

## Acceptance criteria

- [ ] A login password is absent from rendered row content before reveal.
- [ ] The explicit reveal action renders the expected password value.
- [ ] Focused component coverage and a Playwright login-row regression cover
  the disclosure boundary.
- [ ] The repair passes an exact-head Main-equivalent browser validation and
  is squash-merged independently.

## Findings and decisions

- The current row branches on `SecretRevealKind.Revealed`; this repair must
  preserve that fail-closed masking boundary.
- This repair has no dependency on the security-epoch lifecycle repair.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31928499672)
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/SecretDetailRow.svelte`
- `nook-app/nook-web/nook-web-app/tests/unit/components/secret-detail-row.test.ts`
- `nook-app/nook-web/nook-web-app/e2e/local-vault.spec.ts`
