---
title: Own browser OAuth origin policy
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-oauth-origin
created_at: 2026-09-05T03:44:26.608Z
updated_at: 2026-09-05T06:31:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1366
depends_on:
  - issues/rust-action-ownership/generated-password.md
---

# Own browser OAuth origin policy

## Context

Continue the [project migration](README.md) after generated-password response ownership. Three pure OAuth classification operations lacked their existing domain owners.

## Outcome

Provider-specific origin support belongs to BrowserOAuthProvider; unsupported-host diagnosis belongs to OAuthOriginUnsupportedReason. The complete core module enforces ownership while public WASM signatures and policy behavior remain unchanged.

## Scope

Five Rust files: companion core oauth_origin_policy.rs and lib.rs; core lib.rs; companion WASM lib.rs; vault WASM public_api/companion_heuristics.rs. Final diff: 267 additions and 86 deletions.

## Acceptance criteria

- [x] Complete core ownership deny and invalid-suppression forbid, obsolete free reexports removed and both WASM consumers migrated.
- [x] Exact provider allowlists, missing-location projection, allowed-origin precedence and preview hostname boundaries preserved.
- [x] Existing core and two bridge tests retained with bounded domain matrices; unchanged browser policy tests passed.
- [x] Hosted checks, source SECURITY, readiness, squash merge and Workbench completion passed.

## Decisions and limitations

This is a classification report, not OAuth authorization authority. Missing or empty location projection and existing supported SSR representation remain unchanged. Exact origin strings remain case-sensitive and untrimmed. Preview diagnostics lowercase ASCII without trimming; an allowed origin takes precedence over the independently supplied hostname. No origin/hostname correlation, URL normalization, credentials, cryptography, storage, fallback or recovery was added.

## Completion

PR1366 merged as 9ee87f467b6fa9da9593792c8f81f5d6a6742743 after full run33949317261, source SECURITY, exact-head readiness, and zero unresolved findings. Worklog: worklogs/rust-action-ownership/2026-09-05T06-31-27Z-pr-1366.md.
