---
title: Own remaining vault policy adapter actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-runtime-policy-actions
created_at: 2026-09-08T05:58:00Z
updated_at: 2026-09-08T12:50:50Z
source_issues: []
related_prs: [1565]
depends_on: [rust-action-ownership-foundation]
---

# Own remaining vault policy adapter actions

## Context

The remaining vault policy adapters still contain three production free functions: runtime configuration parsing and two device-access identifier deserializers. These actions carry typed lifecycle and identity values but remain outside meaningful owners, leaving a small gap in the opt-in ownership policy.

## Outcome

Runtime policy parsing belongs to `VaultRuntimePolicy`, and verified device/store identifier deserialization belongs to `VerifiedVaultAccess`. Both modules enforce `unowned_function`; test-only fixtures remain permitted by the established `cfg(test)` exception.

## Scope

- `nook-app/nook-platform/nook-core/src/vault/vault_runtime_policy.rs`
- `nook-app/nook-platform/nook-core/src/vault/device_access.rs`
- Preserve runtime defaults, minimums, production gating, device/store validation, serialized shapes, and existing callers.

## Acceptance criteria

- [x] No production free functions remain in either policy module.
- [x] Runtime timeout and sync parsing behavior remains unchanged.
- [x] Verified device/store deserialization preserves typed validation and wire compatibility.
- [x] Dylint accepts both modules while ordinary `cfg(test)` helpers remain allowed.
- [x] Hosted validation, exact-head readiness, remote Loom, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed as the next cohesive vault policy ownership slice after PR #1558.

## Findings and decisions

- Use existing domain owners and associated functions; do not add compatibility free-function wrappers.
- Keep this bounded to two policy modules and below the 2,000-authored-addition ceiling.


- 2026-09-08: Claimed for the next bounded policy ownership slice after PR #1561; implementation is in progress on the runtime-policy branch.


- 2026-09-08: PR #1565 moved runtime parsing onto `VaultRuntimePolicy`, verified identifier deserializers onto `VerifiedVaultAccess`, and enum-owned passkey evidence deserializers onto their evidence types. The established `cfg(test)` exception remains intact.
- 2026-09-08: Final hosted validation run `34227098204`, exact-head deployment, readiness, and remote Loom run `34228145336` passed.
- 2026-09-08: Squash-merged as `1b0f3bdd5ab86f4d78236cd482abc9d817f64c73`; `origin/main` was verified at the same SHA.
