---
title: Own extension pairing and persistence operations
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-extension-pairing
created_at: 2026-09-04T21:17:00Z
updated_at: 2026-09-05T00:55:11.340Z
source_issues: []
related_prs: [1347]
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Own extension pairing and persistence operations

## Context

The [project migration](README.md) next adopts the complete companion pairing-state and persistence classification domain.

## Outcome

Existing pairing creation, refresh, storage conversion, JSON validation, legacy decoding, and persistence classification belong to meaningful existing types. Module ownership enforcement rejects unowned helpers.

## Scope

- Migrate 13 production functions and six fixture helpers across the pairing, existing legacy, and persistence modules.
- Update core reexports and nine companion WASM delegations without changing browser exports.
- Preserve all existing legacy handling; add no new migration or recovery path.
- Keep browser-supplied access observations distinct from verified authorization; do not add artificial typestates to data transformations.

## Acceptance criteria

- [ ] All domain operations and fixture helpers have meaningful owners; both ownership lints are enabled.
- [ ] All 20 existing core tests and host pairing-grant behavior remain intact and pass hosted checks.
- [ ] Old free APIs and their reexports are removed with all consumers migrated.
- [ ] WASM export signatures, serialization, error precedence, and legacy behavior remain unchanged.
- [ ] Exact-head validation and review pass before squash merge.

## Progress

- 2026-09-05T00:55:11.340Z: Integrated main 48a5794fe536c8c45f40c80be97f9bf0df8d9b3e into PR #1347, current head da09f185130f777f1d52dc0d34f22f37016ee5fc. Hosted run: https://github.com/meta-secret/nook/actions/runs/33933953438. The authored product patch is unchanged and source SECURITY review passed; hosted checks remain pending. Required replacement-head GitHub Codex review is blocked by exhausted code-review quota; no merge or readiness is claimed.

- 2026-09-04: Read-only inventory selected five files and a 900-addition budget. Implementation has not started.

- 2026-09-04: Five-file implementation committed at 9ff7215, with 445 additions and 20 tests retained. Pre-publication review found two incorrectly renamed instance calls in tests, plus selection-mode and JSON-validation booleans needing named domain representations. Repair remains within this scope and budget; branch is not published.

- 2026-09-04: Repaired at 37fede3b; 492 additions across five files, 20 original tests plus two validation tests. SECURITY and pre-push passed. PR 1347 opened and hosted validation dispatched.

## Findings and decisions

- PR 1344 touches the two shared root files only to remove Clippy lint attributes; exact diff inspection found no overlap with pairing reexports or delegate bodies. Its lint-policy changes and external task state remain untouched.
- JSON validation is structural validation, not proof of cryptographic authorization.
- Existing serialized selection fields and WASM boolean exports remain explicitly unmigrated boundary scope; internal methods now use named selection and typed validation results.

## References

- [Pairing state](https://github.com/meta-secret/nook/blob/main/nook-app/nook-platform/nook-companion-core/src/extension_pairing_state.rs)
- [Domain inventory](domain-adoption.md)
