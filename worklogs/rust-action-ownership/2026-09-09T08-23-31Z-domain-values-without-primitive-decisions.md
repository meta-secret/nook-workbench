---
title: Keep domain decisions on domain values
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T07-52-01Z-domain-values-without-primitive-decisions.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T07:52:01Z
finished_at: 2026-09-09T08:23:31Z
agent: codex
---

# Work summary

## Outcome

Replaced primitive reconstruction of workflow progress, cardinality, timeouts and Sentinel relationships with model-owned decisions. Browser consumers now use canonical projections. Hive task, observer and delivery decisions use typed state models. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at c6ab04e5746fb9bcaa1774f7956bc593a12b4cc2.

## Progress

- DEV-CORE `b709dd299ac646b5505179aa5121cdc4628bea13`: 38 authored Rust files; semantic workflow progress and draft contracts, count/timeout operations, Sentinel policy/share ownership and six typed browser projections. Fixed numerical representations and live checks preserved; no verification.
- WEB `dfa99a736deb8f470c2897b317c5c5c0b4b42746`: 11 authored files (+139/-140); all six browser domain projections consumed, manual progress pairs and duplicate admission/policy logic removed. Existing initialization, display and DOM boundaries retained; no verification.
- SRE `c6ab04e5746fb9bcaa1774f7956bc593a12b4cc2`: 22 authored Hive Rust files; TaskKind/prerequisite policy, typed observer state/trigger, exact-case delivery check/run models and coherent direct callers. Existing custom values/diagnostics and live checks retained; no verification.


## Implementation problems

The snapshot contract reconstructed legal workflow states from raw numeric step pairs, while constructors and browser handlers independently authored those pairs. Progress interpretation now belongs to a semantic model with workflow context, avoiding ambiguity between equal numeric encodings. Repeated count/quorum comparisons and browser validation similarly duplicated model knowledge. Those decisions now live on their domain owners. Hive raw state strings required lossless typed classification so unknown values and diagnostics retained existing behavior.

## Decisions

Preserve numeric wire/storage shapes and retain primitive encoding only within model/serialization/arithmetic/indexing boundaries. Distinguish Sentinel readiness from full validation. Keep effect-time authorization, signatures, identity, lease and freshness checks. Browser display/DOM observation remains browser-owned; typed progress is presentation data rather than an authorization capability. Keep uppercase check-rollup and lowercase workflow contracts distinct. Do not wrap parser tokens, every loop counter or fixture literal mechanically.

## Validation

All verification remains deferred. No tests, compilation, typechecks, lint, audits, reviews or workflows were run. Write-mode formatting only; source examples were adapted but not executed. Generated bindings remain unbuilt. Runtime and compile-time behavior remain unverified.

## Remaining work

None for the identified applicable groups. Retained primitive boundaries and their reasons appear below. Verification, tests and reviews await separate user instruction; delivery ends at the open PR.

## Implementation inventory

### Product Rust

# Implemented completion disposition

Groups1-4 and the six named WEB projections are authored. Numeric wire/storage schemas remain unchanged. This records source implementation, not successful execution or verification.

## Progress and count ownership

`AuthenticationWorkflowProgress` owns classifier progress encodings, with `AuthenticatorEnrollmentProgress::{Setup,Verification,Recovery}`. Snapshot construction consumes a named `AuthenticationWorkflowSnapshotDraft` carrying typed progress instead of positional numeric steps. Snapshot contract compares domain kind/stage/action, delegates context-dependent wire-progress admission, and asks the observation-index owner about its batch bound. Signup/enrollment2/5 ambiguity and manual-enrollment2/5,3/5,4/5 remain explicit.

Count owners now answer zero/nonzero, single/multiple and observation-bound questions; field-count aggregation and relative capacity remain typed. Workflow, passkey, field/control, disclosure and pairing consumers no longer reconstruct those decisions from raw getters. Superseded unused raw getters were removed; step-pair primitives remain solely in the progress encoding/admission owner. Legacy pairing provider-count comparison admits the old scalar into the existing count type. Timeout expiry is `AuthenticationOutcomeElapsedMilliseconds::has_reached(timeout)` with equality and precedence unchanged.

## Sentinel ownership

SentinelThreshold, SentinelParticipantCount and SentinelShareIndex own quorum, readiness/capacity and valid share-position relationships. Core SentinelPolicy owns share-set inference formerly implemented in WASM; duplicate index/version/policy checks remain. Unlock/genesis response binding and architecture checks consume typed relations while retaining cryptographic verification, participant/session/store binding, and freshness behavior. SLIP39 business policy admission delegates to the existing typed unlock policy; codec/GF/interpolation arithmetic remains inside its algorithm owner.

