---
title: "Keep Nook Pilot compact and action-first"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T21:01:33Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1097"]
depends_on: ["issues/nook-pilot-authentication-control-plane/contextual-hud-dom-observation.md"]
---

# Keep Nook Pilot compact and action-first

## Context

The extension consumes Rust-classified DOM observations and owns the user-visible Pilot presentation. The original presentation added ambiguous host-page controls and a persistent companion-ready window. This slice removes those distractions and adds the Rust-owned actions needed to complete observed enrollment workflows.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Pilot stays absent without a safe authentication action. Login flows stay compact until Nook confirms a saved match. Expanded Pilot shows one explicit authentication action. Vault navigation belongs to the extension toolbar menu. Enrollment state and mutations remain owned by Rust/WASM.

## Scope

- Included: extension presentation policy, toolbar popup, default unlock routing, Rust-owned Pilot enrollment actions, localized copy, product specification, UI demos, extension tests, browser contracts, pairing/import surface refresh, picker cancellation, and staged-enrollment cancellation at authorization boundaries.
- Excluded: shared DOM scoping, vault cryptography, and website passkey policy.

## Acceptance criteria

- [x] Pilot does not mount when Rust allows no safe authentication action.
- [x] Login Pilot stays compact until the extension confirms at least one saved match.
- [x] Expanded Pilot shows one action-specific primary control.
- [x] The host-page surface contains no Open vault, Take over, or vault-status control.
- [x] The toolbar popup contains Open Simple Vault.
- [x] The toolbar popup has no Ready or Stay ready destination.
- [x] The unlocked toolbar uses a compact identity and connection-status row instead of a hero, explanation, or decorative mark.
- [x] A connected vault has one dominant Open Simple Vault action and one subdued Pair another vault action.
- [x] An unconnected vault has one dominant Connect to Simple Vault action without a competing Open Simple Vault control.
- [x] Default page unlock requests do not create a detached companion window.
- [x] English and Russian catalogs remain in parity.
- [x] Focused extension unit, lint, TypeScript, Svelte, browser, and pre-push checks pass.
- [x] Lock cleanup scrubs in-memory picker state before fallible session-storage access.
- [x] Pilot remounts and remains actionable after the host page removes its mounted element.
- [ ] Hosted Playwright and PR validation pass on the updated exact head.

## Progress

- 2026-08-25: User screenshot review found that the toolbar popup still lacked a clear visual purpose. The follow-up removes hero-scale copy and redundant controls. It keeps only compact connection context and the action that changes the current state.
- 2026-08-25: PR #1097 was split as slice 3 of 3, merged current main `6e54dfbadd2b8a41090ac96bbe946d7c994781c9`, and reached exact head `70efcdb7aab4cf510ae61b5da33993773ab2c130`. The extension package passes 246 tests, lint, TypeScript, Svelte, formatting, Cortex-session hygiene, architecture guards, and mandatory pre-push hygiene.
- 2026-08-25: Local Brave proves both the normal QR stage/confirm flow and cancellation of a staged enrollment across lock/unlock. The cancellation test waits beyond multiple evidence-watch cycles and verifies that neither the OTP field nor the vault authenticator is populated.
- 2026-08-25: All active review conversations are addressed and resolved. Exact-head focused extension execution, full PR validation, and Codex review are running. Previous-head BuildKit/ARC failures are classified as infrastructure evidence, not product-test failures.

