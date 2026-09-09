---
title: Move misplaced TypeScript domain logic into Rust
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T06-33-09Z-typescript-domain-migration.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T06:33:09Z
finished_at: 2026-09-09T07:04:25Z
agent: codex
---

# Work summary

## Outcome

Moved authentication-message admission, passkey byte/schema decoding, recovery-copy redaction and aggregation, login capability decisions, provider persistence reconciliation and enrollment/provider selection projections into cohesive Rust owners. Browser code now consumes canonical typed outputs and existing Rust host URL policy; superseded Rust wrappers were removed. Hive now publishes its Rust-derived presence deadline instead of duplicating the threshold in Svelte.

Implementation delivered through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at 455498f294627ca70c67a24289da5039d1aa8e40. Delivery ends at the open PR.

## Progress

- DEV-CORE `78b9f81b993becb89235b74e2320a8655b733694`: 19 files (+746/-2), seven cohesive Rust domain/schema migrations and typed WASM exports. Source examples adapted; no verification.
- WEB `b480a0456e0e4712b000d22ed1848a78ae0941b1`: 28 files (+379/-868), canonical Rust consumers replacing TS validators, policy, merge and schema reconstruction; URL-policy reuse and generated eligibility projection ownership. Source fixtures adapted; no verification.
- DEV-CORE cleanup `4b30de45793006d93b0eb3ab786a5d0d1a2b53b0`: 5 files (+43/-430), deleted superseded shared-provider ID export, four enrollment wrappers/getters/state enums and unused constructor; adapted source fixtures. No verification.
- SRE `455498f294627ca70c67a24289da5039d1aa8e40`: 5 files; Rust-derived Hive presence deadline removes repeated browser threshold, with matching observer DTO and fixture sources. No verification.


## Implementation problems

Duplicated TypeScript schema admission had drifted from canonical authentication facts. Offscreen passkey byte conversion accepted integers outside the byte range and wrapped them. Canonical Rust admission now rejects malformed facts and bytes consistently. Provider decisions were split between Rust selection and TypeScript reconstruction or persistence merging. Those operations now return complete typed results. Browser readiness remains inside request paths so Chrome listener registration and lock/expiry dispatch remain immediate.

## Decisions

- Put portable product decisions in cohesive Rust owners with typed boundary contracts.
- Remove duplicated TypeScript decisions and retain browser effects and presentation in the browser layer.
- Preserve existing typed serialization, typestate, cryptography, authorization, wire/storage contracts and secret lifetimes.
- Retain intentional TypeScript repository and infrastructure tooling where its domain is the host runtime.
- Keep affected caller and unit sources coherent without executing them.

## Validation

All verification remains deferred at the user's instruction. No tests, compilation, typechecks, lint, audits, code reviews or validation workflows were run for this migration. Source inspection and formatting as editing are implementation activities, not correctness evidence. Compile-time and runtime behavior remain unverified.

## Remaining work

No identified applicable migration remains deferred. The retained browser/host/tooling responsibilities are recorded below. Generated bindings, compilation, tests, verification and review work await separate user instruction. No merge performed.

## Candidate inventory

### Rust/WASM

# Implemented handoff

All seven agreed DEV-CORE candidates are implemented. New portable modules: authentication_workflow/transport.rs, passkey_session_material.rs, vault_client_policy/login_unlock.rs, sync_provider_store/{persistence,enrollment_projection,shared_grant}. Browser ingress is confined to actual unknown JS message edges. No TS or policy/config/generated files edited.

## Exact final API

Companion WASM:
- `admit_authentication_workflow_snapshot_message(value)` returns structural `{kind:"rejected"}` or `{kind:"accepted", message:{type:"nook:authentication-workflow-snapshot",payload:{origin,observations}}}`. Accepted message contains canonical decoded facts; do not continue using original unknown input.
- `authentication_recovery_copy_evidence({texts})` returns `{copy,hint:"absent"|"present"}`.

