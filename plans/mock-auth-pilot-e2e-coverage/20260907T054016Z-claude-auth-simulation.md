---
title: Complete Claude authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T05:40:16Z
agent: codex
gizmo_id: claude-auth-simulation
---

# Task plan

## Interpreted request

Complete a faithful Claude signed-out authentication simulation for `claude.ai/login`. Model the observed email-first consumer path and its Google and SSO alternatives, prove Nook fills and advances only the owned email flow, and deliver the bounded test-focused slice through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the stable signed-out surface: Claude branding, the Google provider control, the separator, Email, Continue with email, Continue with SSO, and the privacy/product-update disclosure.
- Model the owned email-first form as one visible email input and one semantic Continue with email submit control; keep Google and SSO as distinct alternate-authentication controls outside that owned submission path.
- Use the stable HTTPS `claude.ai/login` identity and semantic DOM attributes; do not copy generated element IDs, styling hashes, rehydration payloads, analytics data, anti-abuse values, cookies, or session state.
- Preserve current production detection and actuation policy when the faithful emitted facts already classify safely; change portable Rust/WASM behavior only if a failing exact simulation proves a generic correction unavoidable.
- Add behavior-focused Rust and typed-WASM regressions for the exact email-first observation and its highest-risk hostile variants.
- Add a Bun-safe pure flow, exact-origin DOM simulation, fixture/catalog coverage, and exactly one fully intercepted Chromium extension test.
- Assert that only the email field changes and Continue with email activates; Google, SSO, disclosure links, and surrounding marketing/navigation content remain untouched.
- Keep every authored source file at or below 1,000 lines and the complete pull request below 2,000 authored additions.
- Complete independent Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not submit to Claude, Google, Anthropic SSO, privacy, marketing, tracking, or external endpoints and do not use or persist real credentials.
- Do not infer password-step details that were not observed on the signed-out email-first page.
- Do not treat hostname, Claude branding, marketing copy, disclosure text, Google, or SSO labels as authentication authority.
- Continue with Google and Continue with SSO are alternate-authentication routes and must remain outside Nook credential actuation.
- Do not weaken origin, destination, semantic-control, ownership, provider, recovery, destructive, password-disclosure, or live-revalidation vetoes.
- TypeScript observes DOM facts and performs browser actions; portable classification and actuation policy remain in Rust/WASM.
- Do not run local product compilation, Rust/WASM tests, web builds, or browser suites; use focused lightweight checks and hosted exact-head validation.

- Navigation: Firefox reached `https://claude.ai/login` and reported the signed-out document title `Sign in - Claude`; the provider page independently exposed the stable login content.
- Credential control: one visible Email input on an email-first step.
- Form and activation: a semantic Continue with email control owns the email step.
- Alternatives and surrounding content: Continue with Google, Continue with SSO, an `or` separator, privacy acknowledgment, and product-update disclosure plus non-authentication marketing/navigation content.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: claude-auth-simulation
- Estimated authored changed lines: 800
- Owning modules, packages, or layers: existing Core and WASM authentication policy regressions; Claude fixture, page, pure flow, DOM simulation, catalog mapping, one focused Chromium extension scenario, and one UI demo.
- Ownership units:
1. Capability: Portable regression coverage; Gizmo ID: claude-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the exact owned email-first observation advances while cross-origin, inert, unowned, provider, SSO, recovery, destructive, ambiguous-control, and unsafe-destination variants fail.
2. Capability: Faithful browser simulation; Gizmo ID: claude-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: only the visible email fills, Continue with email activates, alternate and surrounding controls remain untouched, every Claude request is intercepted, and all source files remain within the limit.
3. Capability: Trust-boundary review; Gizmo ID: claude-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, authority broadening, volatile-state dependency, live-provider request, or bypass of existing vetoes.
- Public or cross-module interfaces: existing Rust authentication observation/classification and typed WASM boolean boundaries; no new public API expected.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Faithfully reproduce the observed Claude email-first login and prove existing portable policy safely identifies and actuates only the owned email form; Acceptance evidence: exact Core/WASM positive and hostile regressions, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: claude-auth-simulation; Gizmo name: Claude authentication simulation; Predecessor Gizmo ID: None; Faithfully reproduce the observed Claude email-first login and prove existing portable policy safely identifies and actuates only the owned email form; Estimated authored changed lines: 800; Acceptance evidence: exact Core/WASM positive and hostile regressions, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.

## Initial plan

1. Development Core adds exact portable policy regressions and changes no production behavior unless the faithful Claude observation demonstrates a generic gap.
2. Web Development adds the faithful Claude simulation with pure, DOM, catalog, demo, and fully intercepted Chromium coverage while preserving source limits.
3. Security reviews the complete exact-head diff; findings return to their owning team.
4. Gizmo runs pre-push hygiene, pushes the coherent branch, and authorizes PR Steward to create and validate the PR.
5. Complete hosted exact-head Core/WASM/Web/Chromium proof, readiness, squash merge, remote verification, statistics, and worklog publication.

## Completion evidence

- Existing production classification and actuation behavior is proven against the faithful Claude observation, or the smallest necessary portable correction is behavior-tested.
- Alternate authentication controls and surrounding disclosure/marketing content remain unmodified and unactivated.
- Catalog, pure flow, DOM, Rust, WASM, and fully intercepted Chromium tests pass on the exact submitted head.
- Every authored source file remains at or below 1,000 lines and total authored additions remain below 2,000.
- Security review, repository policy, hosted PR validation, deployment, readiness, squash merge, remote verification, statistics, and worklog publication complete successfully.

## Safety review

This plan contains no raw prompt or transcript, credentials, account data, live tokens, cookies, generated identifiers, raw logs, local paths, or unnecessary provider payload details.
