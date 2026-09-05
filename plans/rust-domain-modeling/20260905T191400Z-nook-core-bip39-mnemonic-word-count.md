---
title: Type Nook Core inferred BIP39 word counts
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T19:14:00Z
agent: codex
gizmo_id: nook-core-bip39-mnemonic-word-count
---

# Nook Core inferred BIP39 word counts

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace the raw numeric return nested in `infer_bip39_mnemonic_length` with `Bip39MnemonicWordCount`.
- Restrict public construction to the supported 12-word and 24-word constants.
- Preserve unsupported-input `None` behavior and the existing JavaScript enum ABI.
- Reexport the domain, adapt the exact WASM consumer and existing coverage, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not migrate the separate suggestion-limit or validation-count domains, add serialization, or change JavaScript behavior.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 30 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-bip39-mnemonic-word-count
- Estimated authored changed lines: 30
- Owning modules, packages, or layers: Nook Core BIP39 domain and facade, exact WASM enum adapter, and Development Core guidance.
- Ownership units:
1. Capability: Typed inferred BIP39 word counts; Gizmo ID: nook-core-bip39-mnemonic-word-count; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core returns the closed domain, unsupported input remains absent, the JavaScript enum remains unchanged, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `infer_bip39_mnemonic_length` returns `Option<Bip39MnemonicWordCount>` while WASM continues to return `NookBip39MnemonicLength`.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Type inferred BIP39 word counts and the exact WASM adapter; Acceptance evidence: existing 12-word, 24-word, and unsupported cases, unchanged enum ABI, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-bip39-mnemonic-word-count; Gizmo name: Nook Core inferred BIP39 word counts; Predecessor Gizmo ID: None; Type inferred BIP39 word counts and the exact WASM adapter; Estimated authored changed lines: 30; Acceptance evidence: existing 12-word, 24-word, and unsupported cases, unchanged enum ABI, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the closed domain and type the nested Core return.
2. Reexport it and adapt the exact WASM enum mapping.
3. Verify supported and unsupported behavior, residual inventory, scope, sizes, and budget.
4. Incorporate current Main, publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- BIP39 length inference no longer exposes a raw numeric through Nook Core.
- Supported 12/24 inference and the JavaScript enum surface remain unchanged; unsupported input remains absent.
- Residual inventory becomes 82 declarations: 73 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
