---
title: "Expose an OpenAPI-described browser REST facade for Nook"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T10:32:49Z
updated_at: 2026-07-06T10:39:59Z
source_issues: ["https://github.com/meta-secret/nook/issues/192"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Expose an OpenAPI-described browser REST facade for Nook

## Imported context

This record was imported from [Nook GitHub issue #192](https://github.com/meta-secret/nook/issues/192)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook is currently a static Svelte/WASM web app, but that does not prevent us from exposing an API-shaped surface for agents and automation. The existing `/app-logs` route proves the pattern: a Svelte route can hydrate in the browser, read browser-local/WASM state, and render a stable machine-readable JSON envelope that Playwright and agents consume as if it were an endpoint.

This issue tracks implementing a broader OpenAPI-described browser REST facade for Nook: API routes that reflect the authenticated page/session state and expose safe, typed Nook operations through stable JSON contracts.

## Important Boundary

This is not the same thing as a traditional server REST API unless Nook adds a Worker/serverless/server backend. On static hosting, a Svelte route can render JSON after browser hydration, but it cannot fully behave like a server endpoint for arbitrary HTTP clients, request bodies, methods, status codes, or `application/json` response headers.

The first implementation should therefore be explicit about the contract:

- Browser-hydrated, same-origin, page-backed API routes are acceptable, following the `/app-logs` model.
- OpenAPI should document what automation can consume and which routes require an unlocked/authenticated vault session.
- Business logic must remain in `nook-core` / `nook-wasm`; Svelte route controllers should only parse requests, call typed APIs, and shape responses.
- If we need fetch-compatible POST/PUT/DELETE semantics from outside an already-running browser page, that should become a separate Worker/serverless/server issue.

## Current Reference Point

- `nook-app/nook-web/src/lib/app-logs-api.ts` defines a typed response envelope and query parsing for `/app-logs`.
- `nook-app/nook-web/src/lib/components/AppLogsApiPage.svelte` renders the JSON payload into a machine-readable page.
- `nook-app/nook-web/e2e/helpers.ts` consumes `/app-logs` through Playwright by navigating to the route and parsing the rendered JSON.
- `.cortex/references/logging.md` documents `/app-logs` as the canonical machine-readable JSON export for agents and log pipelines.

## Proposed Scope

Design and implement a versioned browser API surface, for example under `/api/v1/...`, with an OpenAPI document exposed from the app.

Initial candidate routes:

- `GET /api/v1/openapi.json` or equivalent static/generated OpenAPI document.
- `GET /api/v1/session` for lock/auth/session metadata without secret material.
- `GET /api/v1/vault` for vault metadata, provider state, sync status, and conflict state.
- `GET /api/v1/secrets` for the current unlocked vault projection, with a conservative default that excludes secret values unless the design explicitly approves value export.
- `GET /api/v1/logs` as a versioned successor or alias for `/app-logs`, if that helps make the API surface coherent.

Write routes should be designed separately and only added once the request model is clear for a static SPA environment. If implemented in-browser, they should call existing `VaultState`/WASM operations and be covered by e2e tests that prove browser-session behavior.

## Acceptance Criteria

- An OpenAPI document is available from the app and describes the supported browser API routes, schemas, query parameters, and auth/session requirements.
- API responses use stable versioned envelopes and schema identifiers, similar to `nook.app-logs.v1`.
- Routes work on the same deployment model as the current web app, including GitHub Pages/Cloudflare preview base paths.
- Locked vs unlocked behavior is explicit and tested: locked sessions must not leak secret values or protected provider credentials.
- Svelte route/controller code remains thin; data shaping and domain behavior stay in typed core/WASM APIs where appropriate.
- Playwright coverage verifies the route behavior the way `/app-logs` is verified today.
- `.cortex` docs are updated to explain the API boundary: browser-hydrated API facade vs true server REST API.

## Non-Goals

- Do not introduce a separate backend just to satisfy this issue unless the design explicitly decides that true HTTP REST semantics are required.
- Do not move vault format logic, crypto, validation, search, or password generation into TypeScript/Svelte controllers.
- Do not expose plaintext secret values by default just because an authenticated page could technically read them.


## Historical comments

No comments.