`SentinelPolicy::is_ready` remains distinct from full validate: it does not newly enforce max16 or ready<=required. Draft values have distinct serde-transparent floating input wrappers with TryFrom admission to count/threshold, followed by contextual policy checks. Supported options come from the same typed quorum owners.

## Final browser provider contracts

**nook-companion-wasm**

- `project_password_workflow_activity({currentPasswordFieldCount:number,newPasswordFieldCount:number}) -> {kind:AuthenticationWorkflowKind,generationProgress:{currentStep:number,totalSteps:number}}`. Title kind retains current+new=>PasswordChange, new=>Signup, otherwiseLogin. Generation retains current present=>2/4, otherwise2/5; this is activity presentation, not a manufactured classifier snapshot.
- `authentication_workflow_activity_progress(AuthenticationWorkflowActivity) -> {currentStep:number,totalSteps:number}`. Enum variants: ReadyLogin1/3, FillingLogin2/3, VerifyingLogin3/3, FillingAuthenticator2/3, SaveOffer4/4.
- `saved_login_action_available({action:AuthenticationWorkflowAction,loginMatches:WebsiteLoginMatchAvailabilityWire}) -> bool`. Canonical availability admission now uses TryFrom; alternative action availability retains passkey action plus locked/nonzero-ready rule. Existing runtime response/workflow consistency validation remains.
- `authentication_control_transportable({submissionMethod:PageControlSubmissionMethod,usernameFieldCount:number}) -> bool`. Exact Dialog rejection and GET-single-username filter. This deliberately does not replace semantic control safety or browser string bounds/DOM collection.
- `is_authentication_navigation_path(pathname:string) -> bool`. Exact slash-delimited, ASCII-case-insensitive observed path vocabulary. Literal spellings belong to `AuthenticationPathSubject`; navigation evidence never authorizes success/commit.

**nook-wasm**

- `evaluate_sentinel_policy_draft({participants:number,threshold:number}) -> {admission:{kind:'invalidParticipants'}|{kind:'invalidThreshold'}|{kind:'accepted',participants:number,threshold:number},participantChoices:number[],thresholdChoices:number[]}`. Invalid participants produce empty threshold choices; existing architecture storage unchanged.
- `NookExtensionEventLogImportStatus.to_object() -> ImportedExtensionEventLog` directly returns the existing typed object (vaultStoreId,eventCount,heads,accessGranted), with core admission rejecting inconsistent granted evidence. Denied zero-event/empty-head observations remain accepted. No JSON serialize/decode roundtrip. Event count conversion respects the pre-existing typed u32 browser contract.

No TS or generated files authored; WEB has the exact provider contracts for its queued migration. Core reexports ImportedExtensionEventLog for the typed full-WASM boundary.

## Source examples and deferred execution

Existing classifier, quorum, count and timeout source fixtures follow the typed APIs. Added unexecuted boundary examples for fractional/out-of-range Sentinel drafts and exact authentication-path segment recognition. Write-mode rustfmt applied; no tests, compiler/typechecks, linters/checks, audits, reviews, workflows, or final verification performed. No policy/Workbench/PR edits. Existing encoding/index/arithmetic and foreign-sensor boundaries intentionally remain as documented above.

Exact authored files follow:
nook-app/nook-platform/nook-auth2/src/auth/domain_numbers.rs
nook-app/nook-platform/nook-auth2/src/auth/multi_device_secret_sharing.rs
nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs
nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs
nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs
nook-app/nook-platform/nook-auth2/src/auth/slip39.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/candidate_selection.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/classification.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/enrollment.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/evidence.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/authenticator.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/ceremony.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/disclosure/control.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/fields.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_validation.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/snapshot_contract.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow_response.rs
nook-app/nook-platform/nook-companion-core/src/domain_numbers.rs
nook-app/nook-platform/nook-companion-core/src/extension_pairing_state.rs
nook-app/nook-platform/nook-companion-core/src/extension_pairing_state/legacy.rs
nook-app/nook-platform/nook-companion-core/src/lib.rs
nook-app/nook-platform/nook-companion-core/src/outcome_evidence.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control/policy.rs
nook-app/nook-platform/nook-companion-core/src/page_field_classification/route_evidence.rs
nook-app/nook-platform/nook-companion-core/src/website_passkey_proposal.rs
nook-app/nook-platform/nook-companion-wasm/src/authentication_workflow.rs
nook-app/nook-platform/nook-core/src/lib.rs
nook-app/nook-platform/nook-core/src/vault/vault_architecture.rs
nook-app/nook-platform/nook-wasm/src/manager/secrets/event_log.rs
nook-app/nook-platform/nook-wasm/src/manager/sentinel_policy.rs
nook-app/nook-platform/nook-wasm/src/public_api/provider_architecture.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/progress.rs
nook-app/nook-platform/nook-companion-core/src/authentication_workflow/activity_presentation.rs
nook-app/nook-platform/nook-companion-core/src/authentication_navigation_path.rs
nook-app/nook-platform/nook-core/src/vault/vault_architecture/sentinel_projection.rs


