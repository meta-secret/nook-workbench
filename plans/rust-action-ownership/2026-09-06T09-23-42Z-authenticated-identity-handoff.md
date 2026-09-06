---
title: Type authenticated identity handoff admission and publication
authority: rust-action-ownership
issue: issues/rust-action-ownership/authenticated-identity-handoff.md
created_at: 2026-09-06T09:23:42Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect the current handoff transaction, managers, schemas, tests, and ownership lint boundaries.
2. Move transaction-store selection, signing-seed persistence, and consuming commit onto `IdentityHandoffCommit`; move existing-vault admission onto `ExistingVaultHandoff`.
3. Add private non-Clone `CheckedExistingVaultHandoff` retaining only the live transactional observations needed for consuming import; keep ancestry and graph calculations on borrowed owners.
4. Move fixture construction/assertion helpers onto their fixture types and retain six existing tests while adding bounded admission/publication and privacy/consumption cases.
5. Preserve exact transaction order, directory migration effects, key adoption, pending-handoff clearing, error ordering, browser ABI, schema, partial effects, and drop behavior. Do not add authorization freshness, rollback, recovery, fallback, or reusable tokens.
6. Apply ownership denial and invalid-suppression prohibition only across the completed handoff subtree; run scoped rustfmt and diff checks, then delegate implementation for static review only.
7. Deliver one PR under 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
