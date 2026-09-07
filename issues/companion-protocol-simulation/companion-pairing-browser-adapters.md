---
title: Migrate companion pairing browser adapters
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-browser-adapters
created_at: 2026-09-07T17:00:27Z
updated_at: 2026-09-07T17:00:27Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
---

# Migrate companion pairing browser adapters

## Context

The Rust pairing provider is being completed and validated independently. The
production popup, website consent, service worker, and offscreen path still
contain the legacy browser-owned approval protocol until that provider merges.

## Outcome

Production pairing uses only generated Rust request, approval, finalization,
and acknowledgement values. Browser code owns sender/origin/channel checks,
UI, callback lifetime, offscreen lifecycle, structural delivery, and secret
cleanup; it does not interpret portable pairing meaning.

## Scope

- Keep the non-serializable extension endpoint beside the real offscreen
  manager and transport only structural generated values through Chrome.
- Migrate popup, website consent, external service-worker, and offscreen
  pairing operations to the merged Rust provider.
- Remove handwritten TypeScript approval schemas, guards, projections,
  result classifiers, command ordering, and partial rollback policy.
- Remove the duplicate internal approval ingress.
- Consume or destroy the retained endpoint on malformed delivery, readiness
  failure, queue expiry, reset, concurrent delivery, and every effect outcome.
- Preserve an accepted Rust acknowledgement even if ancillary authentication
  surface refresh fails.
- Add focused infrastructure simulations for sender/origin, callback errors,
  queue expiry/reset, concurrent delivery, endpoint cleanup, and credential
  scrubbing; do not mock application endpoints or managers.
- Exclude interactive unlock and ongoing local event-log synchronization.

## Acceptance criteria

- [ ] External configured website messaging is the sole approval ingress.
- [ ] Every approval reaching ingress consumes or destroys the exact retained
      Rust authority before fallible conversion, queuing, or effects.
- [ ] Queue expiry/reset/readiness failure and concurrent delivery scrub staged
      provider material and make later reuse return authority unavailable.
- [ ] A committed accepted acknowledgement is returned unchanged even when
      browser UI refresh fails.
- [ ] No handwritten portable pairing schema or semantic result classifier
      remains in TypeScript.
- [ ] Focused transport simulations, Security review, hosted web/Rust/WASM/E2E
      validation, readiness, and merge pass on one exact head.

## Progress

- 2026-09-07: Proposed after Security review of the combined provider/consumer
  draft established the final production adapter requirements.

## Findings and decisions

- No second companion-WASM runtime may be added to the website bundle; website
  admission comes from its existing nook-WASM runtime.
- Authentication-surface refresh is ancillary browser work and cannot rewrite
  a committed pairing protocol result.
- The prior web draft remains available in Git history but will be reapplied
  only from current main after the provider is merged.

## References

- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/extension/connect.ts`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker/pairing-import.ts`
- `nook-app/nook-web/nook-web-extension/src/offscreen/session.ts`
- `nook-app/nook-web/nook-web-extension/scripts/service-worker-routing.test.ts`
