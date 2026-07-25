---
title: "Atomic replace_secret for vault item corrections (no in-place edit)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-24T09:43:25Z
updated_at: 2026-06-25T05:08:48Z
source_issues: ["https://github.com/meta-secret/nook/issues/26"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Atomic replace_secret for vault item corrections (no in-place edit)

## Imported context

This record was imported from [Nook GitHub issue #26](https://github.com/meta-secret/nook/issues/26)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Vault items (login, API key, seed phrase, secure note) are **immutable in the UI**: add, reveal, copy, delete only. There is no edit-in-place form and no `update_secret` WASM export today.

To fix a mistake, users must **add a new item and delete the old one**. That is the intended correction flow, but the two steps are separate saves — if delete fails after add succeeds, the vault can temporarily hold duplicates.

## Proposal

Add **`replace_secret(old_id, new_id, secret_type, data)`** (name TBD) in `nook-wasm` / `nook-core` that:

1. Validates the new payload (same rules as `add_secret`).
2. Inserts the replacement record (new random id).
3. Removes `old_id` from session, armored cache, and type map.
4. Calls **`save_current_db` once** so storage is never left in a half-updated state.

No inline edit UI is required for v1. A future **Revise** action could pre-fill the add form from an existing row and call this API on save.

## Out of scope

- In-place edit UI for vault detail rows
- Changing item id in place (replacement should use a **new** id)

## Context

- Documented in `.cortex/product-specs/password-manager.md` (§B) and `.cortex/product-specs/secure-notes.md` (Corrections)
- Tracked in `.cortex/exec-plans/tech-debt-tracker.md`
- Related: secure notes on `feat/secure-notes` — preview is add-form only; saved notes are read-only markdown render

## Acceptance criteria

- [ ] `replace_secret` exported from WASM with `Result<_, JsError>`
- [ ] Single persistence write per replace
- [ ] Core unit test: replace updates JSONL + armored cache; old id gone, new id present
- [ ] E2E or integration test: add → replace → old id absent, new content visible

## Historical comments

No comments.
