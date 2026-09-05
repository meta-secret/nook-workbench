---
title: Adopt typed action ownership one domain at a time
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-09-04T19:33:00Z
updated_at: 2026-09-05T02:28:11Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Adopt typed action ownership one domain at a time

## Context

The [feature](README.md) needs incremental product adoption after its lint and policy foundation.

## Outcome

Migrate cohesive domain action flows independently, giving each state its available actions and activating ownership enforcement for the migrated boundary.

## Scope

- Select a real action flow with observable state invariants and bounded consumer changes.
- Use separate state structs, controlled construction, consuming transitions, and explicit branching outcomes.
- Avoid bulk namespace wrapping, framework introduction, speculative recovery, or unrelated schema changes.

## Acceptance criteria

- [x] First selected domain and consumer boundary documented before edits.
- [ ] Valid transition behavior covered by Rust tests.
- [ ] Invalid action ordering and advanced-state construction rejected by compile-fail tests.
- [ ] Dylint activated for the migrated scope with no blanket suppression.
- [ ] ABI and runtime authorization behavior verified where applicable.

## Progress

- 2026-09-04: Recorded incremental adoption dependency; no product migration started.
- 2026-09-04: Project-wide continuation authorized. First independent slice is [credential-fill ownership](credential-fill.md). Active PR 1335 owns overlapping authentication, vault-connect, and root-export paths; those paths remain read-only pending its completion.

## Findings and decisions

- Existing sealed generic enrollment states demonstrate controlled construction but do not mandate generic sessions for other domains.
- A configuration parser ownership cleanup alone is not a typestate demonstration.

## References

- [Foundation](foundation.md)

## Coverage inventory

Initial inventory at Nook commit `b2bc663c0ed6d963f3ce13461731a5887dfafa3b` covers 452 Rust files across 15 packages. Counts below measure column-zero function declarations, including tests and framework exports; they omit indented helpers and are not compiler-confirmed violations. Generated and third-party code are separately accounted for.

| Package | Rust files | Function candidates | Adoption status |
|---|---:|---:|---|
| nook-core | 109 | 526 | Sentinel response adapters merged in PR 1348; remaining domains pending |
| nook-auth2 | 43 | 245 | Checked participant response merged in PR 1348; consuming quorum merged in PR1355 |
| nook-authenticator-domain | 1 | 0 | Existing method ownership; construction review pending |
| nook-replication | 3 | 1 | Pending |
| nook-event-log | 14 | 41 | Pending |
| nook-companion-core | 52 | 169 | Credential-fill and picker merged; pairing merged; authenticator decoders merged in PR1352 |
| nook-companion-wasm | 8 | 93 | Credential-fill consumers migrated in PR 1342 |
| nook-wasm | 98 | 719 | Sentinel response consumers merged in PR 1348; quorum completion merged in PR1355 |
| nook-app-common | 4 | 14 | Pending; distinguish generated translations |
| nook-domain-api | 14 | 82 | Foundation merged; intentional negative fixtures retained |
| fuzz | 1 | 0 | Framework boundary review pending |
| hive | 36 | 131 | Pending |
| lace | 3 | 6 | Pending |
| preflight | 65 | 588 | Pending |
| vendored arrayref | 1 | 0 | Third-party code excluded |

## Domain sequence

1. Credential-fill pure planning and classification ownership.
2. Independent companion domains and account-picker lifecycle invariants.
3. Sentinel quorum unlock, vault parse/unlock/hydration, and enrollment once active ownership clears.
4. Event validation, signed projection/application, and replication transitions.
5. Remaining secret, import, format, storage, and WASM adapter domains.
6. Tooling, examples, test fixture ownership, and final per-crate enforcement.

Each domain requires both ownership-enforcement evidence and a semantic construction/action-graph review. Remaining function counts alone cannot establish that action ordering or security is correct. Each implementation slice receives its own immutable plan and independently validated PR.

## Companion domain follow-through

