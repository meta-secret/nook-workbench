---
title: Use semantic enums and standard Rust conversions
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T07-21-26Z-semantic-enums-standard-conversions.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T07:21:26Z
finished_at: 2026-09-09T07:49:28Z
agent: codex
---

# Work summary

## Outcome

Replaced applicable domain-state and mode boolean parameters with semantic enums and concrete request types across product Rust, Hive and preflight. Adopted standard From/TryFrom implementations for appropriate conversions and removed superseded helpers. Clarified canonical Cortex guidance. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at b182eff1fc929f33a9faa36cbd7dbfd2a833fbf9.

## Progress

- AI policy `b689ea29a9df0f413ba43273be83ac586d9d2e0d`: two canonical policy files clarify semantic enum parameters and appropriate standard conversion traits. Existing predicate, transport, validation and capability boundaries retained. No verification.
- DEV-CORE `b00ad35d3a34038e2902f3953db522c5e2fec17a`: 38 authored Rust files; semantic authentication/client-policy/execution/device/page/pairing evidence, canonical From projections and TryFrom admissions, superseded conversion helpers removed. Fixed external representations and runtime checks preserved. No verification.
- SRE `b182eff1fc929f33a9faa36cbd7dbfd2a833fbf9`: 30 authored Rust files; semantic Hive/preflight modes, concrete completion/traversal request inputs, identifier and claim conversions with matching caller/fixture sources. No verification.


## Implementation problems

Boolean parameters erased distinctions among checkpoint state, session evidence, policy modes and execution intent. Some boundaries converted existing enums back into booleans before calling core policy. The refactor keeps those semantic values typed internally and translates fixed wire fields once. Independent concurrent activities remain separate dimensions. Custom conversion helpers duplicated standard trait roles; infallible projections now use From and validated admission uses TryFrom.

## Decisions

Use meaningful per-domain enums and named requests, not a generic BoolState framework. Keep contextual decisions named where the same source has multiple interpretations, and preserve authorization-sensitive/effectful operations. Preserve boolean transport/storage representations through narrow adaptation and actual predicate results. Remove redundant always-true parameters rather than introduce one-variant enums. Keep production recovery strict; permissive interoperability mode remains test-only.

Identifier deserialization now rejects empty or whitespace-only values through the same TryFrom admission as ordinary construction. Nonempty strings retain their exact text and wire shape. This is an intentional malformed-input tightening; no persisted schema shape changes.

## Validation

All verification remains deferred. No tests, compilation, typechecks, lint, audits, code reviews or workflows were run. Write-mode formatting only. Source examples were adapted but not executed; runtime and compile-time correctness remain unverified.

## Remaining work

None for the identified applicable implementation groups. Retained predicates, external facts, contextual operations and schema outputs are documented below. Tests, verification and reviews await separate user instruction. Delivery ends at the open PR.

## Implementation inventory

### Product Rust

# Implemented disposition

All granted groups 1-5 and the additional page-control/pairing candidates are implemented. This is a source-authoring completion record, not an execution or verification claim.

## Authentication

`AuthenticationWorkflowEvidence` is the internal semantic counterpart of the unchanged browser `AuthenticationPageObservation` wire DTO. It retains existing `AuthenticationManualCheckpoint`, `AuthenticationAuthenticatorSetupObservation`, `AuthenticationBackupCodesObservation`, and `AuthenticationPasskeyControlObservation` enums. `From<AuthenticationPageObservation>` admits wire observations; existing classifier and enrollment operations consume semantic evidence. Generate-vs-takeover, continue-vs-takeover, and credentials-vs-manual helpers take checkpoint enums. Enrollment/passkey evidence requests carry enums. Ceremony derives trust from owned context plus typed field observations rather than accepting a caller-supplied trust boolean.

Implemented canonical `From<AuthenticationPageObservationFacts> for AuthenticationPageObservation`; removed the superseded custom `into_observation`. Implemented `TryFrom<AuthenticationWorkflowSnapshotWire> for AuthenticationWorkflowSnapshot` using existing malformed-response error; removed custom `into_snapshot`. Failed contract admission retains the original reject behavior.

## Client policy

Core client-policy root, connection and sync methods with boolean parameters now consume named request structs. Domain-specific states cover authentication, explicit lock intent, local-vault presence/selection, provider setup/prompt, existence requirement, device-protection readiness, verification, fan-out/provider/general sync, saving, sync permission/intent/change, password activity/prompt, join-approval wait, idle expiration, remote credentials, sync conflict and secret-creation permission. Each state owns its canonical bool admission. Concurrent operations remain independent dimensions.

