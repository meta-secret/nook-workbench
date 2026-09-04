---
title: Give browser coverage its explicit suite deadline
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-browser-deadline
created_at: 2026-09-04T23:13:00Z
updated_at: 2026-09-04T23:42:00Z
source_issues: []
related_prs: [1353]
depends_on: []
---

# Give browser coverage its explicit suite deadline

## Context

The instrumented 148-test browser suite uses wasm-bindgen's implicit 20-second deadline for the entire suite. Independent domain-migration PRs reach that deadline at different tests while tests continue passing. Successful observed durations were 18.52 and 14.86 seconds.

## Outcome

The existing browser coverage command receives an explicit finite 60-second suite deadline, preserving all tests, instrumentation, coverage floors, and failure propagation.

## Scope

One command-scoped environment assignment and a short explanatory comment in the product Rust Dockerfile. No retries, Taskfile changes, test changes, or product changes.

## Acceptance criteria

- [x] Only the browser coverage invocation receives WASM_BINDGEN_TEST_TIMEOUT=60.
- [x] Hosted output confirms the 60-second deadline and all browser tests pass.
- [x] Existing coverage floor and complete PR checks pass.
- [x] Correction is present on merged main; redundant PR disposition and completion records are explicit.

## Progress

- 2026-09-04: SRE diagnosed repeated deadline exhaustion in PR1347 and PR1348. The 60-second value is an engineering margin around three times the slower successful observation, not a measured requirement or guaranteed runtime. The correction is isolated from pairing domain behavior.

- 2026-09-04: Published [PR1353](https://github.com/meta-secret/nook/pull/1353), two authored additions in one file at9fe82b9a9fe4e521f874de01ac32169cb8214463. Hygiene and exact-diff checks passed; hosted validation is running.

- 2026-09-04: PR1353 passed run33929024323 (148browser tests16.89s; existing51%floor passed at51.42%). Readiness found newmain5e2f75239 fromPR1349, which independently includes the identical60-second assignment. PR1353 closed as superseded without merging its redundant explanatory comment. The desired correction is verified in main; no merge or statistics are attributed to PR1353.
