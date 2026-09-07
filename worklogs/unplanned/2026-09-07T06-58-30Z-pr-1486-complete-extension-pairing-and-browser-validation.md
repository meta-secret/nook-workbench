---
title: Complete extension pairing and browser validation
feature: unplanned
issue: issues/unplanned/delayed-extension-pairing-acknowledgement.md
plan: plans/unplanned/2026-09-07T05-52-36Z-complete-pairing-with-stable-browser-placement.md
nook_pr: https://github.com/meta-secret/nook/pull/1486
status: completed
started_at: 2026-09-07T02:06:00Z
finished_at: 2026-09-07T06:50:02Z
agent: codex
---

# Work summary

## Outcome

PR 1486 was squash-merged after exact-head Security acceptance, canonical readiness, a successful full hosted validation, and live deployment of the fail-closed ARC runner placement required by the extension suite.

## Progress

- Replaced the five-second pairing timeout and three-send replay with one grant delivery that waits for the extension's completed-import acknowledgement.
- Added focused unit and browser-demo coverage for a delayed acknowledgement and exact single delivery.
- Made the extension mock-auth host distinguish typed missing assets from client routes, and aligned the LinkedIn smoke fixture with its active login surface.
- Bounded Playwright preview shutdown so completed browser suites terminate cleanly.
- Restricted containerized browser jobs to an explicit three-node eligibility inventory and excluded the incompatible `bynull-servo` runner.
- Extracted the reusable text-contract owner to keep the ARC validator below the repository's 1,000-line hard limit.

## Implementation problems

- Hosted validation exposed a timer-handle type mismatch, mock-auth HTML responses for missing modules, canonical Knip inventory drift, and an unbounded preview teardown. Each defect was corrected with focused contracts.
- Bun 1.3.14 crashed on the Ubuntu 26.04 kernel-7 runner before extension tests executed. SRE proved the same image succeeded on the three declared kernel-6.12 nodes and deployed fail-closed placement.
- One registry outage and one Sentinel isolation chooser timeout were transient shared-service or unrelated-suite failures. Neither reproduced on the final exact-head validation.
- Main advanced during delivery and was merged without conflicts before the final exact-head run.

## Decisions

- Pairing approval has no application timeout because the sender cannot distinguish a failed import from a completed import with delayed acknowledgement.
- A user approval sends one grant only; missing acknowledgements and runtime errors remain fail-closed.
- Runner eligibility is a repository-declared exact inventory, not runtime host/kernel detection or a compatibility fallback.
- Live deployment quarantines the build fleet before exact eligibility reconciliation, verifies the dual selector, and then reactivates the nodes.

## Validation

- Security accepted final head `0f311f566b17926e451ce9cf5bda84f71021dd83` with no blockers.
- `task loom:pre-push PR=1486` passed with 586 authored additions.
- `task infra:arc:deploy` passed in 180.48 seconds; exactly `nook-rise-s-1`, `nook-rise-s-2`, and `ovh-us` are eligible, while `bynull-servo` is excluded. ARC, all listeners, and four BuildKit endpoints were healthy, and the pre-existing job was not interrupted.
- Final PR run `34091381015` passed all 16 applicable jobs, including both browser shards and full extension E2E. Repository policy, Hive verification, cancellation policy, and preview deployment `6303399243` passed.
- `task pr:ready PR=1486` returned `ready: true` with no reasons, no substantive comments, and no unresolved review threads.

## Delivery

- PR 1486 merged at 2026-09-07T06:50:02Z as squash commit `caaef127dad2d2c390378fd5e007f36dd33850e5`.
- Immutable agent statistics were validated and published at `stats/ai-agent/1486.yaml`.
- No remaining implementation or delivery work is required.
