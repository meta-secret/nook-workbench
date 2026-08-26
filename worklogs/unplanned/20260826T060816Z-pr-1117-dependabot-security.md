---
title: Resolve 23 Dependabot alerts and update Codex
feature: unplanned
plan: plans/unplanned/20260826T044554Z-latest-codex-dependabot-remediation.md
nook_pr: 1117
status: completed
started_at: 2026-08-26T04:27:46Z
finished_at: 2026-08-26T06:08:16Z
agent: codex
---

# Work summary

## Outcome

Pull request 1117 is squash-merged as
`c870f29da013320b331c3c84165707bb98fc2ade`. All 23 Dependabot alerts closed
through fixed dependency graphs, and the live default-branch alert count is
zero. No alert was dismissed.

## Progress

- Grouped the 23 alerts by affected npm and Rust package resolution.
- Updated the CI agent to Undici 6.28.0 and verified `npm audit` is clean.
- Updated embedded Codex from the prior July pin to the latest observed upstream
  baseline plus exact security dependency fixes.
- Added a source-compatible Hickory DNS backport for the Resolver 0.25 consumer
  while resolving patched Proto 0.26.1.
- Removed obsolete RustSec exceptions.
- Migrated Hive to explicit Codex auth routing, result-returning auth startup,
  and typed idle-turn submission.
- Preserved isolated embedded configuration and recorded the evidence on the
  original review thread before resolving it.

## Decisions

- Close advisories through dependency resolution only; do not dismiss alerts.
- Pin exact fork revisions with upstream provenance while the latest upstream
  Codex graph remains advisory-affected.
- Preserve the previous custom-CA trust boundary while migrating OpenTelemetry
  to reqwest 0.13.
- Keep the durable dependency-security policy in
  `.cortex/workflows/quality.md`; keep version-specific compatibility details
  out of Cortex.

## Validation

- `npm audit`: zero vulnerabilities.
- `task loom:pre-push`: passed.
- `task loom:cortex-audit`: passed.
- Focused hosted `hive:verify`: passed on exact head
  `eb47e3c488ab51bb153171212a1e4c721cd1a350`.
- Complete hosted PR validation, RustSec/dependency policy, deployment, and
  exact-head Cloud review: passed.
- `task pr:ready PR=1117`: ready with zero unresolved review threads.
- Live Dependabot API after merge: zero open alerts.

## Remaining work

- None.
