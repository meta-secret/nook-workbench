---
title: Type Nook Core BIP39 expected word counts
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T22:33:00Z
agent: codex
gizmo_id: nook-core-bip39-expected-word-count
---

# Nook Core BIP39 expected word counts

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace the raw `usize` parameter on `is_bip39_word_sequence_valid` with `Bip39WordSequenceExpectedCount`.
- Preserve every caller-selected count and extract the primitive only for the local length comparison.
- Preserve the existing JavaScript `u32` ABI and its narrow FFI expectation.
- Reexport the domain, adapt exact Core/WASM consumers, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not reuse the validated 12/24 mnemonic-length type, change JavaScript behavior, or add validation.
- No Core activation, new suppressions, lint changes, manifests, lockfiles, generated output, web edits, CI, standalone documentation, or unrelated work.
- Hard limit: 30 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-bip39-expected-word-count
- Estimated authored changed lines: 30
- Owning modules, packages, or layers: Nook Core BIP39 domain and facade, exact WASM adapter, and Development Core guidance.
- Ownership units:
1. Capability: Typed BIP39 expected word counts; Gizmo ID: nook-core-bip39-expected-word-count; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core accepts the dedicated domain, every usize value retains meaning, JavaScript remains u32, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `is_bip39_word_sequence_valid` accepts `Bip39WordSequenceExpectedCount`; WASM continues to accept JavaScript-compatible u32.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Type BIP39 expected word counts and the exact WASM call; Acceptance evidence: existing exact-count, wrong-count, and unknown-word cases, unchanged FFI expectation, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-bip39-expected-word-count; Gizmo name: Nook Core BIP39 expected word counts; Predecessor Gizmo ID: None; Type BIP39 expected word counts and the exact WASM call; Estimated authored changed lines: 30; Acceptance evidence: existing exact-count, wrong-count, and unknown-word cases, unchanged FFI expectation, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the infallible expected-count domain and type the Core parameter.
2. Reexport it and adapt the exact Core fixtures and WASM call.
3. Verify preserved arbitrary-count behavior, FFI expectation, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- BIP39 word-sequence validation no longer exposes a raw expected-count parameter through Nook Core.
- Every caller-selected count and the JavaScript u32 surface remain unchanged.
- Residual inventory becomes 77 declarations: 68 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
