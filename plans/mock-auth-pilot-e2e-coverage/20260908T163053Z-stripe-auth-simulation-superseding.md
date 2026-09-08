---
title: Stripe authentication transport and simulation superseding plan
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-08T16:30:53Z
agent: codex
gizmo_id: stripe-auth-simulation
---

# Task plan

## Interpreted request

Complete the Stripe authentication simulation mission through small, independently mergeable pull requests. Preserve the broad popular-site evidence as test data, but establish versioned, fail-closed authentication observation and runtime-response contracts before activating credential disclosure or adding Stripe browser coverage. Do not compress code to stay below repository limits; split by functional ownership when a complete correction would make a pull request too large.

## Requirements

- Preserve the merged versioned disclosure-control policy from Nook PR #1554.
- Give the outer authentication observation transport an explicit version before making disclosure evidence mandatory at that boundary.
- Keep missing transport versions malformed; never infer a legacy version or default omitted disclosure evidence to `Absent`.
- Validate malformed supported observations before reporting a sibling future version, while leaving future bodies opaque.
- Represent observation-transport version outcomes independently from the existing authentication workflow match result.
- Introduce a separately versioned runtime request and response protocol before activating the new observation transport in Web code.
- Keep response-envelope version failures distinct from unsupported input-observation versions.
- Revalidate the exact assignment, destination, fields, and activation control immediately before any credential-bearing effect.
- Keep generic saved-login fill from bypassing the disclosure transaction or its exclusive evidence channel.
- Reproduce the observed Stripe Dashboard login structure only with fake data and intercepted local browser traffic.
- Add provider fixtures only when they introduce a genuinely different authentication-page structure.

## Constraints and exclusions

