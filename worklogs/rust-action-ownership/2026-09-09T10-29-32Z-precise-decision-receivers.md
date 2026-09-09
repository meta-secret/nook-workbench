---
title: Place decisions on their precise value receivers
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T10-07-53Z-precise-decision-receivers.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T10:07:53Z
finished_at: 2026-09-09T10:29:32Z
agent: codex
---

# Work summary

## Outcome

Updated canonical Cortex guidance for precise receivers and overwide object parameters. Refactored all accepted inventoried groups so kind-only behavior belongs to kind semantics and aggregate APIs delegate where meaningful. Published [PR #1573](https://github.com/meta-secret/nook/pull/1573) at cd17e24ba6e0e49bc7884fd69a7ee13cfa5f2ace. The article block delegates body/ordered/density classification to its canonical kind owner; depth-dependent interpretation remains with the block.

## Progress

- AI 0aa1d90bdbcdeb3b85b338ddc62694463cd638e9: eight files; policy plus article kind, Markdown kind and prose-node ownership.
- DEV-CORE 0ea02c27f1e67880a2fa2809992b2779a05521e7: 26 Rust files; six receiver groups plus generated credential-kind projection.
- WEB 500a0e25b8b3865a2ca2827a7faebac0ecd7c493: six browser groups and direct consumers/fixtures, including dashboard text values.
- SRE cd17e24ba6e0e49bc7884fd69a7ee13cfa5f2ace: 22 files; six Hive, OVH and preflight receiver groups.

## Implementation problems

A helper can be misplaced even without a compound condition: passing a record only to inspect its kind hides the narrower knowledge owner. Some earlier aggregate methods still classified nested kinds themselves. Other associated functions accepted values of their own type as parameters, or operation shells held an entire credential record to choose an endpoint. Precise receivers now express the actual dependencies instead of moving the same helper behind a broad class.

## Decisions

- Canonical Precise receivers guidance distinguishes kind-only classification from aggregate payload interpretation. Aggregate intention methods delegate nested decisions; no helper accepts an aggregate just to unpack its discriminator.
- Rust enum behavior uses enum methods. TypeScript kind behavior uses existing enum vocabulary through a concrete semantic owner or cohesive enum operation. No primitive prototype changes, duplicate vocabularies or generic wrapper framework.
- Preserve generated/wire contracts, validation timing, unknown handling, short-circuit/error order, live effects and secret lifecycle. True Serde booleans, FFI signatures and third-party narrowing remain thin boundaries.

## Validation

No tests, compilation, generation, typechecks, checks, audits, code reviews, validation workflows or infrastructure operations were executed. Source discovery and fixture adaptation were implementation work. Formatting was write-mode only; two direct Svelte expression edits remained unformatted because the plugin was unavailable. The delegation renderer only displayed the task plan. Git and remote record receipts are publication metadata, not code verification.

## Remaining work

All accepted inventoried receiver groups are implemented. This does not claim an exhaustive classification of every helper in the repository. Generated DeviceAccessCredentialKind and earlier generated Hive imports await the separately authorized generation/compilation phase. Runtime and type correctness are unverified. Tests and reviews remain deferred; delivery stops at the open PR.

## Completed inventory

### Canonical policy and AI tooling

Function ownership now documents Precise receivers and overwide-input prohibitions; domain API integrity links to it. CortexArticleKind holds the existing CortexArticleSemanticKind and owns body contribution, ordered action contribution and density role. CortexArticleBlock delegates those decisions, retaining heading depth, article selection and boundary rules. CortexMarkdownNodeKind owns type-only categories while the node retains recursion/content. CortexProseNode and its kind own text extraction, quote/index exemptions, source spans and quote context; density orchestration consumes semantic outcomes. Existing transport and AST vocabulary remain unchanged.

### Rust

AuthenticationWorkflowAction owns approval_requirement. StoredSecretRecord owns fallible classify returning VaultMetaRecord; redundant boolean record probes are removed and consumers match typed outcomes. DeviceAccessIdentityObservation owns identity_state. VaultSchemaVersion/VaultUnlock/VaultArchitecture own schema support, projection and Serde omission decisions. SharedDriveGrantPolicy owns automatic_grant_route. Redundant core recovery forwarding is removed while numeric-enum WASM adapters remain. DeviceAccessProtectionKind owns credential_kind, returning generated DeviceAccessCredentialKind through a thin ABI. Classification precedence and errors remain intact.

### Browser

RuntimeFailure owns recovery classification by delegating to Rust. CloudKitFailureDiagnostic owns decoded token classification and presentation while preserving setup/presentation precedence. PasskeyOnlyScope owns fresh field queries and candidate selection. AuthenticationControlIdentitySnapshot owns ordered identity comparison. Browser protection displays consume generated credential kind. Known/unknown DashboardText variants own display and identifier projections, replacing access-chain and passkey-card helpers; constructors and three fixture sources follow. Directly encountered contradictory AccessChainPresentation receiver bindings were corrected within the touched owner.

### Infrastructure

CheckConclusion/RunConclusion own completed-result classification; selection objects select their data. TaskKind owns instructions/labels, ClaimedTask assembles through its receiver, and TaskId owns delivery branch naming. Retirement plans own live owner verification. PR methods receive self and generation selection owns generation parsing. Activity localization belongs to a data-bearing presentation owner. OVH status classification uses existing enum semantics, endpoint selection receives the endpoint alone, and reinstall intent returns a named outcome. Approval remains at the original API point and status ingress excludes namespace methods without changing status strings. Preflight uses its existing syntax view as receiver instead of separately passing node/source.

### Retained boundaries

Constructors/parsers before a trusted receiver exists, Serde omission callbacks, required WASM enum adapters, third-party AST/DOM type narrowing and genuine cross-owner/effect relationships retain their required shape. Aggregate decisions requiring payload/depth/time remain aggregate decisions; no whole aggregate was passed into its kind to conceal the same smell. No generated declaration was manually authored.