## Legitimate boundaries / retained groups

- SLIP39 `polynomial.rs` thresholds, interpolation lengths/indices and GF arithmetic are actual algorithm inputs; member-threshold/bitfield checks in mnemonic.rs are binary protocol parsing. Keep primitive operations within those algorithm/codec owners. Sentinel business admission above the codec is the typed migration target; preserve cfg(test) interoperability threshold behavior.
- Version newtypes already comparing `CURRENT`/`LEGACY`/typed protocol constants (password envelopes, identity protection, event schema, genesis/unlock) are the intended pattern. Literal-supported-version checks in 1PUX import are inside format admission, not arbitrary browser decisions. No schema migration required.
- Search-catalog bucket comparisons against bucket count are storage-layout indexing at its owner, not workflow state; retain primitive bucket math and encoding.
- Serialization getters, database integer conversion, loops, slice access, timestamp arithmetic and source fixture numeric input generation remain valid raw boundaries. Do not blanket-remove `.raw`, casts or every literal.
- Existing core count predicates (is_zero/is_nonzero/is_multiple) already demonstrate the desired approach and should be reused rather than shadowed with another generic numeric facade.



### Browser

## Implemented WEB outcomes

All six groups implemented against CORE b709dd299ac646b5505179aa5121cdc4628bea13 in authored WEB source.

1. Authentication handlers obtain each existing milestone through AuthenticationWorkflowActivity and authentication_workflow_activity_progress. Generated-password handler consumes one project_password_workflow_activity for generationProgress and kind, and selects translated copy through WorkflowCopy.forKind. Removed obsolete titleForObservation and its raw field-count inference entirely. Numeric final labels/snapshot display remain unchanged browser edges. Direct action fixture now supplies actual typed summary fields and retains real WorkflowCopy while mocking UI effects; existing unit readiness already initializes both WASM packages.
2. Renderer calls saved_login_action_available with action and canonical match availability; removed count and state recombination.
3. Login outcome observation calls is_authentication_navigation_path; removed local path regex. Browser captures actual pathname and compares navigation as before.
4. Password form transport observation calls authentication_control_transportable for the exact GET-single-username/Dialog policy. String bounds, DOM collection, and subsequent semantic safety remain separate. Implicit submission DOM observation remains at browser boundary; no new disclosure fact schema or speculative domain policy was introduced.
5. Event-log import returns typed statusValue.to_object directly and frees status in finally. Removed entire manual shape assertion and access/count/head consistency inference. Rust retains denied-empty acceptance and granted consistency.
6. All three Sentinel login components consume evaluate_sentinel_policy_draft admission. Terminal and card thresholds consume canonical thresholdChoices; terminal participant choices consume participantChoices. Card-stack retains its existing visible3/4/5 presentation subset by filtering canonical supported choices. Terminal participant-change selection retains a currently supported threshold or selects the final canonical threshold choice, replacing raw numeric clamping. Name text readiness, local draft values, rendered ordinals and roster layout arithmetic remain browser responsibilities.

Readiness: no extra loader or asynchronous Chrome registration was added. Content operations continue behind existing companion initialization; app components already operate under existing app initialization. No generated bindings were edited or built. New Rust APIs all have consumers; no newly obsolete Rust export was identified. Obsolete TS method removed.

