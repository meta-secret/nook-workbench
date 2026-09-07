---
title: Companion pairing approval protocol
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
started_at: 2026-09-07T14:51:01Z
agent: codex
gizmo_id: companion-pairing-approval-protocol
---

# Task plan

## Interpreted request

Deliver the next sequential companion-protocol slice after the merged framework,
composition suite, and identity adapters. Pairing must become one typed Rust
transaction across real website and extension managers; browser code must stop
owning portable request, approval, validation, import, persistence, rollback,
and result semantics.

## Requirements

- Issue a canonical pairing request from Rust with a request identifier, nonce,
  expiry, installation app key, runtime identity, label, and canonical scopes.
- Admit the transported request in Rust before website UI or manager use.
- Authorize the exact request with the real website vault manager and produce a
  generated approval carrying the correlated transaction, validated vault grant,
  event-log evidence, and sealed provider payload.
- Consume the request once at the extension endpoint before effects; reject
  malformed, expired, mismatched, escalated, duplicate, or replayed approval.
- Bind final state to the exact vault, installation encryption/signing keys,
  scopes, imported event authority, and provider recipients.
- Persist pairing state only after the real extension manager import succeeds;
  return a typed correlated acknowledgement admitted by the website endpoint.
- Keep provider credentials opaque and scrub them on every success or failure.
- Add native Rust and independent dual-WASM composition coverage with real
  endpoints/managers and focused browser-adapter coverage using faithful
  in-memory infrastructure implementations.
- Complete Security review, hosted exact-head validation, readiness, squash
  merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not retain or recreate portable pairing schemas, validators, correlation,
  result classification, command ordering, or rollback policy in TypeScript.
- Do not mock application endpoints, managers, authorization, event import, or
  pairing state; only browser transport and persistence mechanics may use
  faithful alternate implementations.
- Do not pass WASM handles between package memories or expose private keys,
  provider credentials, or vault data through simulation interfaces or logs.
- Preserve exact configured origin, extension sender, offscreen lifecycle,
  callback lifetime, timeout, and secret-cleanup browser boundaries.
- Remove the duplicate internal approval ingress; external website messaging is
  the sole approval transport.
- Interactive unlock and ongoing local event-log synchronization are excluded
  and remain later sequential capabilities.
- Product compilation and tests run only in hosted validation; Team Agents may
  run only repository-permitted focused lint or typecheck feedback.
- Keep every authored source file within the 1,000-line limit and the complete
  pull request below 2,000 authored additions without fragmenting the feature.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-approval-protocol
- Estimated authored changed lines: 1450
- Owning modules, packages, or layers: companion pairing core protocol, generated companion WASM admission, manager-backed nook WASM endpoints, website pairing consent transport, extension service-worker and offscreen adapters, direct composition and focused transport tests
- Ownership units:
1. Capability: Typed pairing transaction and pure state machine; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Rust tests prove request admission, exact correlation, expiry, one-shot consumption, scope and capability binding, typed failures, and unchanged state after rejected transitions
2. Capability: Real manager pairing endpoints; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: real website and extension managers authorize, export, import, finalize, and acknowledge one pairing transaction without browser infrastructure or application mocks
3. Capability: Generated browser transport adapters; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: handwritten approval schemas and decisions are removed, the external origin is the sole ingress, and focused tests retain only channel, lifecycle, persistence-adapter, and cleanup behavior
4. Capability: Pairing security acceptance; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms fail-closed request consumption, vault and app-key binding, no replay or scope escalation, complete secret cleanup, and no secondary ingress
5. Capability: Sequential pull request delivery; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted checks, readiness, squash merge, remote verification, and Workbench closeout complete before any unlock or event-log branch starts from current origin/main
- Public or cross-module interfaces: generated pairing request, admitted request, approval, extension admission, acknowledgement, failure, endpoint-state, and manager operation DTOs across nook-companion-core, nook-companion-wasm, nook-wasm, website, and extension
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1450
- Current PR slice and acceptance evidence: Replace the complete pairing approval flow with a Rust-owned transaction and thin generated browser adapters; Acceptance evidence: native and dual-WASM real-instance composition, focused transport coverage, Security acceptance, hosted validation, readiness, squash merge, and remote closeout
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-approval-protocol; Gizmo name: Companion pairing approval protocol; Predecessor Gizmo ID: None; Replace the complete pairing approval flow with a Rust-owned transaction and thin generated browser adapters; Estimated authored changed lines: 1450; Acceptance evidence: native and dual-WASM real-instance composition, focused transport coverage, Security acceptance, hosted validation, readiness, squash merge, and remote closeout

## Initial plan

1. Add the focused Rust pairing protocol types and one-shot endpoint state,
   including exhaustive pure transition tests and generated companion-WASM
   admission functions.
2. Add real-manager website authorization and extension import/finalization
   endpoints in nook-WASM, reusing current vault, event-log, and provider
   primitives, then extend direct composition coverage.
3. Migrate popup, website consent, external service-worker, and offscreen paths
   to generated DTOs and endpoint operations; delete the duplicate ingress and
   superseded TypeScript protocol logic.
4. Run focused static feedback, obtain independent Security review, push one
   coherent head, and complete hosted exact-head delivery and Workbench closeout.

## Completion evidence

- Native Rust tests cover happy path, malformed input, expiration, correlation,
  app-key/vault/scope/provider mismatch, access denial, replay, concurrency, and
  failure-state cleanup with real domain objects.
- Independent website and extension WASM instances exchange only cloned
  generated values and complete pairing through real managers.
- Focused web tests prove browser sender/origin/channel, restart persistence,
  timeout/error, offscreen lifecycle, and credential cleanup behavior without
  substituting application logic.
- The production path contains no handwritten portable pairing schema or
  decision logic and exposes one external approval ingress.
- Security and all applicable hosted repository checks pass on the exact head.
- The PR is ready, squash-merged, remotely verified, and linked from completed
  Workbench issue, plan, worklog, and statistics records.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials,
private data, raw logs, local paths, internal addresses, or unnecessary
infrastructure detail.
