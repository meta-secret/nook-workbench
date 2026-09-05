---
title: Own browser OAuth origin policy
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-oauth-origin
created_at: 2026-09-05T03:44:26.608Z
updated_at: 2026-09-05T04:27:00.597Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1366
depends_on:
  - issues/rust-action-ownership/generated-password.md
---

# Own browser OAuth origin policy

## Context

Continue the [project migration](README.md) after generated-password response ownership. Three pure OAuth classification operations still lack their existing domain owners.

## Outcome

Provider-specific origin support belongs to BrowserOAuthProvider; unsupported-host diagnosis belongs to OAuthOriginUnsupportedReason. The complete core module enforces ownership while public WASM signatures and policy behavior remain unchanged.

## Scope

Five Rust files: companion core oauth_origin_policy.rs and lib.rs; core lib.rs; companion WASM lib.rs; vault WASM public_api/companion_heuristics.rs. Estimated 220–300 authored additions, ceiling350. No namespace struct or artificial typestate.

## Acceptance criteria

- [ ] Complete core ownership deny and invalid-suppression forbid, obsolete free reexports removed and both WASM consumers migrated.
- [ ] Exact provider allowlists, missing-location projection, allowed-origin precedence and preview hostname boundaries preserved.
- [ ] Existing core and two bridge tests retained with bounded domain matrices; unchanged browser policy tests pass.
- [ ] Hosted checks, source SECURITY, readiness, squash merge and Workbench completion pass.

## Decisions and limitations

This is a classification report, not OAuth authorization authority. Preserve missing or empty location projection and existing supported SSR representation; do not claim absent location authorizes token exchange. Exact origin strings remain case-sensitive and untrimmed. Preview diagnostic lowercases ASCII but does not trim; an allowed origin takes precedence over the independently supplied hostname. No new origin/hostname correlation, URL normalization, credentials, cryptography, storage, fallback or recovery. Flat WASM exports and raw wire absence remain later migration scope. Vault-host policy and enrollment require separate inventories.

## Progress

DEV-CORE completed read-only source inventory at main28747e3c. No implementation or hosted validation is claimed.

## Implementation progress

PR1366 is published at b5189da021531975894324212fb2249c5f2d3ead. Five files and266 authored additions; source SECURITY and pre-push hygiene passed. Full hosted run33944525000 is active. No completed runtime validation is claimed.