Only write-mode formatting performed as editing. No tests, compilation, typechecks, lint, checks, audits, reviews, workflows or final verification. This records implementation intent and source changes, not executed behavioral proof. Repository changes are restricted to nook-app/nook-web/**; no Rust, policies, Workbench or PR files authored by WEB.


### Hive

## Implemented handoff

All three accepted Hive groups are implemented. TaskKind owns main-repair/blocker classification, prerequisite eligibility and priority selection; validation still rejects empty kinds in EnqueueTask::validate, while infallible string admission preserves existing timing and exact custom values. ActiveDeliveryQuery carries the typed kind through the local trait and DB adapter. The public TaskStore path is preserved by re-exporting its cohesive contract module; existing inline unit fixtures remain in store.rs.

ObservedTask uses TaskKind, ObservedTaskState and ObservedTaskTrigger before alert/localization matching. String serde preserves status/kind outputs; skipped trigger data retains an empty unknown default, legacy trigger strings and existing fallback copy. All live clock comparisons and transactional Cypher ownership/lease/attempt checks remain authoritative.

GitHub rollup CheckExecution/CheckConclusion and workflow RunExecution/RunConclusion are separate concrete models because their original exact-case contracts differ. Unknown strings stay lossless and conservative; empty defaults, aliases and diagnostic Display retain their prior representation. Delivery acceptance matches variants, with no retries or fallback changes. Blocker disposition, kind-label rendering and main-run selection have named concrete input requests.

Direct Rust callers and inline fixture sources were adapted. Added unexecuted model examples for custom TaskKind roundtrips, owned prerequisite policy, exact diagnostic preservation and upper/lowercase non-equivalence. Preflight was not changed. No TS, manifest, workflow, configuration, policy, Workbench, PR or trusted source digest dependency changed. Only write-mode rustfmt was used as editing; all verification remains deferred.

Exact authored Rust scope (22 files):
- agentic-ai/minds/hive/src/model/task_kind.rs
- agentic-ai/minds/hive/src/model.rs
- agentic-ai/minds/hive/src/worker/task_prompt.rs
- agentic-ai/minds/hive/src/worker/lifecycle.rs
- agentic-ai/minds/hive/src/worker/workspace.rs
- agentic-ai/minds/hive/src/dispatcher.rs
- agentic-ai/minds/hive/src/observer/presentation.rs
- agentic-ai/minds/hive/src/worker.rs
- agentic-ai/minds/hive/src/store.rs
- agentic-ai/minds/hive/src/neo4j.rs
- agentic-ai/minds/hive/tests/neo4j_store.rs
- agentic-ai/minds/hive/tests/neo4j_store/rearm.rs
- agentic-ai/minds/hive/src/neo4j/admin.rs
- agentic-ai/minds/hive/src/main.rs
- agentic-ai/minds/hive/src/observer/classification.rs
- agentic-ai/minds/hive/src/observer.rs
- agentic-ai/minds/hive/src/delivery/check_state.rs
- agentic-ai/minds/hive/src/delivery.rs
- agentic-ai/minds/hive/src/delivery/main_run.rs
- agentic-ai/minds/hive/src/coordinator.rs
- agentic-ai/minds/hive/src/neo4j/enqueue.rs
- agentic-ai/minds/hive/src/store/contract.rs


## Retain with concrete rationale

- Preflight tree-sitter node.kind(), source tokens, Rust identifier names, AST arity/segment counts and syntax source slicing are parser/language representation work. Examples: rust_typed_json single-segment path checks, wasm_inventory Option/Result return unwrapping, wasm_svelte_sources first delimiter detection. Their literals identify external syntax and indexing, not a product state unwrapped to reconstruct business rules. Existing semantic traversal enums remain intact. No coherent new preflight migration found for this request.
- TaskId/AgentId/AttemptId/LeaseToken.as_str() at Neo4j parameters, filesystem lifecycle markers, Git argv and output formatting are transport/persistence representations. Blocker self-identity already compares TaskId values directly. MemoryStore String map keys could become TaskId keys, but that is test infrastructure normalization, not a production domain decision; adapt only if needed by shared model migration rather than separately rewriting all maps.
- ClaimedTask::repair_branch_name formats an identifier into a Git branch name and sanitizes representation. Caller as_str conversions here are output representation, not reconstructing task-state policy. Keep until an independently useful branch-name model is required.
- Neo4j attempt_count/max_attempts comparisons and ownership/lease status predicates run transactionally at the database effect. Moving them into Rust wrappers must not replace live checks. ClaimedTask.attempt_number is primarily displayed in prompts. EnqueueTask max_attempts >=1 validation already owns its primitive invariant; no evidence of scattered numeric step-state matching requiring a new attempt wrapper.
- MemoryStore's attempt_count+3 rearms a test implementation of DB behavior; preserve that parity with database rearm policy rather than mechanically changing only the fixture.
- neo4j/claim_retry.rs uses a zero-based loop retry index, named retry limit 5, and bounded jitter 20..=80 milliseconds. This is transport retry arithmetic, distinct from task execution attempt state. Do not introduce a fake domain stage enum for the counter.
- Observer clock subtraction, stale thresholds, vector indices, alert truncation and severity ordering are representation arithmetic around already named policy constants/types. Fresh clock checks remain authoritative.
- dispatcher WorkbenchIncidentText owns parsing of external markdown filenames/run markers; 40 hex characters describes Git SHA representation. Tuple run id/attempt values are parsed external metadata, not current evidence of a step-state tuple rule.
- External GitHub check names/labels, HTTP status 204, Git parent count and structured commit-message checks describe external contracts. Typed status/conclusion decision models (candidate 3) are useful; wrapping every check name or numeric status in a bespoke type is not.


