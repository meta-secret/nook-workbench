---
title: Type simple genesis event pinning and staged identity admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/simple-genesis-event-admission.md
created_at: 2026-09-06T10:21:00Z
status: immutable
---

# Plan

1. Keep the exact ten-file closure and inspect current simple/staged genesis, journal, marker, signer-envelope, manager, browser ABI, and ownership-lint boundaries.
2. Move timestamp/default, decode/encode, seed sealing, pending lookup, and event persistence onto pending observations, a named ordinary request, and private non-Clone prepared event state; move staged identity binding and begin/resume onto existing staged input/request owners.
3. Add the event child module for signing and persistence responsibilities while keeping DTO/report cloning distinct from runtime capability ownership.
4. Preserve all 14 existing tests and add bounded pinning mismatch/reuse, unpolled prepared-write drop, and privacy/consumption coverage with existing fixtures.
5. Preserve wire compatibility, legacy behavior, exact journal/store/identity/timestamp comparisons, first-complete-event reuse, validation asymmetry, signer-envelope precedence, pending recovery rejection, staged owner selection, authorizer binding, transaction ordering, errors, partial effects, browser ABI, marker schemas, and completion cleanup/publication.
6. Apply ownership denial and invalid-suppression prohibition across the completed simple/staged genesis subtree only; run scoped rustfmt and diff checks, then delegate implementation for static review only.
7. Deliver one PR under 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
