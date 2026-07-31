---
title: Move remaining TypeScript domain rules into Rust
feature: rust-domain-modeling
issue: none
started_at: 2026-07-31T01:00:35Z
agent: cursor
---

# Move remaining TypeScript domain rules into Rust

## Interpreted request

Continue the Rust-first ownership program by moving leftover portable domain
rules out of TypeScript into `nook-core`, exposed through thin `nook-wasm`
adapters. The goal is reusable domain ownership for future hosts. This task does
not build a CLI or mobile application.

Prior vault, sync, enrollment, and workflow migrations are largely complete.
Remaining work is focused: auth companion text heuristics, secret form DTO
mirrors, OAuth/host product policy, and transport-only cleanup of outcome
message views.

## Requirements

- Portable decisions, heuristics, allowlists, and domain DTOs live in
  `nook-core` with behavior-focused Rust tests.
- `nook-wasm` exposes thin typed wrappers only.
- TypeScript retains DOM scanning, fill, visibility, OAuth SDK ceremony,
  extension transport envelopes, and Svelte orchestration.
- No CLI or mobile packages are introduced.
- Preflight ownership gates remain green.
- Delivery follows the normal PR path: format, push, GitHub Actions, squash
  merge, Workbench worklog and agent statistics.

## Constraints and exclusions

- Do not rewrite vault sync/provider orchestration that already delegates to
  WASM.
- Do not move Google Drive, iCloud, WebAuthn browser ceremonies, or Manifest
  wiring into core.
- Do not move QR/BarcodeDetector DOM capture; only portable string heuristics.
- File-size and Rust absence modeling rules remain in force.

## Initial plan

1. Move backup-code candidate extraction and auth field-role classification
   into `nook-core`; keep DOM adapters in TypeScript.
2. Replace `VaultItemType` / `SecretFormInput` TypeScript mirrors with generated
   Rust/WASM types at Svelte call sites.
3. Move OAuth authorized-origin policy and Simple/Sentinel vault host matching
   into `nook-core`.
4. Reduce outcome/workflow TypeScript types to transport envelopes over
   generated DTOs.
5. Record the durable backlog status in the repository exec-plan docs.

## Completion evidence

- Merged Nook PR containing the Rust modules, WASM exports, and thin TS adapters.
- Rust unit tests covering moved heuristics and policy.
- Green applicable PR checks and published Workbench worklog/statistics.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
