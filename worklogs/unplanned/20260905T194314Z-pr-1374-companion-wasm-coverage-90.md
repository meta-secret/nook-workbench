---
title: Pull request 1374 companion WASM 90 percent completed
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260905T075311Z-companion-wasm-coverage-90-final.md
nook_pr: 1374
status: completed
started_at: 2026-09-05T07:53:11Z
finished_at: 2026-09-05T19:38:46Z
agent: codex
---

# Pull request 1374 companion WASM 90 percent completed

## Outcome

Pull request [#1374](https://github.com/meta-secret/nook/pull/1374) squash-merged as `fb5716cd98865a51e97ccc242861681fecd5ee0b`. `nook-companion-wasm` now has an independently enforced 90 percent line-coverage floor, up from 88 percent, with exact hosted coverage at 91.05 percent.

## Progress

- Covered every authentication-workflow match-kind variant and rejection behavior for empty observation bindings and nonnumeric authenticator codes.
- Added meaningful behavior assertions for malformed and unknown grant-authority responses, persistence store names and matching, first pairing-grant projection, default timeout classification, and the default vault URL.
- Kept the tests inline with their implementation modules and kept `nook-companion-wasm/src/lib.rs` at the 1,000-line policy limit.
- Raised only the companion-WASM floor and its executable preflight expectation; unrelated package floors and exclusions were preserved.

## Implementation problems

- The initial focused tests were not sufficient: hosted measurement reached only 89.38 percent, eleven covered lines short of 90, so additional public-wrapper behavior tests were added before changing the floor.
- One added pairing assertion compared a database observation with a store observation; hosted behavior evidence identified the ownership mismatch, and the assertion was corrected to the store-level `pairing` value.
- A dependency-policy run encountered a newly yanked transitive lockfile version inherited from Main. Main independently corrected the lock before the final delivery heads.
- One exact-head run encountered a transient sccache S3 DNS failure before repository tests. Failed jobs passed on an unchanged-head rerun.
- Main advanced repeatedly during validation. Each new Main state was merged without conflict, followed by cleanup and one replacement exact-head validation; the final head contained Main `7c4b6d16c9073b04cab064823b355999e4ad78d8`.

## Decisions

- Added behavior coverage rather than exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- Preserved the independent crate boundary and raised the floor only after hosted evidence exceeded 90 percent.
- Did not expand this pull request into unrelated dependency-policy or Main changes.

## Validation

- Final exact head `42be2a5241adba15e03608541ffb24a3dfaeba23` passed PR run `33987245026`, Repository policy, and Hive validation.
- Hosted WASM Node validation passed 39 companion tests and measured 1,638 of 1,799 lines, or 91.05 percent.
- Native verification, Rust coverage reporting, dependency policy and RustSec, fuzz, Proptest/Insta/Loom, Kani, Dylint, WASM build, web verification, and aggregate Verify and preview all passed.
- Static local gates passed: workspace rustfmt, locked metadata, diff hygiene, numeric floor assertion, the 1,000-line source limit, and `task loom:pre-push`. No local Rust, WASM, or product Docker build was run.
- `task pr:ready PR=1374` returned `ready: true`, with zero unresolved review threads and a successful exact-head deployment, immediately before the SHA-protected squash merge.
- The immutable agent statistics record is [`stats/ai-agent/1374.yaml`](../../stats/ai-agent/1374.yaml).

## Remaining work

- Continue the serial 90-percent mission by measuring the remaining low-floor crates from merged Main and selecting the next bounded crate slice.