App/full nook-wasm (chosen for passkeys to reuse existing offscreen manager initialization, no extra companion readiness):
- `decode_passkey_setup_material_response(value)` -> `PasskeySetupMaterial {userHandle,prfInput}`.
- `decode_passkey_unlock_material_response(value)` -> `PasskeyUnlockMaterial {credentialId,prfInput}`.
- `admit_passkey_byte_material(value)` -> `PasskeyByteMaterial` (transparent serialized octet sequence; browser may construct Uint8Array from accepted material). No numeric coercion; -1,256,fractions,string/bool elements reject. Empty sequence remains accepted at transport layer; actual crypto size/key checks remain downstream. Missing setup/material envelopes preserve respective malformed-response errors; malformed fields preserve malformed-byte error. Optional envelope fields are private actual external-boundary absence; output is required material.
- `login_unlock_decision(access:VaultAccessStatus,passwords:PasswordEntryPresence.Absent|Present)` -> `LoginUnlockDecision` WASM object. Properties `device_keys:LoginDeviceKeyAvailability.Enabled|Unavailable`, `password_prompt:LoginPasswordPromptUpdate.Preserve|Offer`; free generated result after UI assignment.
- `manager.persist_auth_providers_snapshot({snapshot,mode:"replace"|"preserveUnlistedSyncProviders"})` -> Promise of persisted `AuthProvidersSnapshotData`. Rust observes current local-vault existence; preserve mode merges only when present. Identity sealing and original ordered read/merge/save unchanged. This is a unified operation, not a new cross-await atomic database transaction.
- `enrollmentProvider.oauth_configuration(defaults:OAuthFileConfigData)` -> canonical `OAuthFileConfigData`; personal OAuth only. Projects preset/token plus refresh/expiry/file/account states, retains other supplied defaults. Shared credential-free grants cannot use this path.
- `select_shared_grant_provider({snapshot,preset,target})` -> `{kind:"authorizationRequired"}` or `{kind:"existing",provider:StorageProviderData}`. Same original ordered eligibility selection; returns full canonical row, no duplicate web lookup.

Host URL migration uses already existing companion `belongs_to_simple_vault(base_url,candidate_url)` plus other policy exports. No new host-policy owner added. Eligibility projection needs only WEB generated-object retention; no duplicate selector was added without a demonstrated domain gap. Existing ensure-local snapshot APIs already own changed/unchanged persistence and remain the selected solution.

## Behavior and limits

Canonical transport decoding preserves serde-required/default fields, including credential_submission and actionable/readonly password facts. The previous hand-written TS validator omitted these. Typed counts and existing core bounded-fact validation now reject malformed/out-of-bounds facts at ingress rather than relying on later classification rejection. Transport cap remains64; classifier/binding cap remains20. No protocol/storage field renames.

Recovery-copy aggregate preserves original strict-first/contextual-second order, filtering contextual additions against the initial strict set (so duplicate contextual observations retain original behavior), Unicode scalar budget and secret candidate exclusion. Browser observation bounds and DOM actions remain TS.

Passkey offscreen integer-only conversion previously wrapped outside0..255; the new shared typed byte admission intentionally rejects those malformed values, aligning with the existing stricter sibling response decoder. No actual secret material persistence or authorization state changes.

Existing typestate and typed JSON work is retained. No generic utility/service framework or artificial stages added. Focused inline Rust source cases authored for malformed bytes, distinct response envelopes, candidate redaction/Unicode budget, transport cap, login policy, provider merge precedence, OAuth rejection/projection and exact selected-provider row. None executed.

Write-mode rustfmt applied as source editing. No tests, compilation/typechecks, lint/checks/audits/reviews, workflows or external actions performed. No final validation phase was run, as requested.

## Final obsolete-API cleanup

After WEB consumer migration commit b480a0456e0e4712b000d22ed1848a78ae0941b1, removed old `shared_grant_provider_id` WASM export and moved its fixture to `select_shared_grant_provider` exhaustive outcome. Removed `NookEnrollmentProvider::oauth_file` unused public constructor, four OAuth property getters (refresh, expiry, remote file, account), and `types/oauth.rs` with its four wrapper classes, four state enums, self-only fixtures and module/reexport plumbing. Enrollment fixture now constructs canonical core input and inspects complete oauth_configuration output. Active oauthAccessToken/oauthPreset getters remain, as do canonical core serde OAuth enums and unrelated OAuth access/storage wrappers. No wire/storage schema changes. Write-mode formatting only; no tests, compilation, checks or reviews.


