---
title: Consuming Sentinel quorum and terminal completion
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-quorum.md
started_at: 2026-09-05T00:21:00Z
agent: codex
gizmo_id: rust-action-ownership-sentinel-quorum
---

# Task plan

## Interpreted request

Continue the authorized project-wide Rust action-graph migration with consuming Sentinel quorum admission and secure finalization across Rust, WASM, and its browser consumer.

## Requirements

- Supersedes the23:43 plan after two accepted rendered-state findings; include LoginGate and LoginUnlockStep while keeping the1800-addition ceiling.
- Retain a focused Playwright demo showing honest Sentinel rejection presentation.

- SentinelUnlockSession owns collection and admission through consuming methods. Typed rejection returns the sole unchanged session before effects.
- SentinelUnlockQuorum has private fields, retains a borrowed checked requester identity, and alone exposes finalize(self). Neither capability supports Clone, Copy, Default, or Deserialize.
- Preserve request/signature validation, requester binding, threshold, duplicate device/signing-key/share-index rejection, signed tuples, versions, payload validation, and cryptographic revalidation.
- Move remaining request, response, status, and fixture operations onto meaningful owners; activate both ownership lints across the complete auth2 unlock module.
- Replace core ready boolean with a closed readiness enum and migrate direct consumers.
- Parse response JSON before taking the stored session; take and restore rejected admission synchronously without an await.
- Arm a small pending completion owner before terminal cryptographic finalization. Its Drop resets the manager unless successful completion consumes and commits it.
- Check actual Sentinel vault type, parsed current StoreId, and current policy() threshold/participant count against the quorum before key installation. Do not use policy_or_default().
- Guard partial key installation, event projection, persistence, legacy catalog purge, and final access result preparation; commit only after the last fallible operation.
- Use existing reset_vault_session(), which clears unlocked material and ceremony/session state. Retain configured storage credentials and device identity.
- Browser rejection directly queries actual session and vault status, replaces/frees stale status, and does not hydrate or start another ceremony.
- Both login render paths exclude actual Unlocked status from ceremony presentation.
- An inactive AwaitingShares manager with empty store ID presents existing explicit vault-open controls; loaded waiting-for-shares and retained admission states keep their current ceremony behavior. The existing open action loads the selected vault; no new reconnect or recovery path is introduced.
- Render actual login components in tests for terminal unloaded state, retained admission, post-success web errors, and loaded waiting-for-shares. Update the focused demo to exercise explicit opening before a new user-started ceremony.

## Constraints and exclusions

- Depend on the checked-response PR1348 implementation and its hosted auth2 doctest wiring; integrate intervening version-domain work without replacing it.
- Existing ensure_device_identity() returns an owned local identity. Borrow it into the quorum and reuse it without cloning private key material or introducing a self-referential owner.
- No generic framework, dependency, persisted schema change, rollback, automatic retry, recovery records, or cancellation machinery.
- Actual Rust-future Drop is covered; discarding a JavaScript Promise is not claimed to cancel the Rust operation.
- Quorum admission does not prove current roster membership or revocation freshness.
- Existing signed JSON and public WASM signatures remain unchanged. Browser boolean status is tracked as later migration work, not a permanent exemption.
- Terminal failure deliberately consumes the ceremony and resets unlocked state; a subsequent ceremony must be user initiated.
- Keep temporary decrypted shares locally owned; do not claim consumption alone zeroizes existing plain strings or extend their lifetime.
- No local product builds or tests. Use scoped static/format checks and hosted validation.

The reviewed core and existing browser patch totals approximately1430 additions. The bounded rendered-state repair adds approximately160–220, for an estimated1590–1650 within the1800 ceiling and repository2000limit. Whole-diff simplification retains existing UI actions, replaces mistaken assertions, and avoids new state, recovery, localization, or test infrastructure. Keep all source files below 1000 lines; the focused finalization module owns its operation and inline tests rather than sharding tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-sentinel-quorum
- Estimated authored changed lines: 1800
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs, nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs, nook-app/nook-platform/nook-auth2/src/lib.rs, nook-app/nook-platform/nook-core/src/vault/vault_sentinel_unlock.rs, nook-app/nook-platform/nook-core/src/lib.rs, nook-app/nook-platform/nook-wasm/src/manager/sentinel.rs, nook-app/nook-platform/nook-wasm/src/manager/sentinel/unlock_finalization.rs, nook-app/nook-platform/nook-wasm/src/types/sentinel.rs, nook-app/nook-web/nook-web-shared/src/vault-app/lib/vault/sentinel-unlock.ts, nook-app/nook-web/nook-web-app/tests/unit/lib/sentinel-unlock.test.ts, nook-app/nook-web/nook-web-app/e2e/demos/sentinel-unlock-rejection.demo.spec.ts, nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/LoginGate.svelte, nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/login/LoginUnlockStep.svelte
- Ownership units:
1. Capability: Consuming Sentinel quorum and guarded completion; Gizmo ID: rust-action-ownership-sentinel-quorum; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Domain behavior and compile-fail probes plus terminal failure and actual pending-future Drop reset tests
2. Capability: Sentinel rejection presentation; Gizmo ID: rust-action-ownership-sentinel-quorum; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Direct manager status replaces stale readiness after rejection without hydration or automatic restart, with actual rendered login tests and a retained Playwright demo
- Public or cross-module interfaces: Consuming session collection and quorum admission return a successor or owned rejection; quorum retains checked identity and consumes finalization; existing WASM status and completion signatures stay stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1800
- Current PR slice and acceptance evidence: One-use Sentinel quorum and secure terminal completion; Acceptance evidence: Hosted domain and compile-fail tests, WASM failure and Drop tests, web rejection tests, Dylint, SECURITY, and exact-head readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-sentinel-quorum; Gizmo name: Sentinel quorum completion; Predecessor Gizmo ID: None; One-use Sentinel quorum and secure terminal completion; Estimated authored changed lines: 1800; Acceptance evidence: Hosted domain and compile-fail tests, WASM failure and Drop tests, web rejection tests, Dylint, SECURITY, and exact-head readiness

## Initial plan

1. Complete PR1348 delivery and start from current main with its reviewed response API.
2. Development core implements consuming collection, quorum construction, contextual binding, and terminal completion with focused tests and compile-fail probes.
3. Web development adapts rejection presentation, tests, and its required demo after the core writer releases the shared branch.
4. SECURITY reviews construction, runtime binding, all terminal paths, actual future-drop cleanup, and public projections.
5. Publish promptly, validate the exact head, repair accepted findings, and squash merge after readiness.
6. Publish issue, worklog, and statistics; continue remaining project domains.

## Completion evidence

- Successful public sequence compiles; premature finalization, private construction, capability clone/deserialization/reuse fail compilation.
- Threshold and invalid contribution tests retain exactly one collecting session on admission rejection; valid alternative quorums reconstruct successfully.
- Invalid response JSON leaves the existing ceremony unchanged; terminal reconstruction failure consumes it.
- Current store/type/policy mismatch prevents key installation. Injected failure at partial installation and every asynchronous effect resets all unlocked state.
- Dropping an actual pending completion future resets the manager; successful finalization retains installed access and cannot be repeated with the consumed quorum.
- Browser terminal rejection presents the actual unloaded vault with existing explicit opening controls; admission rejection retains ceremony rendering. An already unlocked manager never renders ceremony Start even if later web work fails. No error path hydrates or restarts automatically.
- Exact-head hosted checks, required SECURITY verdict, readiness, squash merge, and Workbench records are verified.

## Safety review

This plan contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