- 2026-08-25: Review follow-up reached exact head `306708bff8e349c559129cc1eb7c84700599305c`. In-memory picker requests are now scrubbed before fallible storage cleanup, and the mounted Pilot recovers if host-page code removes its element. The extension passes 252 tests, clean lint, TypeScript, and Svelte checks; focused Brave proves remount plus saved-login completion. Source architecture, Cortex session hygiene, and pre-push checks pass. All review conversations are resolved. Exact-head focused browser run [32883956018](https://github.com/meta-secret/nook/actions/runs/32883956018) failed while building the exact-source browser image before product execution. Full PR run [32883963485](https://github.com/meta-secret/nook/actions/runs/32883963485) failed at the same shared BuildKit/sccache health boundary before product execution; its independent Rust ecosystem run passed. No unchanged-head retry was started.

- 2026-08-25: A second exact-head review found and closed two P1 gaps at replacement head `fa2b8edc20f2cb8467a92f20bd133c2f240d4536`. Enrollment presentation now invalidates pending direct authentication actions and cancels pickers before acceptance or rejection. The expiry regression waits on the actual response callback. The extension passes 253 tests and focused Brave QR enrollment; all review conversations are resolved. Replacement-head hosted validation and review were dispatched.

- 2026-08-25: Recovered hosted validation exposed one repository-policy failure rather than a product failure: the new typed passkey consumer was absent from the internal-API expert catalog. Exact head `e8783e513078df5a2d67c7e4a443f956c8ff7b88` registers that consumer. Module-expert validation, Cortex audit, the complete 299-test Loom suite, session hygiene, formatting, and pre-push checks pass locally. Exact-head hosted validation and review are restarting.

- 2026-08-25: Hosted browser execution resumed. Repository policy, Rust ecosystem, Hive, Web research, native Rust, WASM, web verification, WASM Node, coverage, and Rust proof/lint jobs passed at `e8783e513078df5a2d67c7e4a443f956c8ff7b88`. The UI demo found that connected state depended on routed-navigation localStorage even though the demo URL already declared the state. Exact head `3459f5b0a2938d318c125bbbeb864b3cdca9825c` now derives the demo stub from that URL. The extension E2E job stopped in Bun with SIGILL before tests; the focused vault-app suite exposed existing device-recovery failures outside this slice. Exact-head validation and review are restarting.

- 2026-08-25: Delayed exact-head review produced four further authorization findings, all fixed at `65b94eee3676704993ea808417cd1d7ffe745817`. Enrollment evidence now invalidates pending DOM actions before async policy work; regular observations include page-wide checkpoints; lock, expiry, and access revocation centrally scrub staged authenticator URIs; and picker surfaces created after an authorization-generation change are closed. Targeted replies are visible and all review conversations are resolved. The extension passes 254 tests with clean lint, TypeScript, and Svelte checks; source architecture, formatting, Cortex-session hygiene, and pre-push checks pass. Exact-head hosted validation and review are restarting.

- 2026-08-25: The owned three-PR stack was synchronized bottom-up so every slice includes current main without exposing main-owned release changes in later slice diffs: #1087 `4c54491b561d249e1dc36f035bfbea7bbb38b368`, #1096 `d601625d2eae5101178c510a38fdcc5c03cda087`, and #1097 base `d601625d2eae5101178c510a38fdcc5c03cda087`. Two additional presentation P1s were fixed at exact head `3fbcfc8b52531bf88bc1cf9ff1db1838af2ebf5d`: competing external authentication mutations invalidate and remove stale actions before scanning, and post-confirmation enrollment state is freshly classified by Rust before another action is exposed. All targeted replies are visible and every review conversation is resolved. Exact-head hosted validation and review are restarting.

- 2026-08-25: The three-PR stack was synchronized bottom-up to current main `deeba434cb336cd6575d368e0bdf9ecb56861f0b`: #1087 `f1b15f2ee`, #1096 `7eff88403`, and #1097 exact head `59b4ce9f38364c5ef74d6c047348016dacee8506`. Review-body P1 follow-up `382b484bd` serializes OTP enrollment staging against authorization changes during the asynchronous vault-grant lookup, clears the caller-owned URI immediately, rejects stale authorization, and scrubs every local rejection/success path. Exact-head extension checks pass 254 tests, lint, TypeScript, and Svelte diagnostics; architecture, Cortex-session, and pre-push gates pass. Hosted focused browser execution, full PR validation, and Codex review were restarted for `59b4ce9f3`.

- 2026-08-25: Exact-head repository-policy run 32890250112 found four authored `undefined` picker-surface sentinels introduced by the authorization-race correction. Exact head `5983d91562ec11dcddf369a17d2dbce3594d1630` replaces them with a shared discriminated `None | Window | Tab` surface and typed stale-surface cleanup. The focused policy regression and the complete extension gate (254 tests, lint, TypeScript, Svelte), architecture, Cortex-session, and pre-push checks pass locally. Hosted validation and Codex review are being replaced for this head.

- 2026-08-25: Exact-head PR run 32890974484 exposed two incomplete shared web-app unit fixtures after `manualCheckpointPresent` became a required page-observation fact. Exact head `7cc44c65179ce2d5dc972a392d5af700fc20626d` supplies that explicit fact in both fixtures. Web-app, Simple, and Sentinel checks pass locally, as does the focused 6-test observation suite; formatting, architecture, Cortex-session, and pre-push gates remain green. Hosted validation and Codex review are being replaced for this head.

- 2026-08-25: The three-PR stack was synchronized bottom-up to current main `86387bf86e44a4234a676b87353b0efbd392a395`: #1087 `b318a15a03e0474427b980cc2ce09f6d84863414`, #1096 `05270fd8329d2da5ef3c2cba0fce5854cfd70e0d`, and #1097 exact head `e744564292cc5664fa7f560ba020aa2b6ee7a4d0`. The latest exact-head review found two P1 authorization gaps. Enrollment staging now requires an unlocked session and retains the concurrent-lock generation guard; cancellation and every post-enrollment return now clear stale actions and request fresh Rust workflow classification instead of selecting actions from TypeScript DOM hints. Targeted replies are visible and all review conversations are resolved. Fresh WASM, the 254-test extension gate, shared web checks, the focused six-test observation suite, source architecture, authored-TypeScript policy, formatting, Cortex-session hygiene, and pre-push checks pass locally. Hosted focused browser execution, full PR validation, and exact-head review are restarting.

- 2026-08-25: Current main advanced to `a064a47c68eb9122f9045290ac434d6c2409fc0f`, and the owned stack was synchronized bottom-up again: #1087 `4329d52083c05933a014ab197cf60091488b928e`, #1096 `96a9d84a4021806643090bffc379b8e250654a9b`, and #1097 exact head `b84c1b31ab944e48f5d90afbcf94ffefbe8e2b9a`. Exact-head review found two further P1s. Active staged enrollment now remains mounted across normal page mutations, while actual host removal cancels and dismisses the ceremony before rescan. The product spec now correctly assigns Pilot presentation policy to `nook-companion-core`. The failed UI demo also showed that generic reclassification erased the saved-authenticator confirmation; the replacement head retains that confirmation and adds only the Rust-approved follow-up action. All targeted replies are visible and every review conversation is resolved. The extension passes 257 tests with clean lint, TypeScript, and Svelte checks; Cortex audit, source architecture, formatting, session hygiene, and pre-push gates pass. Hosted exact-head validation and review are restarting.

- 2026-08-25: Exact-head review follow-up reached 0938dde5efc8ea9a016de3e2a199f31edced2bfd. Rust now prioritizes recovery-code capture when a completed setup leaves its QR visible. Manual-checkpoint mutations immediately invalidate actions, cancel staged enrollment, and remove Pilot. Authorization-boundary clearing synchronously stops pending login-save observers before async dismissal. Same-workflow reclassification rebuilds cleared retry actions. Targeted replies are visible and all review conversations are resolved. Focused authentication-workflow tests pass 31/31; the extension gate passes 258 tests with clean lint, TypeScript, and Svelte diagnostics; the toolbar popup UI demo, Cortex audit, source architecture, formatting, session hygiene, and pre-push gates pass. Exact-head hosted validation and review are restarting.

- 2026-08-25: Exact head `ef61404f43bd31d2ab3c550dfa088099f778d4a7` includes current main `a064a47c68eb9122f9045290ac434d6c2409fc0f`. The prior exact-head Codex review settled clean with zero unresolved conversations. Hosted validation passed repository policy, native Rust, WASM, dependency/RustSec, web verification, WASM Node, coverage, fuzz, Kani, and Dylint. General browser shards failed only in current-main vault, passkey, and preview-URL assertions. The slice-specific headless passkey demo exposed a fixture-only DOM transition that invalidated Pilot presentation; the demo now records activation without manufacturing an authentication-page mutation and passes locally against system Chrome. Exact-head hosted validation and Codex review are restarting.\n\n## Findings and decisions

- Extension-origin passkey and PIN protection remains in the trusted toolbar popup.
- Default unlock uses the toolbar popup API. Pairing and bounded account pickers retain their explicit trusted surfaces.
- The host-page DOM receives no vault status, account label, or secret value.
- Rust/WASM classifies and owns direct `EnrollAuthenticator` and `SaveBackupCodes` actions, enrollment progress, manual checkpoints, and the persisted authenticator identity mutation.
- Mixed backup-code forms route through the Rust workflow policy rather than TypeScript business rules.
- Pairing completion invalidates cached match metadata again and refreshes mounted authentication surfaces.
- Authentication-context mutation invalidates action generations, cancels both login and authenticator pickers, and remounts action DOM so disabled or stale controls cannot survive.
- Authorization cleanup clears in-memory picker state synchronously before session-storage lookup or removal can fail.
- If host-page code removes the mounted Pilot element, the content script invalidates the old action context and schedules a clean remount.
- Moving from a regular authentication workflow into enrollment invalidates pending direct actions before the enrollment renderer accepts or rejects presentation.
- Session lock and expiry invalidate the enrollment generation, stop evidence watching, dismiss Rust-staged enrollment before session close, and prevent late stage responses from becoming active.
- Empty 2FA state copy points users to the toolbar menu; Pilot does not add a page-level vault control.
- The browser-extension product specification owns this surface boundary.

- Authenticator enrollment staging requires both a currently unlocked companion session and an unchanged authorization generation before retaining the caller-owned OTP URI.
- Enrollment cancellation and all post-enrollment returns request fresh Rust workflow classification; raw DOM hints never directly recreate actionable enrollment controls.

- Active enrollment evidence watches own routine page transitions. Competing-workflow remounts wait until the ceremony ends; actual host removal cancels the staged ceremony before rescan.
- Post-save Rust reclassification updates the existing enrollment surface so the user keeps the success confirmation while only the approved follow-up action appears.
- Pilot workflow and presentation policy belongs to `nook-companion-core`; `nook-core` continues to own vault and secret domain behavior.

## References

- [Action-first superseding plan](../../plans/nook-pilot-authentication-control-plane/2026-08-25T01-29-45Z-action-first-pilot-and-toolbar-vault-entry.md)
- [Nook PR #1097](https://github.com/meta-secret/nook/pull/1097)

- 2026-08-25: Exact-head PR run [32879851335](https://github.com/meta-secret/nook/actions/runs/32879851335) passed native Rust verification and the WASM build. WASM Node, web, preview, and browser jobs could not execute because shared BuildKit/sccache became unhealthy. Focused extension run [32879825842](https://github.com/meta-secret/nook/actions/runs/32879825842), repository policy [32879721765](https://github.com/meta-secret/nook/actions/runs/32879721765), and web research [32879721806](https://github.com/meta-secret/nook/actions/runs/32879721806) reproduced the same pre-product failure on unchanged-head retries. Hive [32879721855](https://github.com/meta-secret/nook/actions/runs/32879721855) failed at the same infrastructure boundary. Readiness is blocked by these exact-head infrastructure checks, Pages deployment, pending Codex review, and intentional draft state; no product test failed on this head.

- 2026-08-25: Follow-up review fixes reached exact head `629c849c61086092fcdb9e58d02aa0f5da8fa7c2`. Authorization cleanup now closes the session and clears surfaces independently of picker-storage failure; revocation attempts both cleanup paths; routine refresh preserves staged enrollment; confident passkey matches reach Rust without a labeled control and Use can activate the scoped authentication advance while Create still requires an explicit passkey control; the remote container ceiling matches the 45-minute maximum routed timeout. The extension passes 251 tests, lint, TypeScript, Svelte, failure-injection routing tests, remote-execution preflight, and two focused Brave enrollment flows. All review conversations are resolved. Exact-head validation/review were restarted; shared browser-image setup remains unstable and the focused extension run failed before product execution.