# PR #1549 — nook-wasm event-log projection coverage

- Plan: `plans/unplanned/20260907T231200Z-nook-wasm-coverage-event-log-roundtrip.md`
- Product repository: `meta-secret/nook`
- Product branch: `codex/nook-wasm-coverage-next14`
- Initial plan base: `a3f10cc5172a18076e95eb721418670b2d9759f3`
- Final validated base: `58d36630ef404a881259e99c73bda28e35e844ff`
- Final product head before merge: `dd176ab57936f6d62c533d3e5c6cb29882f4e9ba`
- Merge commit: `f0a5f370fb0cb857b5da85910d0e33c559c82e2d`

## Scope and outcome

Added behavior-focused WASM browser coverage for event-log projections in `nook-wasm/src/storage/event_db.rs`:

- event-log mode persistence and cleanup;
- signing-seed, heads, and epoch round trips;
- outbox ordering, duplicate suppression, selective removal, and cleanup;
- malformed non-UTF-8 projection rejection before persistence.

Raised the `nook-wasm` absolute line-coverage floor from 81.0% to 81.1% in `nook-core/coverage-floor.json`.

The first hosted attempt exposed that the wasm-only `clear_event_log_mode` helper was not available to host/Dylint compilation. The tests were corrected to use the host-safe `store_delete` path before the final validation.

## Validation

- `cargo fmt --manifest-path nook-app/nook-platform/Cargo.toml --all -- --check`: passed.
- `git diff --check`: passed.
- `task loom:pre-push`: passed; authored additions remained 55 lines.
- Repository policy: run `34172291371`, success.
- Hive Rust/infrastructure verification: run `34172291374`, success.
- Final product graph: run `34172525881`, success.
- Final WASM Node job: `101895757324`, 221 native tests, 49 companion tests, 341 browser tests; `nook-wasm` line coverage `81.23%` (39,356 instrumented lines, 7,387 uncovered).
- Final preview: `https://pr-1549.nokey-sh.pages.dev`.
- `task pr:ready PR=1549`: passed with exact base/head and no unresolved review threads.

Main advanced during delivery, requiring two no-merge-commit rebases; the final exact-head validation and merge used Main `58d36630ef404a881259e99c73bda28e35e844ff`.

