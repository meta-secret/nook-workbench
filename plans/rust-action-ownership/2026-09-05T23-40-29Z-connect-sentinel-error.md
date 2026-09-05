---
title: Sentinel ceremony error ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/connect-sentinel-error.md
started_at: 2026-09-05T23:39:48Z
agent: codex
gizmo_id: rust-action-ownership-connect-error
---

# Task plan

## Interpreted request

Assign the existing Sentinel-ceremony error predicate to the error type whose variant and message determine the result.

## Requirements

- Move the classifier to a private `NookError` instance method.
- Preserve the exact eligible variants, exact case-sensitive markers, and false cases.
- Preserve both callers' ceremony-session preparation and original error return.
- Enable module ownership lints and annotate the five required browser test callbacks.
- Add a small table-driven Rust classifier test.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/manager/connect.rs`.
- Keep authored additions at or below 100 and final file below 950 lines.
- No typestate for this pure observation and no new error schema.
- No API, ABI, storage/event schema, crypto, authorization, logging, fallback, ceremony, or recovery change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-connect-error
- Estimated authored changed lines: 100
- Owning modules, packages, or layers: nook-wasm vault connection error handling
- Ownership units:
1. Capability: Sentinel ceremony error ownership; Gizmo ID: rust-action-ownership-connect-error; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/connect.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/connect.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private NookError predicate and existing manager callers; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Remote Loom and hosted Rust/WASM/Dylint checks pass
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 100
- Current PR slice and acceptance evidence: Sentinel ceremony error ownership; Acceptance evidence: Remote Loom, hosted Rust/WASM/Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-connect-error; Gizmo name: Sentinel ceremony error ownership; Predecessor Gizmo ID: None; Sentinel ceremony error ownership; Estimated authored changed lines: 100; Acceptance evidence: Remote Loom, hosted Rust/WASM/Dylint, and source SECURITY

## Initial plan

1. Move the predicate and test fixtures to meaningful owners without changing connection behavior.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Error-owned predicate, exact behavioral coverage, module ownership enforcement, remote Loom and hosted Rust/WASM/Dylint checks, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
