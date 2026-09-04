---
title: Adopt typed action ownership one domain at a time
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-09-04T19:33:00Z
updated_at: 2026-09-04T20:44:00Z
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

- [ ] First selected domain and consumer boundary documented before edits.
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
| nook-core | 109 | 526 | Pending; auth/vault overlaps active PR 1335 |
| nook-auth2 | 43 | 245 | Pending; active PR 1335 overlap |
| nook-authenticator-domain | 1 | 0 | Existing method ownership; construction review pending |
| nook-replication | 3 | 1 | Pending |
| nook-event-log | 14 | 41 | Pending |
| nook-companion-core | 52 | 169 | Credential-fill merged; account-picker validating |
| nook-companion-wasm | 8 | 93 | Credential-fill consumers migrated in PR 1342 |
| nook-wasm | 98 | 719 | Pending |
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
- Account-picker phase model: PR 1345 validating; public runtime facade remains unchanged.
- Pairing state, existing legacy decoding, and persistence classification: next cohesive ownership candidate, 13 production functions and six fixtures across five files; preserve 20 core tests. Root exports overlap active PR 1344 and require a fresh integration check before implementation.
- Authenticator response decoders, website response decoders, origin/vault-host policy, and session protocol form subsequent cohesive ownership groups.
- Authentication workflow roots are already 983 and 885 lines; page-field classification is 936 lines. These require domain-aware simplification before ownership moves, without splitting tests to evade size limits.

Full remaining module inventory includes authentication workflow and its candidate, enrollment, binding, facts, validation, snapshot, and vocabulary children; all authenticator and website response decoders; backup-code candidates; extension session protocol/status and vault events; generated-password responses; OAuth origins; outcome evidence; page-field classification with control, destination, form, input-role, OTP progression, and passkey children; and vault-host policy. Zero detected production functions is not equivalent to completed construction or fixture review.
