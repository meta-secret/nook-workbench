---
title: Own remaining vault policy adapter actions
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-runtime-policy-actions
created_at: 2026-09-08T05:58:00Z
updated_at: 2026-09-08T05:58:00Z
source_issues: []
related_prs: []
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

- [ ] No production free functions remain in either policy module.
- [ ] Runtime timeout and sync parsing behavior remains unchanged.
- [ ] Verified device/store deserialization preserves typed validation and wire compatibility.
- [ ] Dylint accepts both modules while ordinary `cfg(test)` helpers remain allowed.
- [ ] Hosted validation, exact-head readiness, remote Loom, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed as the next cohesive vault policy ownership slice after PR #1558.

## Findings and decisions

- Use existing domain owners and associated functions; do not add compatibility free-function wrappers.
- Keep this bounded to two policy modules and below the 2,000-authored-addition ceiling.
