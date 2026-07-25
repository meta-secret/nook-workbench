---
title: "Refactor: expose typed vault secrets from WASM instead of duplicating structs in TypeScript"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-24T09:09:11Z
updated_at: 2026-06-28T22:02:02Z
source_issues: ["https://github.com/meta-secret/nook/issues/25"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Refactor: expose typed vault secrets from WASM instead of duplicating structs in TypeScript

## Imported context

This record was imported from [Nook GitHub issue #25](https://github.com/meta-secret/nook/issues/25)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook's architecture says vault domain logic lives in `nook-core` and crosses the JS boundary through `nook-wasm`. In practice, the web layer maintains a **parallel type system** in TypeScript — duplicating every secret shape, parsing YAML client-side, and re-implementing serialization. Each new vault item type (e.g. secure notes) requires coordinated changes in Rust **and** TS with copy-pasted struct fields.

This issue tracks refactoring the WASM bridge so the UI consumes **typed Rust-backed objects**, not hand-maintained TS mirrors.

## Problem

### What Rust already owns

`nook-core/src/secret_types.rs` is the source of truth:

- `SecretType` enum (`login`, `api-key`, `seed-phrase`, `secure-note`, …)
- Typed payloads: `LoginSecret`, `ApiKeySecret`, `SeedPhraseSecret`, `SecureNoteSecret`, …
- `SecretValue` enum + `from_yaml` / `to_yaml`
- `SecretRecord { id, secret_type, data: SecretValue }`

Validation on insert (`SecretValue::from_yaml`, `validate_secret_data`, etc.) already runs in Rust when `add_secret` is called.

### What the WASM bridge exposes today

`nook-wasm` only exports an untyped bag:

```rust
#[wasm_bindgen]
pub struct NookSecretRecord {
    id: String,
    secret_type: String,  // string tag
    data: String,         // YAML blob — opaque to JS
}
```

`add_secret(id, secret_type, data: string)` accepts a **YAML string built in TypeScript**.

### What the web layer duplicates

`nook-web/src/lib/nook.ts` re-implements the entire schema:

| TS artifact | Duplicates |
|-------------|------------|
| `VaultItemType`, `LoginVaultItem`, `ApiKeyVaultItem`, … | `SecretType` + payload structs |
| `createVaultItemRecord()` | `SecretValue::to_yaml` + `generate_id` |
| `parseVaultItem()` | `SecretValue::from_yaml` + field coercion |
| `mapWasmRecords()` | Strips `NookSecretRecord` wasm objects into plain POJOs |
| `generateId()` | `NookVaultManager.generate_id()` (already in WASM) |

Svelte components (`SecretVault`, `SecretDetailRow`, `AddSecretForm`) depend on the TS union types and `parseVaultItem()` for discrimination (`item.type === 'login'`).

### Why this hurts (secure notes as example)

Adding secure notes required touching:

1. `nook-core` — `SecretType::SecureNote`, `SecureNoteSecret`
2. `nook.ts` — new union member, `parseVaultItem` arm, `vaultItemTitle` / `vaultItemSecret` arms
3. `nook.test.ts` — round-trip test in TS (re-testing Rust behavior)
4. UI components — form + detail row

Every future item type repeats this boilerplate and drifts risk is high (field renamed in Rust, forgotten in TS).

This contradicts project rules:

- `.cortex/rules.md` §1: complex business logic and validation in `nook-core`
- `.cortex/rules.md` §3: Svelte must not contain vault serialization logic
- `.cortex/design-docs/core-beliefs.md` §3: parse and validate at the system boundary — **once**

## Proposed direction

Parse **once** at the Rust/WASM boundary and expose typed values to JS. The UI becomes a thin view over wasm objects.

### Option A — `#[wasm_bindgen]` typed structs (preferred for explicit API)

Export per-type wasm classes with getters (camelCase JS names):

- `NookLoginSecret`, `NookApiKeySecret`, `NookSecureNoteSecret`, …
- `NookVaultItem` wrapper with `type()` + typed accessors, or a tagged union pattern wasm-bindgen supports

`records_to_array` in `nook-wasm/src/conversion.rs` would construct typed objects from `nook_core::SecretRecord` instead of serializing back to YAML for the return trip.

### Option B — `serde_wasm_bindgen` at the boundary

Serialize `SecretRecord` / `SecretValue` to plain JS objects with serde field names (`camelCase`). Simpler to implement; TS types could be generated or hand-written once against the serde schema.

### Option C — Typed `add_*` methods

Replace `add_secret(id, type, yaml)` with type-specific WASM methods (e.g. `add_login`, `add_secure_note`) that accept individual fields. Most explicit; more wasm surface area per type.

**Recommendation:** Start with **Option A or B** for reads (`get_records`, `add_secret` return value, `filter_secrets`). Optionally add typed constructors for writes in a follow-up.

## Scope of work

### `nook-wasm`

- [ ] Export typed secret structs (or serialized `SecretValue`) to JS
- [ ] Change `records_to_array` / `NookSecretRecord` to carry typed payload, not YAML `data` string
- [ ] Update `add_secret` input path: accept typed payload or validate-only YAML without TS re-parse on output
- [ ] Re-export `generate_id` as the sole ID generator for new items (remove TS `generateId` duplicate where possible)

### `nook-web`

- [ ] Delete or shrink `nook.ts` vault types: remove `parseVaultItem`, `createVaultItemRecord`, duplicate `VaultItem*` unions
- [ ] Update `vault.svelte.ts` to hold wasm-backed records (or thin wrappers with stable references for Svelte reactivity)
- [ ] Update `SecretVault`, `SecretDetailRow`, `AddSecretForm` to read fields from wasm getters / typed objects
- [ ] Remove `yaml` dependency from vault item path if no longer needed in TS (may still be needed elsewhere)
- [ ] Collapse `nook.test.ts` vault round-trip tests — behavior belongs in `nook-core` tests only

### Docs / process

- [ ] Update `.cortex/references/rust-wasm.md` with the canonical pattern for adding a new secret type (Rust only + UI form, no TS schema)
- [ ] Add a short checklist to `.cortex/workflows/monorepo.md` for new vault item types

## Acceptance criteria

- [ ] Adding a new `SecretType` in `nook-core` does **not** require new TS struct definitions or `parseVaultItem` match arms
- [ ] No YAML parse/stringify of secret payloads in `nook-web/src/lib/nook.ts` (or equivalent wrapper)
- [ ] `cargo test -p nook-core` remains the authority for payload round-trips
- [ ] Existing Playwright e2e vault flows pass (`task web:test:e2e:local`)
- [ ] Svelte components can still discriminate item type for rendering (via wasm `type` tag or typed getters)

## Non-goals (this issue)

- Moving markdown rendering for secure notes into Rust
- Changing on-disk YAML layout or encryption
- Full removal of all TS types (thin view-model interfaces for Svelte ergonomics are fine if they derive from wasm, not duplicate schema)

## References

- `nook-core/src/secret_types.rs` — canonical schema
- `nook-wasm/src/lib.rs` — current `NookSecretRecord` (untyped)
- `nook-wasm/src/conversion.rs` — `records_to_array` serializes to YAML today
- `nook-web/src/lib/nook.ts` — duplicated TS layer
- `.cortex/rules.md` §§1, 3, 4
- `.cortex/design-docs/core-beliefs.md` §3 (parse at boundary)

## Motivation quote

> "That's whole point, to use objects from rust and not to boilerplate/copy paste the same structs"

Secure notes (`feat/secure-notes`) surfaced this debt explicitly: Rust + TS + tests + UI for one new type that should have been Rust + UI only.

## Historical comments

No comments.
