---
title: Narrow web Bake retries and fix isolation WASM race
feature: agent-workflow
issue: none
started_at: 2026-08-05T16:10:00Z
agent: cursor
---

# Task plan

## Interpreted request

Stop Verify-and-preview from redoing the full web Bake after non-transient
failures, and fix the companion-WASM race that made verify:isolation flake.

## Requirements

- docker:ci:web:build and docker:ci:web:e2e:build retry only known BuildKit
  frontend/Dockerfile-load flakes, not application build or isolation errors.
- verify-app-isolation awaits companion WASM readiness before createManifest.
- Update preflight contracts that already require flake-only retries.

## Constraints and exclusions

- Keep one retry for the known BuildKit frontend flake.
- Do not change product preview surfaces or remove intentional multi-app builds.

## Initial plan

1. Gate Bake retries on flake diagnostics.
2. Await companionWasmReady in verify-app-isolation.
3. Format, open PR, validate, merge.

## Completion evidence

- Contracts encode flake-only retry.
- Exact-head Verify and preview succeeds without a full application-error retry.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