### Browser

## Final implementation outcomes

All six primary candidates and the two assigned related provider migrations are implemented in authored WEB source. Rust contract authority is commit78b9f81b993becb89235b74e2320a8655b733694. Generated bindings were not edited or built.

1. Authentication ingress delegates unknown payload admission to canonical companion Rust and routes the decoded accepted message. The duplicated nested schema/count/variant validator is removed. Snapshot fixtures now include canonical credentialSubmission. Chrome listener registration remains synchronous; WASM readiness is inside the snapshot branch.
2. Provider persistence calls manager.persist_auth_providers_snapshot with the named merge mode and assigns the returned snapshot. TS load/ID/filter/concat/save policy is removed. Ensure-local-provider snapshot already persists through Rust, so the TS length heuristic and duplicate save are removed.
3. Runtime and build target URL adapters call canonical companion exports. TS hostname/path policy and sentinel fallback are removed. Exact-origin sender trust uses belongs_to_simple_vault; broad app classification remains separate. Async readiness propagates inside external routing, event-log updates, content startup, tab scanning and navigation. Immediate listener registration and lock/expiry dispatch remain intact.
4. Recovery evidence aggregation calls authentication_recovery_copy_evidence once and consumes named copy/hint fields. TS redaction/filter/deduplication/Unicode-budget policy is removed. DOM visibility, bounded collection and browser text extraction remain.
5. Passkey setup/unlock response admission and raw byte admission use full nook-wasm exports and canonical material DTOs. TS schema validators are removed. Uint8Array conversion remains the browser boundary; it follows Rust byte admission. Source fixture initialization was adapted without execution.
6. Login presentation consumes and frees the Rust LoginUnlockDecision object. Status-to-device-key/password-offer comparisons are removed from TS; browser async acquisition and failure presentation remain.
7. Elapsed browser clock normalization remains a narrow JS number-to-integer transport conversion. No new Rust policy API was invented for this host conversion.
8. Enrollment OAuth field recreation and wrapper lifetimes are removed in favor of oauth_configuration(defaults). Shared-provider ID selection and second lookup are replaced by the complete generated selection result. Callers and misuse fixtures use the new contracts.
9. Provider eligibility presentation retains generated projection and identity handles directly, releasing them on unmount or stale completion. Equivalent TS view/identity mapping wrappers are removed. Visible-row filtering and labels remain presentation, and operation authorization remains Rust.

Retained boundaries: DOM/WebAuthn marshaling, browser clocks, runtime IDs and callbacks, reactive state assignment, listener/queue/document lifetime capabilities, runtime alias invalidation, translation/rendering, and browser SDK integration. These are actual browser responsibilities, not deferred portable-domain candidates.

The following WEB handoff removal candidates were subsequently removed in DEV-CORE cleanup commit4b30de45793006d93b0eb3ab786a5d0d1a2b53b0: shared_grant_provider_id; NookEnrollmentProvider oauthRefresh/oauthExpiry/oauthRemoteFile/oauthAccount getters; associated four NookOAuth wrapper types and state enums; unused NookEnrollmentProvider.oauth_file constructor. The oauthAccessToken misuse assertion remains and is outside that quartet cleanup. DEV-CORE owns adapting its own shared-provider fixture and deleting obsolete Rust exports.

