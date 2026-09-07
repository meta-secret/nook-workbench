---
title: Nook WASM broad adapter coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 7d8c1b9833995f9ca3b7e066662e117ec2655f44
---

## Objective

Make one materially larger, behavior-focused coverage increment from the 80.8 percent executable floor. The user requested a 5-10 point jump; hosted coverage and the repository's 2,000-authored-line limit remain the evidence and safety bounds.

## Scope

- Extract deterministic Drive list-response projection from the network-bound adapter.
- Add focused browser/unit coverage for IndexedDB registry/blob/catalog flows, local-folder JavaScript boundary guards, and session-independent vault hashing where those contracts are deterministic.
- Preserve digest validation, `appProperties.event_id` matching, malformed-row skipping, pagination behavior, storage key contracts, and fail-closed browser errors.
- Keep the change under the authored-line budget and raise the executable floor only to the largest fresh hosted measurement; do not manufacture a 5-10 point claim if the measured jump is smaller.

## Validation

- Run `cargo fmt --all -- --check` from `nook-app/nook-platform`.
- Run `git diff --check` and `task loom:pre-push` from the product repository root.
- Use exact-head hosted Repository policy and PR validation; extract WASM test count and per-file/total coverage from the fresh WASM Node log.
- Run `task pr:ready PR=<number>` after hosted validation and merge only the exact validated head.
