---
title: "Add persistent URLs to vault application pages"
feature: unplanned
issue: issues/unplanned/persistent-vault-page-urls.md
started_at: 2026-08-04T21:07:05Z
agent: codex
---

# Task plan

## Interpreted request

Make the primary Simple and Sentinel vault pages addressable with durable URLs
so users can reload, bookmark, and use browser history without losing their
place. Prefer extending the existing Svelte application when it can provide a
complete routing contract; migrate frameworks only if that contract cannot be
implemented safely in the current architecture.

## Requirements

- Give every primary vault workspace a canonical, human-readable pathname.
- Apply an initial deep link after authentication and synchronize back/forward navigation.
- Preserve existing legal, diagnostics, enrollment, and extension-connect routes.
- Configure development, preview, and static deployment artifacts to serve the application shell for every supported route.
- Keep vault identifiers, secret identifiers, search terms, editor state, credentials, and other sensitive state out of URLs.
- Add route-unit coverage plus behavior-focused Playwright coverage and a reproducible UI demo.
- Deliver through a current-base pull request, exact-head hosted validation, review resolution, and squash merge.

## Constraints and exclusions

- Retain the existing Svelte 5, Vite, Rust/WASM, localization, and security boundaries.
- Do not add a router or framework dependency when the existing History API layer is sufficient.
- Do not make transient nested controls such as accordions, filters, pagination, or open editors addressable in this repair.
- Do not change vault/session authorization semantics or persist unlocked state across reloads.

## Initial plan

1. Inventory the current route parser, browser lifecycle, workspace navigation state, host fallback generation, and relevant tests.
2. Define one typed canonical workspace-route contract and integrate it with initial load, navigation actions, and popstate handling.
3. Extend static and development SPA fallbacks for all supported paths.
4. Add unit, Playwright, and UI-demo coverage for direct loads, selection, reload, and browser history.
5. Format, validate on GitHub-hosted workers, resolve feedback, and squash-merge the exact tested head.
6. Publish the linked completion worklog, issue result, and agent statistics.

## Completion evidence

- A merged Nook pull request with canonical route implementation and tests.
- Green exact-head Nook repository checks and a successful readiness audit.
- Demonstrated direct-route reload and browser back/forward behavior in Playwright coverage.
- Updated Workbench issue, linked worklog, and immutable agent statistics record.

## Safety review

This record contains an interpreted public-safe engineering plan only. It has
no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure details.

