---
title: Migrate companion pairing approval protocol
status: ready
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-pairing-approval-protocol
created_at: 2026-09-07T14:51:01Z
updated_at: 2026-09-07T14:51:01Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-identity-browser-adapters.md
---

# Migrate companion pairing approval protocol

## Context

The companion simulation framework, direct composition coverage, and paired
identity browser migration are merged. Pairing approval still reconstructs and
validates a browser message in TypeScript, accepts an uncorrelated response,
and distributes authorization, import, persistence, and rollback decisions
across website, service-worker, and offscreen code.

## Outcome

Real website and extension managers complete pairing through a Rust-owned,
typed transaction. Browser code transports generated structural values and
owns only sender/origin checks, UI, callback lifetime, offscreen lifecycle,
and secret-bearing transport cleanup.

## Scope

- Add a Rust pairing request, website authorization, extension admission, and
  typed acknowledgement protocol with exact correlation, expiry, one-shot
  consumption, scope binding, and Simple-vault capability enforcement.
- Bind approval to the extension installation keys, requested scopes, vault,
  imported event-log authority, and sealed providers before pairing state is
  committed.
- Expose generated companion-WASM admission and real-manager nook-WASM
  endpoints and exercise them through direct native and dual-WASM composition.
- Migrate the popup, website consent, external service-worker route, and
  offscreen import path to those generated interfaces.
- Remove the duplicate internal approval ingress and superseded handwritten
  TypeScript schemas, validators, projections, result classifiers, and
  prewrite/rollback policy.
- Keep interactive unlock and ongoing local event-log synchronization outside
  this pull request.

## Acceptance criteria

- [ ] A pairing approval is accepted only for one live, unexpired, exactly
      matching Rust-issued request and cannot be replayed.
- [ ] Rust owns request/approval/result DTOs, scope and capability validation,
      authorization, import ordering, event authority checks, and final pairing
      state derivation.
- [ ] Real website and extension managers compose directly without Chrome,
      window messaging, infrastructure side effects, or application mocks.
- [ ] Independent WASM instances exchange only structural-cloned generated
      DTOs and complete the same real pairing operation.
- [ ] Browser code retains only sender/origin/channel, lifecycle, UI, timeout,
      persistence-adapter, and provider credential cleanup responsibilities.
- [ ] The external website origin is the sole pairing-approval ingress and all
      untrusted stored/channel values are readmitted by Rust.
- [ ] Focused web adapter tests, Security review, hosted Rust/WASM/web checks,
      readiness, and merge pass on one exact head.

## Progress

- 2026-09-07: Predecessor PR #1523 merged and pairing approval design began.

## Findings and decisions

- The existing approval omits the launch nonce and therefore proves vault
  access without proving membership in a live pairing transaction.
- The current internal and external approval routes duplicate ingress; the
  internal route is not required for the website-origin approval flow.
- Pairing storage must be derived after successful manager import rather than
  written early and partially restored by TypeScript.
- Provider credentials remain opaque secret-bearing transport values and must
  be scrubbed on every outcome.

## References

- `nook-app/nook-platform/nook-companion-core/src/extension_pairing_state.rs`
- `nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs`
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/ExtensionConnectConsent.svelte`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker/pairing-import.ts`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
