---
title: Security epoch prepared-to-committed typestate
feature: rust-action-ownership
issue: issues/rust-action-ownership/security-epoch-commit-state.md
started_at: 2026-09-05T21:57:42Z
agent: codex
gizmo_id: rust-action-ownership-security-epoch-commit
---

# Task plan

## Interpreted request

Continue the project-wide action graph migration by encoding the security epoch persistence boundary as the simplest private Rust typestate transition.

## Requirements

- Make `SecurityEpochRecoveryPlan::prepare_execution` consume the plan into a prepared execution.
- Make prepared execution commit through the manager and yield a distinct committed execution only after the event pair saves and heads install.
- Make committed execution consume itself during completion.
- Move remaining module free functions to the actual plan, prepared rotation, or committed execution owners.
- Preserve parsing and error precedence, persistence abort behavior, before/after-commit classification, projection, key/outbox/marker ordering, and secret zeroization.
- Add bounded frontier and preparation-rejection coverage and activate ownership lints.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`.
- Keep authored additions at or below 300 and the file below 750 lines.
- Private states must not implement `Clone`, `Copy`, `Default`, or serialization.
- No cancellation cleanup, exactly-once claim, public API, ABI, schema, dependency, logging, fallback, or recovery-policy change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-security-epoch-commit
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: nook-wasm security epoch execution
- Ownership units:
1. Capability: Security epoch prepared-to-committed typestate; Gizmo ID: rust-action-ownership-security-epoch-commit; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private security epoch recovery execution states; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted persistence, behavior, and Dylint checks pass
- Public or cross-module interfaces: None; private implementation states only
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Security epoch prepared-to-committed typestate; Acceptance evidence: Hosted persistence, behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-security-epoch-commit; Gizmo name: Security epoch prepared-to-committed typestate; Predecessor Gizmo ID: None; Security epoch prepared-to-committed typestate; Estimated authored changed lines: 300; Acceptance evidence: Hosted persistence, behavior, Dylint, and source SECURITY

## Initial plan

1. Implement the one-file prepared-to-committed state transition and focused frontier tests.
2. Format, push, and obtain hosted validation and source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced committed-state completion, exact persistence/error ordering, ownership lint enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