- Credential-fill core and adapters: completed in PR 1342.
- Account-picker: PR1345 merged as3849b814053dbc8cea6d79d6b0e5938694410262 with consuming Rust/WASM lifecycle transitions, typed browser completion outcomes, concurrency tests, and compile-fail probes.
- Pairing state, existing legacy decoding, and persistence classification: PR1347 merged with ownership of 13 production operations and six fixtures across five files; all20 original tests plus2JSON validation tests passed, along with full hosted checks and readiness.
- Authenticator response decoders: merged in PR1352 across six core modules and their WASM consumers; hosted tests, Dylint, source SECURITY and readiness passed. Website response decoders, origin/vault-host policy, and session protocol remain subsequent cohesive groups.
- Authentication workflow roots are already 983 and 885 lines; page-field classification is 936 lines. These require domain-aware simplification before ownership moves, without splitting tests to evade size limits.

Full remaining module inventory includes authentication workflow and its candidate, enrollment, binding, facts, validation, snapshot, and vocabulary children; all authenticator and website response decoders; backup-code candidates; extension session protocol/status and vault events; generated-password responses; OAuth origins; outcome evidence; page-field classification with control, destination, form, input-role, OTP progression, and passkey children; and vault-host policy. Zero detected production functions is not equivalent to completed construction or fixture review.

## Current boundary work

- Main ownership overlaps from PRs 1335 and 1344 are resolved by their merges; current slices integrate those changes.
- Merged Sentinel checked responses in PR 1348 establish signature and supplied-key binding, with existing membership/provenance checks retained at the caller. Quorum collection and guarded finalization merged in PR1355 under the [quorum plan](sentinel-quorum.md).
- Existing flat WASM exports, pairing wire selection and boolean projections, authenticator wire success flags, and raw picker expiry are remaining migration work, not permanent boundary exemptions.
- Historical lexical counts above are unchanged and are not current remaining-violation counts. Final completion requires a refreshed compiler and semantic inventory.

- 2026-09-04: PR1348 completed exact-head validation, readiness, squash merge, and Workbench closeout. PR1352 decoder tests passed and await base refresh. PR1345 cleanup tests passed after a two-line test repair; PR1345 and PR1347 encountered the inherited browser coverage deadline, addressed separately in PR1353 before their next validation.

## Remaining scope snapshot

At main `249c4414b`, DEV-CORE inspected 451 non-vendor Rust files across 13 manifest roots. This is static prioritization evidence, not a compiler-proven violation count. Only three product source scopes explicitly activate ownership enforcement on that main snapshot: credential fill, checked Sentinel response, and its core signing adapter. Open PRs are recorded separately and are not counted as merged completion.

At that snapshot, open PRs covered account-picker phases, pairing, authenticator responses, and Sentinel quorum completion. Account-picker PR1345 and authenticator-response PR1352 have since merged. The next bounded plans cover [website responses](website-responses.md) and [Sentinel genesis issuance](sentinel-genesis.md). Additional candidates, each requiring its own precise contract and budget, are:

- Remaining reported responses, beginning with generated-password decoding and secret destruction.
- OAuth-origin and vault-host policy operations.
- Authentication observation classification, whose existing module is near the source-size limit.
- Enrollment parsing, decryption, and runtime admission capability boundaries.
- Event append and security-epoch preparation bound to checked frontier and signer.
- Simple identity genesis and reconciliation, preserving existing durable-output behavior.
- Replication immutable insertion and remaining event-log operation ownership.
- Device-protection checked material and access effects.
- Hive claim execution and shutdown, with AI/SRE semantic ownership.
- Preflight and lint tooling, preserving real framework entrypoints and intentional negative fixtures.

These candidates are not the complete backlog. Core secret/format/import scopes, remaining WASM manager/storage/export surfaces, app-common helpers, other tooling, binaries, examples, and nested test helpers still need classification. Stateless report decoding does not need artificial phases; reusable collections do not become one-use capabilities merely because they mutate. Local typestate cannot replace current external authorization or cryptographic checks.

- 2026-09-05T02:44:53Z: Sentinel quorum PR1355 merged with full hosted checks, source SECURITY and readiness. Genesis issuance is now in progress; the project migration remains incomplete.

## Latest delivered and active scopes

Website response PR1361 merged as65901c8c816cf30466793980ba5e96219083eaa1 after full run33942183190, source SECURITY and readiness. Three complete core modules now enforce ownership. Generated-password response PR1365 is published; Sentinel genesis PR1363 has a batched CI correction awaiting replacement validation. The next bounded inventory is [OAuth origin policy](oauth-origin.md). Historical counts above remain snapshots; the project mission is incomplete.
