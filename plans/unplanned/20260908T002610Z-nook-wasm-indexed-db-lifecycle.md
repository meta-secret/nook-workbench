# Nook WASM coverage: IndexedDB lifecycle and atomic-update branches

- Repository: `meta-secret/nook`
- Starting Main: `f0a5f370fb0cb857b5da85910d0e33c559c82e2d`
- Target crate: `nook-wasm`
- Current absolute line floor: 81.1%

## Objective

Continue the coverage mission with behavior-focused browser tests for the IndexedDB adapter. Exercise local-vault import, label rename, active-vault switching, pending-new-vault suppression, legacy search-catalog deletion, provider cache reads, and atomic update/migration no-op and guard paths. Preserve fail-closed behavior and avoid weakening coverage policy.

## Delivery

- Keep authored additions under the repository budget.
- Use static local gates only: format, diff check, and Loom pre-push.
- Raise the `nook-wasm` floor only after the hosted WASM job reports a measured increase that clears the new floor.
- Require fresh exact-head policy, Hive, PR validation, preview, and readiness checks before merge.