Execution exclusions: no tests, compilers, typechecks, lint, reviews/comments, audits, workflows, or final verification were run. Only write-mode formatting was performed as source editing. Fixture changes are unexecuted examples, and this inventory does not claim whole-program correctness. All repository edits in this WEB packet are scoped to nook-app/nook-web/**; no generated bindings, policy/configuration, foreign team sources, or Workbench files were authored.


### Agent tooling

## Outcome

No actionable portable product-domain implementation was identified for migration into nook-core in the inspected AI-owned scope. The code inspected implements repository tooling, Bun/Node host effects, Cortex document contracts, and agent-runtime isolation. Moving those owners into nook-core would introduce repository, filesystem, process, and SDK concepts into the product domain instead of removing a duplicated product rule.

## Concrete ownership decisions

- `agentic-ai/loom/src/module-experts/runtime-contract.ts`: keep in TS. CODEX_API_KEY environment admission, Unix-socket authentication broker, one-use nonce redemption, memory clearing, Bun listener lifecycle, SDK options, and Git snapshot provisioning serve the local Codex host. They do not implement vault authentication, encryption, device identity, password derivation, or another nook-core product rule. Node timingSafeEqual/randomBytes are host cryptographic primitives used at this effect boundary, not a custom cipher or duplicate Rust crypto algorithm. Preserve this security-sensitive implementation and its exact trusted-wrapper source identity.
- `agentic-ai/loom/src/module-experts/read-context-mcp.ts` and `read-context-rpc-codec.ts`: keep in TS. These implement the Bun HTTP/MCP repository context server, bounded JSON-RPC decoding, local path confinement, and source reads/search. No portable product data schema or vault permissions are implemented here.
- `agentic-ai/loom/src/{module-experts,structural-experts}/{parent-authorization,trusted-runtime,isolation-receipt}.ts`: keep in TS. Authorization means in-process agent delegation capability and source/journal provenance. WeakMap identity consumption and SHA-256 evidence binding are coupled to the TS runtime and local agent journal, rather than user/device/vault authorization. Do not replace these with nook-core product authorization types solely because both use the word authority.
- `agentic-ai/loom/src/agent-workflow/{agent-journal,attempt-verification,delegation-run-journal,delegation-aggregation}.ts`: keep in TS. These own repository action/event journals, filesystem identity, local SQLite locks and evidence digests. Their schemas are agent workflow contracts, not product persistence/wire data. Rust-owned vault/event-log codecs are not mirrored here.
- `agentic-ai/loom/src/module-delivery/{codec,integration,integration-provenance}.ts` and related admission/workspace owners: keep in TS. The logic binds Git/worktree generations, source evidence, delivery plans and provider ownership to repository operations. Its versioned delivery JSON is a tooling schema; moving it into nook-core would reverse the intended domain boundary.
- `agentic-ai/loom/src/{pr-steward-contract,pr-steward-events}.ts` and `lib/agent-stats-*`: keep in TS. GitHub delivery/review/event models and metrics are host/tooling vocabulary. Inspection concerned source ownership only; no PR comments/reviews or external records were read or addressed.
- `agentic-ai/loom/src/{executable-skills,module-experts,structural-experts}` policy/audit sources: keep in TS. Their references to nook-core/nook-auth2/nook-wasm/password/vault are module routing, source path contracts, syntax analysis, and knowledge catalog entries, not implementations of those product rules. Do not port string catalog references to Rust or conflate source-policy checks with product validation.
- `.cortex/teams/ai/dynamic-skills/executable-skill-host/scripts/src/**`: keep in TS. YAML transport, schema admission and admitted-action dispatch serve executable knowledge tooling and Bun CLI boundaries.
- `.cortex/teams/ai/dynamic-skills/{cortex-article-structure,cortex-document-map,cortex-consistency,delegation-visualization}/scripts/src/**`: keep in TS. Markdown document semantics, navigation/policy consistency and delegation diagram rendering are intentionally AI-owned executable Cortex rules. They have no product Rust destination or product WASM caller chain.

## Scope implication

No AI implementation writer grant is needed for this placement pass. Product TS-to-Rust migration candidates belong to web/product scopes and should be handled by DEV-CORE plus WEB with Rust-generated APIs. AI catalogs may require mechanical path updates if those teams remove or rename listed consumer files; such a concrete follow-up would remain TS repository metadata rather than a Rust domain migration.


### Infrastructure and Hive

# SRE TypeScript-to-Rust placement discovery

Source inspection only. No repository edits, tests, compilation, checks, audits/reviews, workflows or infrastructure/API operations.

## Applicable portable product/security migrations

None found in the assigned SRE TypeScript surface. These sources do not implement Nook vault payloads, device/member identities, password generation/validation, passkey enrollment, recovery shares, encrypted storage, secret synchronization or product authorization. Product-name references in CI paths and coverage comments identify artifacts; they are not implementations of those domains. Existing Rust product owners should not acquire infrastructure credentials or Kubernetes/GitHub/OVH process adapters simply because the adapters use hashes, tokens or validation.

## Retained boundaries and source evidence

- `infra/providers/ovh-dedicated-api.ts`: OVH's required request signature joins application secret, consumer key, HTTP method, URL, body and timestamp, then applies the provider-required SHA-1 format. This is the OVH HTTP authentication adapter, not Nook cryptography, key derivation or authentication. Retain it with the OVH request transport and credential lifetime. No corresponding portable product Rust operation exists.
- `infra/providers/ovh-dedicated.ts`, `ovh-dedicated-document.ts`, `ovh-dedicated-contracts.ts`: provider inventory decoding, hostname/SSH-key admission, OS/reinstall decisions, recovery marker management, SSH keygen invocation and prepared/submitted server stages belong to operational provisioning. The word recovery here means server reinstall bookkeeping, not vault recovery. Keep external server freshness, filesystem permissions and request submission beside their host APIs.
- `infra/operator-ssh.ts`: private-LAN inventory policy, pinned host fingerprint comparison, ssh-keyscan/ssh-keygen invocation, managed SSH config and known-hosts updates are host infrastructure operations. Fingerprint handling uses the SSH toolchain; it does not duplicate product device-identity verification.
- `infra/jetstream-wss-check.ts` and `infra/sim/kubernetes-cache/**`: NATS/WebSocket probe framing and Kubernetes/process simulations are operational tools. Browser socket handling, CLI processes and kubectl execution remain TypeScript. Adding a Rust runtime merely to move them would not consolidate product logic.
- `agentic-ai/minds/hive/controller/reaper.ts` and `kubernetes-document.ts`: timing-safe service-token comparison, Kubernetes service/endpoints/policy DTOs, resource-version patch admission, and Pod deletion/reconciliation form the cluster control-plane adapter. Their credentials are service credentials, not product vault keys. The Rust Hive coordinator owns task leases/workflow state; the reaper owns the existing Kubernetes transport. No product-security mirror was found.
- `agentic-ai/ci-agent/src/main/**`: GitHub/Octokit requests, process environment credential injection, exact-head delivery, PR state interpretation, Git working-tree control, agent runtime orchestration, source provenance and Cargo dependency policy are CI tool behavior. In particular `git.ts` encodes a Git HTTP credential header only in the child environment; `prompt.ts` hashes an already-authorized plan artifact before launching an agent. These checks are transport/process trust boundaries, not calls that should move to nook-core.
- `.github/scripts/verify-registry-cache-blobs.ts` and `registry-cache-descriptor.ts`: OCI descriptor sizes and SHA-256 digests bind fetched registry bytes to content-addressed transport metadata. Keep streaming body verification beside registry HTTP I/O. A new product WASM dependency here would add a deployment/runtime dependency without removing duplicated domain code.
- Remaining `.github/scripts/**`: authored-budget calculation, GitHub preview comments, source-contract fixtures, container/manifests/SSH/firewall assertions and workflow helper code are deliberate repository automation. Product package names and password-form paths inside source-contract assertions are expected text, not product implementation.
- `agentic-ai/minds/hive-console/src/**`: selection, sorting, filtering, relative time, polling, focus and rendering are browser presentation. Task alerts originate in the Rust observer, so the browser does not reimplement dependency-failure or cancellation-alert derivation.



## Implementation complete

Implemented the accepted five-file presence projection. Rust owns the expiry calculation through the existing presence-window constant; the typed observer DTO carries the required Unix-millisecond deadline through both existing transports. Browser health display compares its live clock strictly before that deadline while retaining the unavailable gate, polling and last-seen rendering. The four scenario fixtures now supply explicit server-projected deadlines, and a focused Rust source example records the shared-window projection and saturating integer boundary. No persisted fields, configuration, policy, dependency, runtime or other source scopes changed.

Verification remains entirely deferred. Rustfmt was used in write mode during editing; no tests, compilation, typechecks, checks, lint, audits, reviews, workflows or API operations were run. No final verification phase was performed.

