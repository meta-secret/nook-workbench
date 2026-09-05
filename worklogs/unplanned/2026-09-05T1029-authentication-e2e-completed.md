---
title: Complete deterministic authentication E2E repair
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec.md
plan: plans/unplanned/2026-09-04T2357-active-grant-authority.md
nook_pr: 1343
status: completed
started_at: 2026-09-04T20:41:00Z
finished_at: 2026-09-05T10:29:43Z
agent: codex
---

# Complete deterministic authentication E2E repair

## Outcome

PR [#1343](https://github.com/meta-secret/nook/pull/1343) was squash-merged as
`ddf0f8a09da07c2bbf14bd4db044705bab7f572f`. The assigned
[Main run 33959372860](https://github.com/meta-secret/nook/actions/runs/33959372860)
passed every executed job, including Native, WASM, Web, browser E2E, extension
E2E, cache publication proofs, and the development deployment.

## Delivered architecture

- Rust/Core owns exact requested-vault grant classification. The WASM boundary
  exposes typed requests and outcomes; TypeScript transports them and performs
  browser cleanup.
- The offscreen receiver is created before classification after lock or expiry,
  without silently unlocking a new manager. Failed creation or import stops the
  remaining lifecycle operation.
- An unrelated unpaired vault update preserves the independent active session.
  A missing, revoked, malformed, or mismatched active grant fails closed.
- Ten rendered Svelte fixtures pass through the production DOM observer and real
  generated WASM planner. They cover recognized forms, unsafe submissions, and
  the intentional enrollment-verification exclusion.
- Browser and extension tests cover warm-session behavior, passkey-mock
  isolation, explicit reauthentication after revocation, wrong-password
  handling, account-picker cleanup, and enrollment consent behavior.

## Validation

- Final PR run [33958717556](https://github.com/meta-secret/nook/actions/runs/33958717556)
  passed at exact head `fb9bf5f15c4fa9200ea545153dc4a3809f8c4ea7`.
- 1,028 native Nextest cases, 198 preflight cases, 670 Vitest cases, 158 browser
  WASM cases, 204 browser E2E cases, and all 28 extension E2E cases passed.
- One browser case and two extension cases passed on retry and remain recorded
  as flaky rather than first-pass successes.
- The final exact-head security review was nonblocking and no review thread was
  unresolved. The authored change contained 1,482 additions.
- Full execution history and waste evidence are preserved in the
  [PR statistics record](https://github.com/meta-secret/nook-workbench/blob/main/stats/ai-agent/1343.yaml).

## Implementation problems and decisions

- Collection errors initially hid independent fixture and lifecycle defects.
  Regression coverage now crosses actual runtime parsing and queue dispatch.
- A verified-access test wrote the companion profile but read the selected
  identity profile; it now reads the same domain profile it writes.
- Re-running only failed jobs was incompatible with attempt-numbered E2E image
  tags. Replacement validation used fresh workflow runs.
- A Main integration pushed a companion WASM source file one line beyond the
  repository limit. Adjacent private module declarations were consolidated
  without changing behavior.
- Repeated Main movement required exact-base integration and revalidation. Each
  successful historical run remains evidence, but only the final exact-head run
  was used for readiness.

## References

- [Focused issue](../../issues/hive-isolated-agent-platform/main-failure-7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec.md)
- [Immutable plan](../../plans/unplanned/2026-09-04T2357-active-grant-authority.md)
- [Historical blocked worklog](2026-09-04T2342-authentication-e2e-blocked.md)
