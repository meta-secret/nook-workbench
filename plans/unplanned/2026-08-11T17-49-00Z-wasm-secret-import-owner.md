---
title: Move WASM secret imports into their focused owner
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-11T17:49:00Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration with the oversized WASM secrets manager. Move
the import-format browser bindings into the existing secret-import owner while
preserving the public WASM API and keeping secret CRUD, search, synchronization,
and inline behavior tests with their current production owners.

## Requirements

- Reduce `manager/secrets.rs` from 796 lines to at most 750 lines.
- Organize import-format entry points with the import parsing and application
  support they already consume.
- Preserve every JavaScript export name and import result behavior.
- Keep both affected Rust source files at or below 750 lines.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, mobile scaffold, or new platform API is included.
- No arbitrary numbered fragments or test-only extraction is allowed.
- Portable secret-import behavior remains in Rust; this slice does not move
  browser lifecycle concerns or add product behavior.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 420
- Owning modules, packages, or layers: WASM secret-import adapter
- Public or cross-module interfaces: Existing `NookVaultManager` JavaScript
  import method names and Rust helper interfaces remain stable.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 420
- Current PR slice and acceptance evidence: WASM secret-import adapter ownership; Acceptance evidence: Both affected Rust files are below 750 lines, JavaScript exports remain stable, and focused plus complete exact-head validation passes.
- PR slices and acceptance evidence:
WASM secret-import adapter ownership; Acceptance evidence: Both affected Rust files are below 750 lines, JavaScript exports remain stable, and focused plus complete exact-head validation passes.

## Initial plan

1. Inventory import bindings, helpers, imports, and direct callers.
2. Move all import-format `NookVaultManager` bindings into
   `secrets/secret_import.rs` with the imports they own.
3. Verify source line counts and public export stability.
4. Run host-applied format and pre-push hygiene, then publish the PR.
5. Run focused hosted Rust/WASM checks and complete exact-head validation.
6. Resolve existing actionable feedback, pass readiness, squash merge, and
   publish the Workbench completion records.

## Completion evidence

- Both affected Rust files are at or below 750 physical lines.
- Rust formatting and strict all-target Clippy accept the new module ownership.
- WASM build/tests preserve all import entry points.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