- No compatibility fallback, inferred legacy schema, default disclosure evidence, response retry through an older protocol, wildcard match, or reason-string discrimination.
- No credentials, tokens, cookies, browsing state, volatile anti-abuse identifiers, or private data in source, tests, logs, or Workbench.
- Do not contact or submit to Stripe, identity providers, CAPTCHA, passkey, SSO, or anti-abuse systems.
- Portable classification and authorization remain in Rust; WASM is a typed adapter; Web owns DOM observation and effects but not security policy.
- Do not run local product compilation, Rust/WASM suites, full browser suites, or full repository validation. Use focused permitted checks and hosted product validation.
- Every authored source file remains at or below 1,000 lines. Warn before 1,500 authored additions per PR and stop before 2,000. Redesign or split by functional responsibility rather than compressing lines.
- Deliver sequentially from current `origin/main`; no stacked branches or pull requests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: stripe-auth-simulation
- Estimated authored changed lines: 4450 across the complete sequential mission
- Owning modules, packages, or layers: Companion Core observation and disclosure policy; typed companion WASM and Nook WASM projections; versioned Web extension request/response adapters; browser effect boundary; fake Stripe fixture and simulations; pull-request delivery; Workbench evidence.
- Ownership units:
1. Capability: Versioned disclosure-control policy; Gizmo ID: stripe-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Nook PR #1554 is merged with strict current and future-version policy tests.
2. Capability: Versioned observation transport and classification outcome; Gizmo ID: stripe-auth-observation-transport; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core and companion-WASM tests prove strict current writing, opaque future bodies, supported-entry validation precedence, and a typed transport outcome without changing active Web routing.
3. Capability: Versioned runtime protocol and atomic Web activation; Gizmo ID: stripe-auth-runtime-protocol; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: Versioned runtime request and response contracts and typed WASM projections; Expertise allowed test paths: Focused Core, WASM, and Web contract tests; Expertise forbidden paths: Credential values and provider-specific policy; Expertise consumer interfaces: Generated typed request, response, and observation-version outcomes; Expertise acceptance evidence: Hosted Rust, WASM, Web, and demo checks prove the new protocol activates atomically and fails closed.
4. Capability: Two-stage credential disclosure transaction; Gizmo ID: stripe-auth-disclosure-transaction; Functional owner: Development core; Expertise provider: Web development; Expertise allowed code paths: Typed browser effect adapter and focused tests; Expertise allowed test paths: Unit and intercepted browser tests; Expertise forbidden paths: Web-owned authorization policy; Expertise consumer interfaces: Fresh exact assignment capability and exclusive disclosure evidence; Expertise acceptance evidence: Tests prove stale assignments, destination drift, ambiguous controls, and generic-fill bypasses cannot disclose or activate.
5. Capability: Exact Stripe fixture and simulation; Gizmo ID: stripe-auth-firefox-fixture; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: Firefox-observed fake fixture, DOM simulations, and intercepted extension browser coverage prove only the owned Stripe sign-in control can activate.
6. Capability: Mission security and delivery closeout; Gizmo ID: stripe-auth-mission-closeout; Functional owner: Gizmo Prime; Expertise provider: Security; Expertise allowed code paths: None; Expertise allowed test paths: Read-only exact-head trust-boundary review; Expertise forbidden paths: Product implementation; Expertise consumer interfaces: Pull-request evidence and Workbench records; Expertise acceptance evidence: Every slice passes exact-head validation and review, squash-merges in sequence, and has immutable Workbench evidence.
- Public or cross-module interfaces: Versioned authentication observation envelope, typed observation-classification outcome, separately versioned runtime request and response envelopes, exact assignment capability, and typed browser-effect adapter.
- Delivery shape: Sequential PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 850
- Current PR slice and acceptance evidence: Rebuild PR #1567 as the versioned observation-transport foundation; Acceptance evidence: strict schema tests, precedence tests, companion-WASM typed projection, Security acceptance, exact-head hosted validation, readiness, squash merge, and Workbench closeout succeed without activating Web runtime routing.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: stripe-auth-simulation; Gizmo name: Versioned disclosure-control policy; Predecessor Gizmo ID: None; Deliver strict disclosure-control policy; Estimated authored changed lines: 590; Acceptance evidence: Nook PR #1554 merged and remotely verified.
2. Gizmo ID: stripe-auth-observation-transport; Gizmo name: Versioned authentication observation transport; Predecessor Gizmo ID: stripe-auth-simulation; Deliver the strict outer observation version, supported-entry precedence, typed classification outcome, and companion-WASM adapter; Estimated authored changed lines: 850; Acceptance evidence: exact-head Core/WASM validation, Security review, readiness, merge, and Workbench closeout.
3. Gizmo ID: stripe-auth-runtime-protocol; Gizmo name: Versioned authentication runtime protocol; Predecessor Gizmo ID: stripe-auth-observation-transport; Deliver separately versioned runtime request/response envelopes and atomically activate the Web writer, router, adapter, and compliant demo; Estimated authored changed lines: 700; Acceptance evidence: exact-head Rust/WASM/Web/demo validation and review prove typed end-to-end activation with no fallback.
4. Gizmo ID: stripe-auth-disclosure-transaction; Gizmo name: Two-stage authentication disclosure transaction; Predecessor Gizmo ID: stripe-auth-runtime-protocol; Deliver fresh assignment binding, exclusive evidence, and generic-fill isolation; Estimated authored changed lines: 1200; Acceptance evidence: behavior tests and intercepted browser coverage prove disclosure and activation cannot occur from stale or bypassed authority.
5. Gizmo ID: stripe-auth-firefox-fixture; Gizmo name: Stripe Firefox authentication simulation; Predecessor Gizmo ID: stripe-auth-disclosure-transaction; Deliver the exact fake Stripe fixture and focused simulations; Estimated authored changed lines: 1100; Acceptance evidence: unit, generated-WASM, and intercepted extension-browser tests pass without external authentication traffic.
6. Gizmo ID: stripe-auth-mission-closeout; Gizmo name: Stripe authentication mission closeout; Predecessor Gizmo ID: stripe-auth-firefox-fixture; Deliver final cross-slice Security verification and durable Workbench evidence; Estimated authored changed lines: 10; Acceptance evidence: all predecessor PRs are merged and verified, Main is green, and worklogs/statistics are published.

## Initial plan

1. Rewrite PR #1567 to contain only the versioned observation-transport foundation. Remove the active Web/runtime-response/demo slice, add strict outer versioning and corrected batch precedence, and keep existing workflow match consumers unchanged.
2. Run focused pre-push hygiene, obtain exact-head Security review, publish the replacement head, resolve every current review finding with its accepted or rejected evidence, and complete hosted validation, readiness, merge, and Workbench closeout.
3. Start each successor only after its predecessor is merged and its Workbench evidence is published. Activate Web only when both versioned request and response contracts can land atomically.
4. Finish with the Firefox-observed Stripe fixture and intercepted browser proof, then publish mission-wide closeout.

## Completion evidence

- Missing or malformed schema versions and disclosure evidence fail closed; current writers are explicit and strict.
- Malformed supported observations cannot be masked by a future-version sibling, while valid future bodies remain opaque and produce a typed transport outcome.
- Runtime request and response versions are independent, explicit, and exhaustively projected through Rust, WASM, and Web without fallbacks.
- Credential disclosure and activation require fresh exact authority and cannot be reached through a generic fill bypass.
- The fake Stripe simulation reproduces the observed stable form structure and sends no external authentication traffic.
- Every sequential PR passes exact-head hosted checks, Security review, repository readiness, squash merge, remote verification, and immutable Workbench closeout.

## Safety review

This superseding plan contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or volatile external-page identifiers. It records only public repository links, stable architectural decisions, bounded ownership, and validation requirements.
