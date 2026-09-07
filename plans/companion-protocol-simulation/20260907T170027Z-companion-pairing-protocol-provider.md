---
title: Companion pairing protocol provider
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
started_at: 2026-09-07T17:00:27Z
agent: codex
gizmo_id: companion-pairing-approval-protocol
---

# Task plan

## Interpreted request

Deliver the pairing protocol as the next sequential capability without
micro-optimizing around a combined provider/consumer diff. Complete and merge
the secure Rust provider first, then start production browser adoption from the
resulting current main in a separate dependent pull request.

## Requirements

- Issue and admit a canonical pairing request with request ID, nonce, expiry,
  runtime identity, installation app/encryption/signing keys, label, Simple
  capability, and canonical scopes.
- Authorize the exact request with the real website manager and produce a
  generated approval bundle from real device, event-log, and provider actions.
- Consume extension authority before fallible untrusted approval decoding and
  before manager effects; every attempt, failure, replay, or concurrent call
  requires a fresh request.
- Verify event-log grant/envelope/store/app-key authority and validate each
  sealed provider credential for the exact installation recipient before
  persistence.
- Integrity-bind the accepted provider manifest when transported provider data
  could be substituted.
- Persist pairing state only after successful manager effects and return a
  typed correlated acknowledgement whose admitted semantic result preserves
  success versus rejection.
- Add real-manager native tests and independent dual-WASM composition coverage
  without browser infrastructure or application mocks.
- Complete Security acceptance, hosted Rust/WASM validation, readiness, squash
  merge, remote verification, and Workbench closeout before browser adoption.

## Constraints and exclusions

- Production popup, website, Chrome routing, and offscreen adapter migration is
  excluded from this provider PR and tracked by the dependent browser-adapter
  issue.
- Do not add TypeScript schemas, validators, transports, or compatibility
  shims in this pull request.
- Do not mock application managers, endpoints, authorization, event import, or
  provider behavior; use real instances and faithful infrastructure only.
- Do not expose private keys, provider credentials, or vault data through test
  APIs, storage, or logs.
- Do not add fallback, recovery, retry, or resumable authority behavior.
- Product compilation and tests run only in hosted validation.
- Keep each source file within 1,000 lines and the provider PR below 2,000
  authored additions without dropping necessary behavior or tests.
- The browser-adapter branch must start from current origin/main only after
  this PR is squash-merged, remotely verified, and closed in Workbench; stacked
  branches and implementation against an unmerged predecessor are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-approval-protocol
- Estimated authored changed lines: 1900
- Owning modules, packages, or layers: companion pairing core state machines, companion WASM generated admission, nook WASM real-manager pairing endpoints, native real-manager and independent WASM composition tests
- Ownership units:
1. Capability: Secure portable pairing protocol; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Rust state-machine tests prove exact binding, expiry, consume-before-decode, replay and concurrency rejection, typed outcomes, and unchanged state after rejected operations
2. Capability: Real manager pairing provider; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: real managers authorize the device, export and import event authority, validate provider recipient and manifest, persist final state only after effects, and compose without browser infrastructure or application mocks
3. Capability: Provider security acceptance; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms one-shot untrusted admission, vault and key binding, provider recipient authentication, no replay, no partial persistence, and no secret exposure or fallback
4. Capability: Sequential provider delivery; Gizmo ID: companion-pairing-approval-protocol; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted checks, readiness, squash merge, remote verification, and Workbench closeout complete before the dependent browser-adapter branch starts from current origin/main
- Public or cross-module interfaces: generated pairing request, request observation, website authorization endpoint, approval bundle, untrusted extension admission, finalization, acknowledgement admission, typed failure, and endpoint-state DTOs across nook-companion-core, nook-companion-wasm, and nook-wasm
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1900
- Current PR slice and acceptance evidence: Complete and secure the reusable Rust pairing protocol provider before production browser adoption; Acceptance evidence: real-manager native tests, independent dual-WASM composition, Security acceptance, hosted Rust and WASM validation, readiness, squash merge, remote verification, and Workbench closeout
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-approval-protocol; Gizmo name: Companion pairing protocol provider; Predecessor Gizmo ID: None; Complete and secure the reusable Rust pairing protocol provider before production browser adoption; Estimated authored changed lines: 1900; Acceptance evidence: real-manager native tests, independent dual-WASM composition, Security acceptance, hosted Rust and WASM validation, readiness, squash merge, remote verification, and Workbench closeout

## Initial plan

1. Revert the browser consumer draft while preserving it in branch history for
   reapplication only after the provider merges.
2. Add exact provider-recipient and provider-manifest validation using real
   cryptographic operations and prove rejected data leaves no state.
3. Add an untrusted approval entrypoint that consumes the exact Rust authority
   before DTO decoding and effects, with replay and concurrent-attempt tests.
4. Extend real-manager native and independent-WASM composition coverage for
   success and every high-risk rejection.
5. Obtain exact-head Security acceptance and complete hosted provider delivery
   before creating the production browser-adapter branch.

## Completion evidence

- Portable tests cover success, malformed input, expiry, correlation, runtime,
  app/encryption/signing key, vault, scope, event authority, provider manifest,
  wrong recipient, replay, concurrency, and effect failure.
- Real website and extension managers complete one pairing transaction without
  browser channels, external infrastructure, or application mocks.
- Independent WASM instances exchange only structural cloned generated DTOs
  and exercise the same admission and acknowledgement interfaces.
- Security review and all applicable hosted Rust/WASM checks pass on the exact
  head.
- The provider PR is ready, squash-merged, remotely verified, and linked from
  completed Workbench records before browser integration starts.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials,
private data, raw logs, local paths, internal addresses, or unnecessary
infrastructure detail.
