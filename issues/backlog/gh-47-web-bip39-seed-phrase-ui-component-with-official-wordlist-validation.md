---
title: "Web: BIP39 seed phrase UI component with official wordlist validation"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T06:20:24Z
updated_at: 2026-06-26T03:01:28Z
source_issues: ["https://github.com/meta-secret/nook/issues/47"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Web: BIP39 seed phrase UI component with official wordlist validation

## Imported context

This record was imported from [Nook GitHub issue #47](https://github.com/meta-secret/nook/issues/47)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Replace the current plain-text seed phrase field with a proper **BIP39-aware UI component** that follows standard mnemonic layout (12 or 24 words) and validates each word against the **official BIP39 wordlist fetched at runtime**.

## Current behavior

Seed phrases are treated as a single free-form string:

- **Add / edit:** `nook-web/src/lib/components/AddSecretForm.svelte` — a `<textarea>` with placeholder “Enter 12 or 24 words”, no per-word validation.
- **View:** `nook-web/src/lib/components/SecretDetailRow.svelte` — masked/revealed as one monolithic string.
- **Core:** `SeedPhraseSecret` (`nook-core/src/secret_types.rs`) stores `name` + `seed` string; `validate_secret_data` only checks non-empty.

The product README describes this item type as “BIP39 seed phrase”, but the UI does not implement BIP39 standards.

## Requirements

### 1. Standard BIP39 layout (UI)

- Support **12-word** and **24-word** mnemonics (user-selectable or auto-detected by word count).
- Render words in the **standard numbered grid** used by wallets (e.g. 1–12 or 1–24, each word in its own cell/column — typical 3×4 layout for 12 words, 4×6 for 24).
- Use the same grid layout for **entry**, **edit**, and **reveal** views (read-only when not editing).

### 2. Official wordlist only — fetched from the internet

**Strict rule:** the app must **not** ship, hardcode, or vendor its own copy of the BIP39 wordlist. Validation must use the **official** list loaded at runtime.

- Source: the canonical English wordlist from [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) (2048 words).
- Fetch over HTTPS at runtime (e.g. `raw.githubusercontent.com/bitcoin/bips/master/bip-0039/english.txt` or equivalent official URL).
- Cache in memory (and optionally `sessionStorage` / IndexedDB with version/hash) to avoid refetching on every keystroke; cache must be refreshable and must not become a permanent fork of the list.
- **Prohibited:** embedding the 2048 words in repo source, WASM binary, locale JSON, or any static asset.

### 3. Per-word validation

- As the user types or pastes, **validate each word** against the loaded official wordlist.
- Invalid / unknown words: clear inline error state on that cell (and block save until all words are valid).
- Optional but recommended: autocomplete / typeahead filtered to official words (still sourced from fetched list, not a local copy).
- Optional follow-up (separate from MVP if needed): full BIP39 checksum validation in `nook-core` before save.

### 4. Paste & UX

- Pasting a space-separated mnemonic should populate the grid.
- Normalize input: trim, lowercase, collapse whitespace.
- On save, serialize to the existing `SeedPhraseSecret.seed` string format (space-separated words) so on-disk schema stays unchanged unless we deliberately migrate.

## Suggested implementation

| Layer | Work |
|-------|------|
| **New component** | `SeedPhraseGrid.svelte` (or similar) — word cells, 12/24 toggle, validation UI |
| **Wordlist loader** | `nook-web/src/lib/bip39-wordlist.ts` — fetch, parse, cache official list; expose `isValidWord(word)` |
| **Forms** | Replace textarea in `AddSecretForm.svelte` |
| **Detail view** | Replace single-line reveal in `SecretDetailRow.svelte` with grid when revealed |
| **Core (optional)** | `nook-core` validation helper for mnemonic checksum / word count — keeps crypto rules out of UI-only checks |

## Acceptance criteria

- [ ] 12- and 24-word grid layouts match common BIP39 wallet presentation (numbered cells).
- [ ] Wordlist is loaded from the official BIP-0039 `english.txt` URL at runtime — **no wordlist bytes in the repo**.
- [ ] Each word is validated against the fetched list; invalid words are highlighted and save is blocked.
- [ ] Paste of a valid mnemonic fills the grid correctly.
- [ ] Existing vault items (plain string `seed`) still load and display in the grid.
- [ ] E2E test covers add + reveal with mocked wordlist fetch (or fixture URL) so CI does not depend on live GitHub raw URLs.

## References

- [BIP-0039 specification](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [Official English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
- Current UI: `nook-web/src/lib/components/AddSecretForm.svelte`, `SecretDetailRow.svelte`

## Historical comments

No comments.
