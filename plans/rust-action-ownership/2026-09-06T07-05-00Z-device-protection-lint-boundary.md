---
title: Device-protection lint-boundary amendment
status: active
feature: rust-action-ownership
issue: issues/rust-action-ownership/device-protection-registration.md
created_at: 2026-09-06T07:05:00Z
base_sha: e00cb372a60d3e7333ea395bb1fc864d0dd487c9
supersedes: plans/rust-action-ownership/2026-09-06T06-55-00Z-device-protection-registration.md
gizmo_id: rust-action-ownership-device-protection-registration
---

# Device-protection lint-boundary amendment

## Correction

The repository ownership lint uses `rustc lint_level_at_node`, so a parent-module denial inherits into every declared child. The explicit scope excludes `protected_identity.rs` and its 18 existing free helpers from this migration; adding a parent denial would therefore require invalid suppression or a larger import/module rewrite. The implementation must leave parent denial deferred, keep the parent free of production operations after extraction, and apply ownership denial to the complete new `registration.rs` and `unlock.rs` children. This preserves the exact bounded exclusion without suppression.

## Limits

All other requirements, files, typestate behavior, tests, ABI, lifecycle guarantees, authored-addition ceiling, and validation requirements from `plans/rust-action-ownership/2026-09-06T06-55-00Z-device-protection-registration.md` remain authoritative.
