---
title: Sentinel genesis consumer-closure amendment
status: active
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-genesis-admission.md
created_at: 2026-09-06T05:59:00Z
base_sha: 85a21b0c4eea13e1ec0a9450a6fe31e92e8cbb77
supersedes: plans/rust-action-ownership/2026-09-06T05-54-30Z-sentinel-genesis-admission.md
gizmo_id: rust-action-ownership-sentinel-genesis-admission
---

# Sentinel genesis consumer-closure amendment

## Correction

Pre-edit consumer verification found that `nook-core/src/vault/vault_sentinel_genesis.rs` directly wraps the auth2 announcement and response free functions and owns an inline response fixture. Add that file as the eleventh authorized file so removal of the free exports leaves a complete compiling consumer closure.

## Limits

Changes in the added file are limited to removing the redundant wrappers, routing callers through the auth2 request and announcement owners with the existing signing key, and migrating its inline fixture. Every security invariant, test requirement, exclusion, 1,800-line ceiling, and remote validation requirement from the original plan remains authoritative.
