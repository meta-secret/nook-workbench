---
title: Own secret host and presentation actions
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-presentation-actions
created_at: 2026-09-08T06:05:00Z
updated_at: 2026-09-08T06:05:00Z
source_issues: []
related_prs: []
depends_on: [rust-action-ownership-foundation]
---

# Own secret host and presentation actions

## Context

Secret host normalization, login-family matching, authenticator issuer mapping, and presentation grouping still expose free production functions. These actions carry host, issuer, and `SecretListItem` state but are not represented by owning domain types, so the action graph remains callable through detached helpers.

## Outcome

`LoginSiteHosts` and `AuthenticatorIssuerHosts` own bundled host lookup and normalization, while `SecretListItem` owns URL normalization, login matching, authenticator grouping, and entity-group resolution. The ownership lint covers all three modules and test-only helpers remain allowed under `cfg(test)`.

## Scope

- `nook-app/nook-platform/nook-core/src/secrets/login_site_hosts.rs`
- `nook-app/nook-platform/nook-core/src/secrets/authenticator_issuer_hosts.rs`
- `nook-app/nook-platform/nook-core/src/secrets/secret_view/secret_presentation.rs`
- Direct core and WASM callers and re-exports of the migrated actions.

## Acceptance criteria

- [ ] No production free functions remain in the three scoped modules.
- [ ] Host normalization, explicit login-family allowlists, issuer mapping, URL precedence, and grouping tie-breaks remain unchanged.
- [ ] Core and WASM callers use typed owners and public behavior remains compatible.
- [ ] Dylint accepts the modules with ordinary `cfg(test)` helpers allowed.
- [ ] Hosted validation, exact-head readiness, remote Loom, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed as the next cohesive secret presentation ownership slice after PR #1558; intentionally sized above a micro refactor.

## Findings and decisions

- Use the existing host catalog types and `SecretListItem` owner; do not add generic utility wrappers.
- Keep wire and WASM contracts stable and preserve bundled catalog fail-closed behavior.
