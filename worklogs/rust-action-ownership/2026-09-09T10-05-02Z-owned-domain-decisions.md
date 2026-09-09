---
title: Localize compound domain decisions on their owners
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T09-29-27Z-owned-domain-decisions.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T09:29:27Z
finished_at: 2026-09-09T10:05:02Z
agent: codex
---

# Work summary

## Outcome

Updated canonical Cortex policy for recursive single responsibility and data locality. Refactored the article-block example and inventoried caller-side domain decisions across AI tooling, Rust, browser state and infrastructure. Published [PR #1573](https://github.com/meta-secret/nook/pull/1573) at f3e69f4c73df51813f133338117c7a8998732dfa. Delivery remains the open PR; all code verification is deferred.

## Progress

- AI f32e2c01b7eb3fa1c75ccfcc39c9d6d12172cd81: nine files; canonical policy plus article block/section/finding, Markdown node and runtime command owners.
- DEV-CORE f1add142e886e4f8c018f5839f0b8b278b6249e9: 35 Rust files; five internal decision groups plus three portable browser dependencies.
- WEB a94caf986db02dda3b9481e8a4c56e15cdd9278f: 18 browser files; widget/picker/workflow state decisions and direct Rust API adoption.
- SRE f3e69f4c73df51813f133338117c7a8998732dfa: 15 files; Hive outcomes, attention, blocker admission, completion plans and OVH observations.

## Implementation problems

Caller-side compound predicates repeatedly interpreted another object's fields, concealing domain responsibilities. Some named boolean helpers still hid meaning, while browser code reconstructed generated Rust facts and workflow identity. Passive marker/server records also had operation-shaped comparison wrappers. Meaningful owners now return named semantic outcomes and, where useful, the selected or admitted data. Callers retain orchestration and effects.

## Decisions

- Canonical function-ownership decision-locality guidance requires recursive placement on the object or subobject holding the relevant data. Domain API integrity requires semantic enums or data-bearing outcomes for domain decisions. True mechanical, trait and host predicates remain boolean where appropriate.
- Preserve transport records and generated Rust DTOs at boundaries. Introduce meaningful admitted owners for article/Markdown/OVH interpretation without generic predicate frameworks or schema duplication.
- Preserve error/veto/short-circuit order, conservative unknown handling, live authorization and secret lifecycle. Borrowed key/envelope decisions are internal evidence, not transferable authorization.
- Keep DOM identity and host effects in TypeScript; migrate portable provider selection, identity sealing admission and authentication revalidation into Rust.

## Validation

No tests, code generation, compilation/typechecks, lint/checks, code reviews, source audits, validation workflows or infrastructure operations were run. Source discovery and direct fixture adaptation were implementation work. Write-mode formatting only: WEB used explicit formatter flags after configured plugin resolution failed; no formatter dependency was added. The delegation visualization renderer was invoked solely to display the required task plan, not to validate product code. Git and Workbench/PR receipts are publication metadata.

## Remaining work

All accepted inventoried groups are implemented. This is not a claim that every logical operator in the repository has been classified, nor that runtime equivalence or compilation has been established. Tests, generated bindings and verification await separate user instruction. Generated Hive imports from the preceding transparency task still await the first authorized generation. No merge or review-comment work was performed.

## Completed inventory

### Cortex and article/tooling decisions

Canonical policy lives in .cortex/shared/dynamic-skills/function-ownership.md under Decision locality and is linked from domain-api-integrity.md. CortexArticleBlock.articleHeading returns Article with its heading or Other, replacing the cited compound condition. Block/section owners interpret boundaries, body contribution, density and procedure requirements. Finding owners interpret agreement while audit and verifier retain separate traversal/emission paths. CortexMarkdownArticleNode owns recursive AST interpretation with semantic modes. CortexRuntimeCommand and CortexRuntimeEntrypoints own normalization, kind, prefix relationship and registration; retired-command findings remain distinct.

### Rust domain decisions

EventGraphReplacementEvidence, ProjectionIntegrity and GenesisImportContents replace caller reconstruction of replaceability. IdentityMemberKeyBinding and borrowed IdentityVaultAppEnvelopes own key matching and paired grant coverage; reconciliation retains both decryptions and full coverage. Authentication routes, controls and field usability own their purpose-specific decisions with original veto order. VaultKeyMaterial and SessionCatalogAvailability own session readiness. VaultEventBody owns checkpoint structure and rotation trigger classification; the graph retains parent resolution and signature/causal authorization.

Remote provider selection returns canonical provider rows through select_remote_event_flush_providers. Typed identity-handoff sealing receives the expected identity and checks current identity/signer after asynchronous preparation. Approved workflow revalidation owns context/field compatibility, passkey evidence overlay, ordered selection and typed workflow comparison; its matched result preserves the original observation index. Binding failures reject. No stored schema or dependency changes.

### Browser state decisions

WidgetState owns rendering reuse, control lifetime and workflow admission. PickerState owns approval interpretation and atomic correlated-request taking, preserving unrelated pending requests. Approval and scope/revalidation comparisons return semantic outcomes. Browser consumers use all three Rust APIs, removing duplicated facts/count comparisons and workflow-string reconstruction. Root/form distinctions, live DOM observation, cleanup and effect order remain. Direct fixture and mock contracts were adapted without running them.

### Infrastructure decisions

DeliveryCheck and DeliveryRun own state/conclusion outcomes; aggregate acceptance preserves success/pending/cancellation precedence. ObservedTask owns attention timing and AlertKind owns severity. WireBlockerResult owns nested admission and its original diagnostic order. TaskCompletionProposal and CompletionPlan own relevance/retirement data and changed-file/artifact compatibility. OVH marker/server observations own compatibility/admission; provider effects and wire formats remain unchanged.

### Retained boundaries

Owner-local validated constructors, Serde/trait predicates, raw message shape admission, third-party AST/DOM interpretation, primitive leaf comparisons, fresh transactional guards and multi-owner effect relations remain at their actual owners or boundaries. They were not replaced by cosmetic enum wrappers or cached authorization. No generated declarations were manually edited.
