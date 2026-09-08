---
title: Own secret host and presentation actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-presentation-actions
created_at: 2026-09-08T06:05:00Z
updated_at: 2026-09-08T11:59:30Z
source_issues: []
related_prs: [1561]
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

- [x] No production free functions remain in the three scoped modules.
- [x] Host normalization, explicit login-family allowlists, issuer mapping, URL precedence, and grouping tie-breaks remain unchanged.
- [x] Core and WASM callers use typed owners and public behavior remains compatible.
- [x] Dylint accepts the modules with ordinary `cfg(test)` helpers allowed.
- [x] Hosted validation, exact-head readiness, remote Loom, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed as the next cohesive secret presentation ownership slice after PR #1558; intentionally sized above a micro refactor.

## Findings and decisions

- Use the existing host catalog types and `SecretListItem` owner; do not add generic utility wrappers.
- Keep wire and WASM contracts stable and preserve bundled catalog fail-closed behavior.


- 2026-09-08: PR #1561 moved host normalization, issuer lookup, login matching, import error propagation, secret grouping, and page projection behind typed owners. The `unowned_function` policy keeps ordinary `cfg(test)` helpers allowed while production free functions remain denied.
- 2026-09-08: Final hosted validation run `34222183878`, exact-head deployment, readiness, and remote Loom run `34223197292` passed.
- 2026-09-08: Squash-merged as `1cfcc63e7ee660edeb91fc99baea54c0a2d2bc25`; `origin/main` was verified at the same SHA.
