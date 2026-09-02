---
title: Nook Pilot successor stack closeout
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-extension-presentation.md
plan: plans/nook-pilot-authentication-control-plane/2026-08-25T01-29-45Z-action-first-pilot-and-toolbar-vault-entry.md
nook_pr: https://github.com/meta-secret/nook/pull/1301
status: completed
started_at: 2026-09-02T16:34:00Z
finished_at: 2026-09-02T16:44:00Z
agent: codex
---

# Nook Pilot successor stack closeout

## Outcome

The contextual Pilot feature is complete on Nook main through its bounded successor pull requests. The compact combined identity and vault toolbar shipped in PR #1212. Rust-owned policy, typed observations, execution revalidation, picker invalidation, passkey validation, and trusted surface refresh shipped through PRs #1202-#1207, #1209, #1211, #1213, and #1214. PR #1301 shipped the simplified authenticator flow: explicit Nook confirmation persists directly without website-outcome gating or staged cancellation state.

## Progress

The obsolete drafts and dependent successors—PRs #1097, #1215, #1216, #1217, and #1221—were closed without merge. Their remaining changes were duplicate history, unrelated session/surface work, or the rejected staged-enrollment lifecycle. Current main contains the verified merge commits for the accepted implementation, and no open pull request remains in the old stack.

## Implementation problems

PR #1215 had accumulated cancellation races and authorization state that were disproportionate to the product need. The direct-save replacement removed that state instead of continuing to repair combinations the product no longer requires. The later stacked PRs inherited the obsolete branch and could not be safely merged as-is.

## Decisions

Keep the combined identity and vault toolbar already merged in PR #1212. Persist an authenticator immediately after explicit Nook preview and vault confirmation. Do not gate persistence on website outcome, and do not retain staged cancellation, cross-surface session coherence, or Rust enrollment presentation successors.

## Validation

PR #1301 passed its exact-head hosted Rust, WASM, Web, policy, coverage, and preview gates before merge. The earlier bounded successors retain their individual hosted validation and review records in their pull requests.

## Remaining work

None for this feature. Unrelated open pull requests remain independently owned.