Exact browser adapter owner is `nook-wasm/src/types/runtime_policy.rs` (correcting the discovery's tentative client_policy path). Public WASM arguments and return values remain unchanged; adaptation constructs typed named requests immediately. Core forwarding retains enum values, without round-tripping them through booleans. Obsolete excessive-boolean argument suppressions removed.

## Execution modes and session evidence

- `VaultGenesisIntent::{DetectExisting, ForceFresh}` replaces internal forcing flags through manager discovery and core genesis determination. Existing connect/connect_fresh entrypoints select the intended variant.
- `YamlSyncBacking::{LegacyYaml, EventLog}` replaces the YAML reconciliation mode flag; reconciliation and access behavior preserved.
- `RuntimeTestCapabilityExposure::{Hidden, Exposed}` replaces stored runtime test-exposure bool; existing public boolean configuration translates at its boundary.
- `TryFrom<&str> for ClientRunMode` replaces custom parse; accepted aliases/error behavior unchanged.
- `RecoveryThresholdPolicy::{SentinelQuorum, InteroperabilityVector}` replaces SLIP39 rejection control. InteroperabilityVector is cfg(test); production constructor remains strict, and no new relaxed production constructor exists.
- `DeviceSessionLockState::{Locked, Unlocked}` is non-authorizing observation evidence throughout core identity classification and WASM snapshot requests. Manager derives it from existing key presence exactly where it derived the prior boolean. It holds no secrets and grants no capability or freshness exemption.

## Additional admitted candidates

`AuthenticationRouteActuation` now carries separate concrete-control, username, password and local-authentication-scope enums. Both public WASM route APIs retain boolean inputs and immediately adapt. `PageLoginContext::{Unrelated, Authentication}` replaces stored login-context bool in core input observations. Its serde From<bool>/Into<bool> representation preserves the existing boolean JSON field; input constructors keep their boolean browser arguments.

Pairing's existing `PairingSelection` now owns `From<bool>` admission. `ImportedExtensionAccess::{Denied, Granted}` interprets the fixed wire access boolean at admission. The public serialized input booleans remain unchanged, and import mismatch/access checks stay authoritative.

## Intentional retention

True predicate returns remain boolean. HTML disabled/read_only, outcome DOM/navigation sensors and response `ok` discriminators remain their actual foreign observations. Existing output-schema booleans (projection diagnostics, architecture support, recovery requirements) remain schema facts rather than receiving a broad stored-schema rewrite. Pairing wire flags are external transport only; their internal decisions now use semantic enums.

Contextual operations remain named: generate/continue-or-takeover, credentials-or-manual, proposal eligibility, client-policy decisions, genesis detection, reconciliation, identity classification and crypto recovery. No cosmetic context wrapper was introduced to force conflicting From implementations. Trusted/validated secret constructors and effectful methods are not widened into unrestricted From<String> conversions.

## Completion boundaries

Source fixtures and all direct authored Rust/WASM callers were adapted. No generated contract or browser source migration required. Write-mode rustfmt only; authoring syntax issues it surfaced were corrected. No tests, compiler/typechecks, lint/checks, audits, reviews, workflows, or final verification performed. No policy, TS, Workbench or PR edits.

Exact authored files are listed below.
nook-app/nook-platform/nook-auth2/src/auth/slip39.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/classification.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/enrollment.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/ceremony.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow_response.rs
nook-app/nook-platform/nook-companion-core/src/credential_fill/field/classification.rs
nook-app/nook-platform/nook-companion-core/src/extension_pairing_state.rs
nook-app/nook-platform/nook-companion-core/src/lib.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification/input_role.rs
nook-app/nook-platform/nook-companion-core/src/website_passkey_proposal.rs
nook-app/nook-platform/nook-companion-wasm/src/authentication_workflow.rs
nook-app/nook-platform/nook-companion-wasm/src/lib.rs
nook-app/nook-platform/nook-companion-wasm/src/page_form_policy.rs
nook-app/nook-platform/nook-core/src/lib.rs
nook-app/nook-platform/nook-core/src/sync/vault_sync_session.rs
nook-app/nook-platform/nook-core/src/vault/device_access.rs
nook-app/nook-platform/nook-core/src/vault/device_access/actions.rs
nook-app/nook-platform/nook-core/src/vault/vault_client_policy.rs
nook-app/nook-platform/nook-core/src/vault/vault_client_policy/connection.rs
nook-app/nook-platform/nook-core/src/vault/vault_client_policy/sync_policy.rs
nook-app/nook-platform/nook-core/src/vault/vault_connect.rs
nook-app/nook-platform/nook-core/src/vault/vault_runtime_policy.rs
nook-app/nook-platform/nook-wasm/src/conversion.rs
nook-app/nook-platform/nook-wasm/src/device_access.rs
nook-app/nook-platform/nook-wasm/src/identity_record.rs
nook-app/nook-platform/nook-wasm/src/manager/connect.rs
nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs
nook-app/nook-platform/nook-wasm/src/manager/identity.rs
nook-app/nook-platform/nook-wasm/src/public_api/companion_heuristics.rs
nook-app/nook-platform/nook-wasm/src/types/runtime.rs
nook-app/nook-platform/nook-wasm/src/types/runtime_policy.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/evidence.rs
nook-app/nook-platform/nook-core/src/vault/vault_client_policy/states.rs
nook-app/nook-platform/nook-core/src/vault/vault_client_policy/requests.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification/route_evidence.rs


### Hive and preflight

## Implemented handoff

- Hive auth refresh, observer selection, delivery main-merge evidence, progress decoration and completion relevance use named enums. Query, progress-output, check-acceptance and completion operations now take concrete request data. TaskStore::complete and every implementation/caller carry Completion; live lease, owner, attempt and retirement checks remain in their existing effects.
- Preflight WASM impl, discriminant policy, declaration/parameter binding, factory return and production/test module contexts use named enums. Changed multi-input collectors receive concrete traversal data including their existing accumulators. The object-pattern inspection parameter was removed entirely: both actual callers always selected inspection. No artificial one-variant enum remains.
- TaskId, AgentId, AttemptId and LeaseToken use TryFrom<String>/TryFrom<&str> and owned From<Id> for String. Removed old new constructors. Serde uses their fallible conversion; deliberately rejects empty and whitespace-only identifiers while preserving exact nonempty text and unchanged string wire shape. Added unexecuted source examples for serde admission and exact-text roundtrip. ClaimOutcome extraction is TryFrom<ClaimOutcome> for ClaimedTask; removed into_claimed.
- Updated direct Rust callers and fixture sources. Extracted the existing cancellation scenario into a cohesive integration fixture module to keep the growing integration entry module bounded; execution order and assertions remain the same.

Retained boundaries: broker JSON refresh, Neo4j obsolete/attention booleans and coordinator obsolete payload keep their fixed wire/storage shapes and normalize at the boundary. Terminal detection/NO_COLOR remain host predicates, normalized to decoration modes. Task-state/lease/ancestry/check predicates continue to return actual booleans. Private cfg negation remains boolean algebra: recursive inversion and parity calculation are predicates, not selectable business modes. TerminalResult.obsolete remains an existing wire-model fact; worker completion proposals now carry the enum. Borrowing as_str accessors, runtime executor constructors, sparse event classification and contextual error helpers retain their original named-method semantics. Existing PatternContext groups binding inputs; its binding field now uses the enum.

No TypeScript, manifests, configuration, workflow, CI trusted source digest or external dependencies changed. Write-mode rustfmt only was used as source editing. All tests, compilation, lint, checks, audits/reviews and other verification are deferred under user instruction.

Exact source scope (30 files):
- agentic-ai/minds/hive/src/model/identity.rs
- agentic-ai/minds/hive/src/model.rs
- agentic-ai/minds/hive/src/worker/lifecycle.rs
- agentic-ai/minds/hive/src/worker/workspace.rs
- agentic-ai/minds/hive/src/main.rs
- agentic-ai/minds/hive/src/coordinator.rs
- agentic-ai/minds/hive/src/dispatcher.rs
- agentic-ai/minds/hive/src/worker.rs
- agentic-ai/minds/hive/src/store.rs
- agentic-ai/minds/hive/src/error.rs
- agentic-ai/minds/hive/src/neo4j.rs
- agentic-ai/minds/hive/tests/neo4j_store.rs
- agentic-ai/minds/hive/src/neo4j/admin.rs
- agentic-ai/minds/hive/src/neo4j/rearm.rs
- agentic-ai/minds/hive/src/neo4j/enqueue.rs
- agentic-ai/minds/hive/tests/neo4j_store/schema.rs
- agentic-ai/minds/hive/tests/neo4j_store/rearm.rs
- agentic-ai/minds/hive/src/auth.rs
- agentic-ai/minds/hive/src/observer.rs
- agentic-ai/minds/hive/src/delivery.rs
- agentic-ai/minds/hive/src/codex/progress.rs
- agentic-ai/minds/hive/src/codex.rs
- preflight/src/wasm_inventory.rs
- preflight/src/rust_wasm_names.rs
- preflight/src/typescript_state.rs
- preflight/src/wasm_dynamic_aliases.rs
- preflight/src/wasm_dynamic_callables.rs
- preflight/src/wasm_module_sources.rs
- preflight/src/source_size.rs
- agentic-ai/minds/hive/tests/neo4j_store/cancellation.rs

