---
title: Type provider credential sealing and identity-scoped snapshot publication
authority: rust-action-ownership
issue: issues/rust-action-ownership/provider-credential-publication.md
created_at: 2026-09-06T12:28:33Z
status: immutable
---

# Plan

1. Keep the exact seven-file closure and inspect core credential operations, storage save/import paths, rollback projection, vault API callers, Sentinel acceptance, existing transaction timing, browser contracts, and ownership-lint boundaries.
2. Give credential and snapshot data owners explicit encoding/recipient observations while preserving sequential sealing, clone-before-open atomicity, empty/marker handling, malformed armor rejection, and exact public-key behavior; marker presence must not imply valid ciphertext or recipient authentication.
3. Split normal-save and presealed-import requests into private non-Clone prepared provider snapshot writes retaining admitted transaction/store handles, scoped destination, snapshot, and legacy-write decision; consuming persistence preserves scoped write, conditional legacy write, and transaction completion order.
4. Keep normal-save sealing before keyring-policy lookup and database access; preserve keyring observation before the separate `nook_auth` transaction and never claim cross-database atomicity.
5. Preserve identity/legacy reads, conflict refusal, exact errors, partial effects, future-drop behavior, rollback projection schema, private-key-free import, explicit recipient app ID, unrelated vault grants, and all sealing/opening cryptographic behavior.
6. Retain eight core and 18 browser storage tests; relocate publication tests with the child and add bounded preparation/drop, malformed-marker, and failure-preservation controls using typed fixtures and projections.
7. Enable ownership denial and invalid-suppression prohibition in the complete core credential module and new publication child only; leave unrelated parent storage and rollback helpers outside blanket activation. Run scoped formatting and static checks, then delegate implementation for static review.
8. Deliver one PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
