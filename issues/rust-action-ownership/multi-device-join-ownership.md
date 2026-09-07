---
title: Type multi-device join and enrollment actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-multi-device-join
dependencies:
  - issues/rust-action-ownership/sentinel-quorum-admission.md
created_at: 2026-09-07T10:18:55Z
updated_at: 2026-09-07T10:53:30Z
source_issues: []
related_prs:
  - 1511
---

# Type multi-device join and enrollment actions

## Context

The multi-device join lifecycle still exposes join-request issuance, approval, denial, and out-of-band enrollment as free operations. These actions carry the exact identity, request, vault keys, stored records, and resulting record set through one security-sensitive graph and should be consuming domain-owned states.

## Outcome

Borrowed owners will issue a join request, approve a pending request against the current roster, deny a request against stored records, and enroll an identity with separate or shared keys. Existing member/auth record schemas, roster fallback behavior, storage ordering, public WASM behavior, and error semantics remain unchanged.

## Scope

Refresh-main closure at `e36d48af16ff7c0223f5305fa26aac1dc315c63c`:

- `nook-app/nook-platform/nook-auth2/src/auth/multi_device.rs`
- new `nook-app/nook-platform/nook-auth2/src/auth/multi_device/join.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/access.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/roster.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/crypto/vault_epoch_crypto.rs`
- `nook-app/nook-platform/nook-core/tests/multi_device_workflow.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/multi_device.rs`

Migrate `create_join_request_record`, `create_join_request_record_with_signing_key`, `approve_join_request`, `deny_join_request`, `enroll_device_with_keys`, and `enroll_device_with_dec`. Hard ceiling: 1,400 authored additions and user target below 2,000.

## Acceptance criteria

- [x] Join request fields, trusted signing-key handling, auth/member envelope construction, roster fallback, record replacement, denial filtering, and validation/error order remain exact.
- [x] Issuance, approval, denial, and enrollment become borrowed or owned consuming action owners with private state where appropriate.
- [x] Separate-key and shared-key enrollment remain distinct without changing schemas or public WASM signatures.
- [x] Existing join lifecycle tests remain and adapt to the consuming owners.
- [x] No unrelated roster, key-resolution, cryptographic, storage, or UI behavior changes.
- [x] Scoped format/static/size gates, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve auth/envelope cryptography, public API behavior at WASM boundaries, and unrelated helpers deferred for later ownership migrations.

## Progress

Fresh main inventory after PR #1507 and merged #1509 found no open-PR overlap with this join lifecycle closure. Open PRs #1510, #1508, and #1210 touch search coverage, companion composition tests, and remote build policy respectively.

## Completion

Implemented and merged as PR #1511 at `3c6419d9512b3528a56422eb2ba075aa42ae1f76`.

- Final PR head: `db6597a72e7a1e8eb99caf33725df61cbb83ad61`
- Base: `e36d48af16ff7c0223f5305fa26aac1dc315c63c`
- Hosted PR run: `34112821428` passed native Rust, WASM build and Node, web, preview, Dylint, dependency/RustSec, Kani, Proptest/Loom, fuzz, coverage, and policy checks.
- Remote Loom verification: `34112844262` passed.
- Preview: `https://pr-1511.nokey-sh.pages.dev`
- Exact-head SECURITY review passed with no P1/P2 findings.
- `task pr:ready PR=1511` returned `ready: true`, `behindBy: 0`, and healthy exact-head deployment immediately before merge.
- No local product builds or tests were run.
