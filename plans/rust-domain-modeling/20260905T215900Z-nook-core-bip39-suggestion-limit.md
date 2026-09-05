---
title: Type Nook Core BIP39 suggestion limits
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T21:59:00Z
agent: codex
gizmo_id: nook-core-bip39-suggestion-limit
---

# Nook Core BIP39 suggestion limits

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace the raw `usize` parameter on `suggest_bip39_words` with `Bip39WordSuggestionLimit`.
- Preserve every dynamic limit, including zero, and extract the primitive only for local iteration.
- Preserve the existing JavaScript `u32` ABI and its narrow FFI expectation.
- Reexport the domain, adapt exact Core/WASM consumers, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not migrate mnemonic word count or validation-count domains, change JavaScript behavior, or add validation.
- No Core activation, new suppressions, lint changes, manifests, lockfiles, generated output, web edits, CI, standalone documentation, or unrelated work.
- Hard limit: 30 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-bip39-suggestion-limit
- Estimated authored changed lines: 30
- Owning modules, packages, or layers: Nook Core BIP39 domain and facade, exact WASM adapter, and Development Core guidance.
- Ownership units:
1. Capability: Typed BIP39 suggestion limits; Gizmo ID: nook-core-bip39-suggestion-limit; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core accepts the dedicated domain, every usize value retains meaning, JavaScript remains u32, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `suggest_bip39_words` accepts `Bip39WordSuggestionLimit`; WASM continues to accept JavaScript-compatible u32.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Type BIP39 suggestion limits and the exact WASM call; Acceptance evidence: existing bounded and zero cases, unchanged FFI expectation, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-bip39-suggestion-limit; Gizmo name: Nook Core BIP39 suggestion limits; Predecessor Gizmo ID: None; Type BIP39 suggestion limits and the exact WASM call; Estimated authored changed lines: 30; Acceptance evidence: existing bounded and zero cases, unchanged FFI expectation, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the infallible limit domain and type the Core parameter.
2. Reexport it and adapt the exact Core fixtures and WASM call.
3. Verify zero/dynamic behavior, FFI expectation, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- BIP39 suggestions no longer expose a raw limit parameter through Nook Core.
- Every dynamic limit and the JavaScript u32 surface remain unchanged.
- Residual inventory becomes 78 declarations: 69 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
