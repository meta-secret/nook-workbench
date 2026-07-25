---
title: "Enforce Simple/Sentinel application capabilities in Rust and WASM"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:14Z
updated_at: 2026-07-14T05:44:30Z
source_issues: ["https://github.com/meta-secret/nook/issues/361"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Enforce Simple/Sentinel application capabilities in Rust and WASM

## Imported context

This record was imported from [Nook GitHub issue #361](https://github.com/meta-secret/nook/issues/361)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

Two hostnames are not a sufficient security boundary. Rust/WASM must know which
application capability is active and reject vault operations that do not belong
to it. Sentinel must never accept an extension-class client, Simple unlock
envelope, password-only fallback, or wrong-origin app surface.

## Scope

- Add precise Rust domain types for `SimpleApp` and `SentinelApp` capability
  contexts and extension eligibility; do not use string tags or TypeScript
  policy.
- Require the capability context for vault creation, import, hydrate/open, and
  device/enrollment paths that can produce an unlocked session.
- Reject a Simple vault in the Sentinel app and a Sentinel vault in the Simple
  app before persistence or session creation.
- Make Sentinel extension enrollment/grants unrepresentable or fail closed in
  `nook-auth2` / `nook-core`.
- Expose typed WASM decisions/errors for the two web apps and extension.
- Preserve compatibility for encrypted vault serialization; this is an
  application-capability boundary, not a vault-format type conversion.

## Acceptance Criteria

- Behavior-focused Rust tests cover every allowed and denied app/vault/client
  combination, including import, hydrate, extension enrollment, and Sentinel
  quorum opening.
- Sentinel cannot create a session from provider access, password-only access,
  a Simple envelope, or an extension device.
- Simple cannot create/import/open a Sentinel vault.
- No raw roots, keys, shares, or policy validation cross into TypeScript.
- WASM tests prove the typed errors are preserved at the browser boundary.

## References

- `.cortex/design-docs/vault-architecture-modes.md`
- `nook-app/nook-auth2`
- `nook-app/nook-core/src/vault`
- `nook-app/nook-wasm/src/manager`


## Historical comments

No comments.
