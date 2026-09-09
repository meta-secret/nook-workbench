---
title: Simple typestate restrictions across application flows
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T06-12-25Z-typestate-implementation-only.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T05:26:55Z
finished_at: 2026-09-09T06:30:47Z
agent: codex
---

# Work summary

## Outcome

Extended [PR #1573](https://github.com/meta-secret/nook/pull/1573) with simple, stage-specific APIs and restricted capability construction. Delivery ends at the open PR; tests and review work await separate user instruction.

## Progress

- DEV-CORE `493ea99b9049c42d636752ab9d911006e1418c92`: 22 files (+878/-449), six stage/capability migrations. Sentinel reconstruction requires context admission; unlocked-vault hydration construction is restricted; identity handoff, website response, discovery/authorization and pairing authority consume stage capabilities. Existing cleanup and runtime security checks retained. Rustfmt, whitespace, and source-size hygiene passed.
- WEB-DEV `fcef111a06674edd04186858338a29e75eb214c1`: 57 files (+1389/-757), consuming Rust handoff consumers and browser readiness/queue/listener/lease/document/secret/sync/widget/response/initialization/research stages. Added alias invalidation and pending-request freshness, removed unsafe unused queue reset, corrected intersecting captured-state defects and adapted fixtures. Formatting, whitespace and source-size hygiene passed.
- AI `56f64f7ae0f8d7441996fc0f9feeb17862194526`: 29 files (+1130/-352), prepared/active adapter-specific journals with draining finalization; privately acquired locks; live isolation/broker/context resources; privately constructed authority/receipt classes; admitted executable action. Consumers and lifecycle/forbidden-order source examples adapted. Trusted subprocess wrapper bodies and digest fixture unchanged. Formatting was applied as editing only; all verification deferred under the later instruction.
- SRE `9a19fc3f542e2709f43f7f3989c8ecedabf657ab`: 9 files; private conflicted/prepared Hive workspaces, prepared/submitted OVH reinstall capabilities, edit-only/changed CI delivery, and admitted Kubernetes policy patches. Callers and fixture sources adapted; live Git/server/resource-version checks retained. Trusted CI push unchanged. All verification deferred.


Final head: 9a19fc3f542e2709f43f7f3989c8ecedabf657ab.

## Implementation problems

Previously independent begin/finish/commit methods and public advanced-state field bags let callers express invalid orderings. TypeScript aliases also required immediate invalidation before asynchronous effects. Journal finalization needed to drain already accepted writes while rejecting new admissions. The implementation separates real lifecycle capabilities from ordinary snapshots and preserves fresh authorization at effects.

## Decisions

- Start with distinct data-bearing stages and expose only the operations valid at each stage.
- Restrict advanced construction and consume transitions where ownership permits; retain invalidation guards for aliased TypeScript handles.
- Preserve runtime authorization, cryptographic validation, freshness checks, wire/storage representations and secret destruction.
- Keep pure operations and ordinary DTOs free of artificial lifecycle frameworks; inventory records why candidate areas were changed or left as existing-safe/non-lifecycle.
- Update unit and forbidden-order source examples without executing them. No tests, compilation, typechecks, local/GitHub reviews or validation workflows.
- The user's PR-size waiver continues; the 1,000-line source constraint remains.

## Validation

Rust and browser teams reported formatting, whitespace and source-size checks before the later instruction deferring all verification. Remaining work proceeded as implementation only. No tests, compilation, typechecks, code reviews or validation workflows were run. No final code-verification pass was performed after the user deferred verification.

Runtime and compile-time behavior remain unverified. The PR is open, not merged.

## Remaining work

No identified applicable implementation candidate remains deferred in the four team inventories. Existing-safe, pure-operation and runtime boundary classifications are recorded below. Compilation, tests, verification and review work await separate user instruction; no merge is authorized in this delivery.

## Candidate inventory

### Rust/WASM

## Migrated actionable gaps

1. `nook-auth2/src/auth/sentinel_unlock.rs`: `SentinelUnlockQuorum::finalize` previously did not require the separately callable `check_context`. Now consuming `check_context` returns private `ContextBoundSentinelUnlock`; only it reconstructs keys. WASM immediately performs live store/policy admission then reconstruction under the same exclusive manager borrow, with no intervening await. Terminal signature, identity, binding, duplicate-share and reconstruction checks remain. Wrong-context unit sources and forbidden-order/forgery/reuse examples updated. Neither restricted type implements Clone/Copy/Deserialize/Default; wire request DTO unchanged.
2. `nook-core/src/vault/vault_connect.rs`: `UnlockedVault` had public fields and an advanced hydration method, allowing arbitrary reconstruction of the phase. Fields now private. Validated `VaultContent::unlock` or Sentinel reconstruction creates it. Consuming `into_material` returns an ordinary DTO for the WASM encrypted-only session; that DTO has no hydration/construction capability. Existing consuming hydrate preserved. No Clone/Deserialize/Default; fixture construction failure documented.
3. `nook-wasm/src/manager/device_protection/handoff_stages.rs`: manager previously exposed begin/finish/commit/confirm/rollback independently. Begin now returns pending recipient; finish consumes pending into adopted; explicit commit or after_verified_connect consumes adopted into committed; only committed confirms. Adopted may mark import or rollback; pending may cancel. Old manager transition methods are crate-private implementation, not WASM exports. All handles have private fields and no constructor/Clone/Deserialize/Default; negative source examples cover duplication/deserialization/default/order/reuse.
4. `nook-wasm/src/manager/companion_protocol.rs`: website begin now returns `NookPendingCompanionIdentityHandoff` with a typed request getter. Its consuming finish binds response through existing admission and returns adopted identity; cancel invokes existing cleanup. Manager finish is not publicly exported. No secret is stored in this handle.
5. `nook-companion-core/src/companion_protocol.rs`: separate initial `CompanionExtensionHandoffEndpoint` and `DiscoveredCompanionHandoffEndpoint`; authorization is absent on initial type. Discovery consumes initial; repeated observation consumes discovered and requires exact original observation; authorization consumes discovered and retains request expiry, current presence and binding validation. Runtime Inactive/Pending/Consumed field bag eliminated. WASM initial/discovered wrappers expose consuming discover/rediscover/authorize_and_seal. Replay unit scenarios now use a test-owned runtime holder of production stages, while public one-use ordering has compile-fail source evidence. Wire schemas unchanged.
6. `nook-companion-core/src/companion_pairing.rs` and WASM pairing endpoint: taking approval authority consumes the endpoint. Pending request is owned directly; no reusable endpoint carrying Consumed state. Website endpoint consumes authorization as before; redundant optional consumed field bag removed there too. Existing admission/expiry/binding checks preserved. Replay is a compile-time ownership error rather than a second mutable call returning unavailable. Tests retain invalid terminal outcome checks and add source-level reuse example.

## Existing correctly staged action flows retained

- Auth enrollment (`auth/enrollment.rs`, `code/admission.rs`, `code/issuance.rs`): provider flavor distinction sealed; checked issuance/admission owns parsed data, private fields, consuming issue/open operations. Public serialized provider/envelope records are DTOs, not trusted capabilities.
- Passkey protection registration (`auth/device_key_protection/registration.rs`): registration -> complete or awaiting assertion enum, consuming terminal operations, borrowed setup retained, no clone/deserialize. Assertion/unlock performs real browser-output/identity checks; repeated unlock remains an independent authorization attempt.
- Sentinel genesis (`auth/sentinel_genesis.rs`, `session.rs`): response validation/signing and delivery checking have distinct checked types; collecting session -> ReadySentinelGenesis -> issued consumes capability, failures carry rejected collecting owner. Readiness UI enum is observation rather than authorization.
- Sentinel response (`auth/sentinel_unlock/response.rs`): checked signed request -> response consumes checked request; response effect still opens and validates share and signs bound contribution.
- Secret replacement (`nook-core/src/secrets/session.rs`): encrypted prepared replacement owns exclusive projection borrow; commit unavailable until preparation, verification branch retains exact original session. Plaintext replacement is one consuming operation with explicitly documented partial-effect behavior; no independent caller-controlled stage exists, so this refactor does not change its effect ordering.
- Passkey authenticator registration/assertion: checked private stages retain exact request/credential borrows and counter/client data; sign/issue consumes. Borrow prevents mutating credential between preparation and signing.
- Remote event union (`nook-event-log/src/store/remote.rs`): CheckedRemoteEvent validates ID/schema/signature; PreparedRemoteUnion retains exclusive local and accepted candidate, then commits; graph visibility remains independently verified.
- Provider sync (`nook-core/src/sync/vault_sync_store.rs`): prepared sync carries exclusive both-store borrows and computed action; consuming commit cannot target unrelated stores. Fan-out and YAML reconcile are one owned operation with exhaustive outcomes.
- Epoch rotation (`nook-wasm/src/manager/event_log/security_epoch.rs`): prepared/persisted/committed stages and frontier rechecks already exist; post-commit cleanup/recovery semantics unchanged.
- Companion pairing activation (`manager/companion_pairing/activation/**`): approval, prevalidation, prepared activation, stored candidate, consuming commit; freshness/installation checks at storage effects retained.
- Imports (`secrets/*_import*`, WASM secrets/secret_import.rs): parsed checked input and prepared encrypted batches are privately constructed; serialization DTOs are not effect capabilities.
- Search catalog writes (`manager/search_catalog.rs`): prepared write carries admitted session keys; store checks stay at commit boundary.
- Sentinel onboarding (`vault_sentinel_onboarding/admission.rs`, `issuance.rs`): checked recipient and prepared issuance are private consuming flows; persisted onboarding payload remains boundary data.
- Account picker authorization (`nook-companion-core/src/account_picker_authorization/state.rs`): active/cleaning payload structs and exhaustive completion outcome already model epoch-bound cleanup; dynamic holder is required by message lifecycle and checks stale epochs.
- Extension grant authority (`extension_pairing_state/authority.rs`): classification returns authorized capability only after current scope admission; wire storage snapshots do not mint the capability.

## Retained boundaries, with reasons

- `NookVaultManager`, `StorageSession`, `VaultSessionState`: long-lived WASM facade must receive untrusted JS calls in either locked or unlocked runtime state. Its enum admission (`VaultCryptoState::get`, active ceremony admission, search state admission) remains necessary; replacing facade with compile-time-only wrapper cannot remove JS/runtime admission or prove durable authorization. Concrete one-use handoff operations above moved off this facade. Ordinary decrypt/query methods obtain admitted core crypto/session owner; no global Unlocked marker is claimed to prove freshness.
- `VaultEventSession`: clonable in-memory event-store snapshot used to stage atomic rotations; it does not constitute cryptographic authorization. Every append builds/signs/admit-checks actual event, and commit checks retain effects. Forbidding Clone here would remove intentional candidate staging, not close an authorization bypass.
- LoadedVault/session data, persisted vault/member/provider records, event operations, credential metadata and UI state enums: data snapshots or wire/storage contracts, not stage capabilities. Their serialization/clone remains truthful. Strongly typed JSON changes from prior work preserved.
- Format detect/deserialize, password/URI/CSV normalization, fingerprint encoding, static policy classification, timestamps/newtypes: pure validation/codec operations. No artificial lifecycle states introduced.
- Browser request/response DTOs and FFI callbacks: serialization and host dispatch retain runtime boundary validation; typestate applies to opaque owning handles around them.

## Lifetime and failure behavior

New WASM handles retain only public request/recipient data plus `Rc<()>` allocation identity. They never own secret keys, manager references, database access, or plaintext identity. The manager retains all secrets and existing zeroization. New ceremony/lock revokes generation; stale handles fail before effects and cannot roll back a newer ceremony or another manager. Manager drop is not extended by a handle; reset keeps the documented identity-preserving behavior, and downstream transitions still check pending/current identity and actual vault context. New handles are not serialized or cloned.

Existing web lifecycle catch rollback (extension/connect + vault/lifecycle/local-login) moves to consuming finish/commit failure and pending cancel, because the consumed handle cannot be safely reused for cleanup. The original error is returned. No retry/recovery/fallback is introduced. Stale-generation failures do not mutate the current manager. Successful Rust connect's existing automatic identity publication is admitted via after_verified_connect (requires cleared pending record), then committed.confirm consumes the final handle. Cryptographic checks and persistence ordering remain in manager/storage owners.



### Browser

## Final implementation outcome

Implemented on the DEV-CORE handoff baseline 493ea99b9049c42d636752ab9d911006e1418c92. All repository edits are confined to authored nook-app/nook-web/**.

1. Idle tracking: `VaultIdleSessionTracker` is configuration only and returns `VaultIdleSessionStart` containing `ActiveVaultIdleSession`. Only active sessions expose activity/stop. The holder removes active capability before stopping/replacing; DOM callbacks reject expired aliases and timer callback correctly invokes the owner. Unit source callers retain the returned active phase.
2. Operation queue: pending entries transfer execution into `RunningSessionOperation`, which has completion but no queued cancellation/deadline API. Closing returns a terminal `ClosedSessionOperationQueue` without enqueue/drain. Runtime rejection remains on old queue aliases. Reusable serial storage queue remains a service, but removed its unused unsafe `reset` and browser forwarding method: callers cannot discard an active tail and accidentally run storage operations concurrently.
3. Runtime listener: `ListeningExtensionSession.register` performs registration before private construction; returned handle exposes operation reset/replacement without another registration method. The initial dispatcher remains usable without registration for queue composition, while repeated registration through an alias fails before adding another listener.
4. WASM startup: `ReadyVaultApplication` privately constructed after initialization/configuration, owns manager creation. Shared getVaultManager acquires readiness first. Offscreen getManager and extension runtime operations already acquire their memoized ensureWasm internally; those concrete entrypoints expose no separate bypassable manager-construction phase. Their host bootstrap promises remain reusable initialization barriers, not authentication evidence.
5. Offscreen session: active lease owns deadline/timer/generation, renewal available only on `ActiveExtensionSessionLease`; expiry/stop invalidate aliases. Holder narrows to active before renewal. Companion discovery takes initial/discovered Rust handles before transition, repeated discovery invokes consuming Rust rediscover (no cached-status authorization bypass), handoff takes the discovered handle before consuming authorization. The browser discovery operation is itself single-use and releases only unconsumed endpoints if prerequisite vault opening fails.
6. Offscreen document: private `OpenExtensionSessionDocument` constructed only after browser create/reuse completes. Only it sends/closes; external acquisition returns a send-only transport. Central `sendSessionMessage` acquires that transport internally, so callers cannot bypass ensure by convention. Lifecycle close resolves an in-progress creation before closing; detached/stale send aliases reject before effects or completion. Genuine chrome runtime APIs remain host boundaries.
7. Secret exposure: component retains one live owner across renders. Release removes records before freeing; stale async loads are freed and rejected before presentation admission; repeated release does not free twice. Release returns terminal projection with no record operations. WASM handle freshness checks remain necessary because TS aliases are not affine.
8. Identity handoff: shared connect returns Rust adopted capability, consumes pending finish, and cancels only unconsumed pending transport on failure. Browser adopted owner private construction awaits Rust adoption; holder stores it for deferred vault creation. Commit and verified-connect transitions consume into Rust committed and immediately confirm. Lifecycle/local creation/session-unlocked paths remove holders before consuming; failures do not reuse consumed pointers or roll back a newer generation. Original failure cleanup semantics retained; no retry/recovery introduced. Sentinel-disabled adapter and generated-composition/unit fixture sources adapted. Old public manager handoff calls have zero remaining authored web references.
9. Initialization: private `DeviceInitializationContinuation` admits the existing manager + device authorization transition before exposing continuation and rechecks current manager on entry. Ordinary long-lived VaultState facade remains a runtime request boundary: Rust still validates actual device/vault authority. Allocation state renamed Available/Unavailable so merely allocated manager is not represented as unlocked. Corrected intersecting preexisting owner self-captures throughout browser action owners (`const state = state` and analogous UI captures).
10. Sync: `ActiveVaultSyncSchedule` privately creates interval and owns cancellation. Holder removes stopped schedule; timer callback checks live owner. Existing Rust start/tick decisions and storage/freshness admission remain authoritative.
11. Widgets: attached host is private `AttachedAuthenticationWidget`, admitted only after actual DOM connection. It alone owns detach; detached host variant has neither element nor removal operation. Host replacement/removal invalidates prior owner. Browser DOM event callbacks remain host boundaries; detached local element styling cannot confer attachment or product authority. Cleanup mock sources now model actual connected hosts.
12. Response handling: `PendingExtensionResponse` owns pending timer and settlement, transitions to settled before resolve, and rejects repeated callback effects. Timer and settlement cannot diverge as separate flags.
13. Queued creation/enrollment: retained as request DTOs, not advanced capabilities. App.svelte effects narrow WaitingForDevice, require actual ready/not-verifying context, and remove pending request before invoking Rust-backed action. Direct action facades perform their own Rust admission. Existing import activation is private, now checks authentication itself and clears its request only if still the captured request after async activation; cannot clear a newer queued request. No public unchecked 'approved' capability is created.
14. Local reset: retained as one cohesive effect. `deleteLocalBrowserData` internally checks support, awaits quiescence, suspends logging, obtains exclusive storage lock, then invokes private deletion and final peer reload. There is no independently callable unacknowledged deletion stage; adding a public acknowledged wrapper would introduce an unnecessary bypass surface.
15. Research workflow: `AwaitingVaultName`, `AwaitingVaultKind`, `SelectedVaultPath`, `AwaitingExistingVault`, `IdentifiedExistingVault` expose only their applicable transitions. Chosen stages retain admitted name/path, private constructors; writable independent step/path fields removed. Components narrow phase before respond/choose/identify/back; holder checks previous identity before transition. Other research terminals use a single callback dispatching on their current presentation step and graph/report/fixture owners are pure projections; no protected stage-specific operation is externally exposed.
16. Remaining Svelte render selections, generated DTO projections, stateless parsing/policy/fixtures, reusable logging and serial services are classified non-linear: no artificial phases or generic typestate framework added. Existing Rust authorities and protocol/storage formats preserved.



### Tooling

## Implemented handoff

All six identified implementation candidates are now addressed in this AI write unit.

- Journal: prepared generic/module/structural capabilities return corresponding active handles from initialize. Advanced constructors are private and module-local issuance keys constrain transition factories. Active specialized handles expose only their adapter's trusted completion operation and non-completion failure finalization. Internal prepared/initializing/active/finalizing/completed phase ownership rejects aliased repeated initialization, new appends during finalization, repeated completion, and late observations. Finalization revokes admissions before awaiting the accepted append tail, then projects evidence and returns the existing terminal receipt. Configuration vocabulary moved to agent-journal-contract.ts; persisted events and receipts retain their contracts.
- Delegation lock: acquired capability privately owns database/local lease, verifies held run identity at admission/finalization, and consumes its lifetime before rollback/close/local release. Callers cannot fabricate the old lease DTO or access its raw database. Existing exclusive-lock and path guards remain in acquisition; released aliases cannot authorize/release again.
- Expert isolation: successful setup issues private-construction live configuration owners. Disposing immediately revokes SDK configuration access, shares its asynchronous cleanup promise across aliases, and records released lifetime. Module-specific isolation carries selected context paths and delegates the same live resource. Existing setup/cleanup finally ordering and source-freshness checks remain. Preparation stays a bounded setup factory; no separately exposed partially provisioned resource is introduced.
- Broker/context: broker invalidates before zeroization and listener cleanup; live context servers reject URL use once shutdown starts and share stop completion. These resources are owned by the isolation lifetime; closed resources expose no additional action capability.
- Trusted authorities: module and structural parent authorization, runtime session, journal authority/binding, completion authority, and isolation receipt values now have private nominal class construction and module-local issuance keys. Existing one-use WeakMap registration, matching, deletion-before-effect, digest computation, and frozen kind representation remain the runtime authorization boundary.
- Executable action: decoding issues AdmittedSkillAction; only this owner exposes execute. CLI uses its family/operation projection and execution; raw SkillActionRequest remains a DTO. Pure action execution remains repeatable because it does not consume a resource. Invalid admission remains an exhaustive decode failure.

Direct consumers and focused lifecycle/forbidden-order test sources were updated. Source examples are unexecuted. Formatting was applied as an editing operation. Tests, compilation/typechecks, lint, verification/check commands, source audits, reviews/comments, and validation workflows were not run. No verification claim is made.

The existing trusted wrapper source methods (ExecutableSkillPackageGate.runCommand, ModuleExpertIsolation.captureIsolatedCommand, and foreign-owned CiRepository.pushAuthenticatedBranch) were outside changed method bodies, so no trusted digest fixture update was needed. Private live transition factories use nonexported module issuance symbols; these are concrete per-domain capability boundaries, not a generic phase framework.

Remaining classifications are the existing-safe/no-real-lifecycle items above. Dynamic runtime freshness and cross-process lock/state checks remain required even after static state restriction; typestate does not replace them. No policy Markdown or other-team implementation changed.


## Existing safe / no meaningful lifecycle

- CodexTurn has private construction and static collect entrypoint; complete is private, terminal event tracking is internal to one stream consumption. Already prevents public collect/complete ordering mistakes. AgentSourceSnapshot validates at each before/after execution boundary; keep freshness rechecks.
- GuardedCodexExecution and ReadOnlyExpertCodexRuntime are internal/static-entry orchestration owners; improving their isolation input is meaningful, adding extra prompt-built/string-prepared wrapper states is ornamental.
- Parent authorization/session/journal/completion WeakMap registries already reject forged identities and consume one-use tokens before effects; preserve these checks through nominal API strengthening (item 6).
- Repository CLI, codecs, argument decoders, schema validators, source-policy audits, dependency reports, finding collectors, Cortex article/document-map/consistency audits and delegation rendering are pure or bounded one-shot operations with no externally available illegal next action. Leave ordinary validated DTOs and exhaustive outcomes as data; no lifecycle wrappers solely because their names say parsed/validated.
- Module expert HTTP JSON-RPC handler validates at its external boundary; the protocol itself allows independent requests and does not justify a synthetic initialization typestate that changes compatibility.
- Agent replay/attempt verification reads persisted records and validates ordering/hash/integrity each time. A deserialized event is evidence, not a live runtime capability; do not construct live state directly from it.



### Infrastructure

## Implemented handoff

All four applicable candidates have been refactored under the sole-writer grant:

- Hive workspace: preparation returns `Conflicted(ConflictedWorkspace)` or `Prepared(PreparedWorkspace)`. Private data-carrying stages have no Clone/Deserialize construction path. Finishing dependency resolution consumes the conflicted stage and performs the existing live Git/pending-patch checks before committing its baseline. Persisting a completion patch consumes the prepared stage, which owns repository, baseline and resume provenance. Worker callers and focused fixture sources use the typed outcome; the resumed-patch fixture moved next to the implementation so it does not require a production test constructor.
- OVH reinstall: private `PreparedOvhReinstall` construction performs existing template/key/hostname/identity admission. Dispatch invalidates aliases before effects, rereads the server immediately before reinstall, preserves marker-before-submission ordering, and returns an unchanged/submitted outcome. Private `SubmittedOvhReinstall` construction is reachable only through actual submission, owns the task identifier, invalidates aliases before polling, and retains existing timeout/failure/installed-OS checks. API transport and server-response operations moved to `ovh-dedicated-api.ts`; the exported structural `PreparedReinstall` bag was removed. Existing CLI and pure signature contracts remain available.
- CI implementation: edit-only and legacy requests are distinct named variants; edit-only requests have no deliver or PR-lookup operation. Editing checks existing legacy PR state before executing the edit. Only a changed outcome constructs the private, one-use `ChangedCiImplementation` delivery capability. Runtime delivery still performs existing repository/budget/published-head checks. Invocation and delivery aliases are invalidated before asynchronous effects. Updated fixture sources cover skipped/no-delivery and alias consumption.
- Kubernetes reconciliation: admission returns unchanged or a privately constructed `PreparedNeo4jPolicyPatch`, after finding the unique eligible rule. It snapshots egress, desired destinations and observed resource version. Applying invalidates aliases before sending the patch; the existing Kubernetes version precondition, 409 handling, retry count and fresh policy read remain. Source examples cover single consumption and caller mutation isolation.

The existing-safe/inapplicable rationale above remains applicable. No generic phase framework, retry/recovery strategy, policy/configuration/schema migration, dependency change, or cross-team interface change was introduced. CI authenticated push implementation was not edited, so its trusted fixture dependency is unchanged.

Verification is fully deferred under the user's latest instruction: no tests, compilation/typechecking, lint, format-check, audit, source-validation or infrastructure/API exercise was run. Rustfmt and Prettier were used only in write mode as part of source editing. No final verification phase was performed.


## Existing safe or inapplicable candidates

- `preflight/src/**`: scanners and schema/coverage parsers are pure calculations or read-only observations, not effectful multi-stage capabilities. `CoverageArtifactValidation` is an exhaustive verdict. Creating Ready/Validated phases solely to format or report a result would be artificial.
- Hive `ClaimWindow`, `ClaimStep`, `ShutdownLease` in `worker/lifecycle.rs` already expose exhaustive cancellation/claim outcomes and await/release a claim that races shutdown. Retain runtime store authorization and shutdown coordination; do not turn a snapshot into a proof of a live lease.
- Hive `ClaimedTask` and `ActivityLease` are cloneable/serde coordinator transport DTOs. They do not independently authorize mutation: backing store operations check owner/attempt/freshness. Preserve serialization and runtime checks; changing them into an unforgeable in-process capability would break the real cross-process trust model.
- Hive `BrokerExternalAuth` wraps a connected private client and refreshes/validates at use. Its shared `Arc` is an intentional renewable broker channel, not a single-use auth approval. No cloned authorization marker should replace runtime refresh checks.
- Hive bound coordinator/observer servers already separate configuration from an acquired listener with private fields. Observer DTOs/localized snapshots and terminal result data are ordinary output data, not advanced effects.
- Hive repair delivery's checks are live GitHub observations. Do not invent a durable Verified PR token: checks/deployment/ref head can change independently. Existing method bundles actual readiness checks before reporting completion.
- CI `CiRepository` is a reusable Git process adapter. A constructor-based permanent TrustedRepository proof would be false because working tree, HEAD and authorization can change. Keep exact-head checks near effects; trusted authenticated push body need not change.
- `.github/scripts/verify-registry-cache-blobs.ts` already verifies fetched descriptor digest and size before decoding/recursing. Registry descriptors remain reusable content-addressed DTOs; no advanced-state API is public. A generic Verified<T> wrapper adds no sequencing protection here.
- `.github/scripts/comment-preview-url.ts` validates comment records and immediately selects update/create. This is a bounded HTTP operation, not a reusable phase capability.
- OVH credentials, recovery marker, inventory and API DTOs remain concrete boundary records. A deserialized marker must still be matched against current inventory and is never authorization to reinstall.


