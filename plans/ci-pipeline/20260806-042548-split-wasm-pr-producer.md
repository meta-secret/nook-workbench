---
title: Split PR WASM producer and drop artifact polling
feature: ci-pipeline
issue: ""
started_at: 2026-08-06T04:25:48Z
agent: cursor
---

# Task plan

## Interpreted request

PR Verify currently starts beside the WASM producer and sleeps on the runner until the run-stable WASM package appears. That idle wait burns several minutes of hosted time. Replace the poll with real job edges: publish the built package from one producer job, finish Node tests in a dependent job, and start Verify only through `needs` plus `download-artifact`.

## Requirements

- Split the PR WASM lane into a build/upload job and a Node-test job.
- Verify must depend on those jobs through GitHub `needs` instead of REST polling.
- Deploy stays on the Verify runner because it consumes the sealed web image built there.
- Trusted exact-input WASM handoffs may skip Node tests with an explicit successful no-op job.
- Optional full e2e jobs must still consume a verified package.
- Update handoff promotion, preflight contracts, and cortex CI docs to match the new job graph.

## Constraints and exclusions

- Do not move Cloudflare preview deploy onto a separate runner in this change; that needs a dist or image handoff redesign.
- Do not change Main's serialized WASM lane beyond any shared naming docs if untouched.
- No product behavior changes outside CI wiring and contracts.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Rework `.github/workflows/pr.yml` job edges and remove both WASM wait loops.
3. Update PR validation handoff required job names.
4. Update hosted delivery preflight contracts and ci-pipeline docs.
5. Format, open the PR, validate on Actions, and merge when ready.

## Completion evidence

- PR workflow has no `attempt/900` WASM wait loops.
- Verify declares `needs` on the WASM build and Node-test jobs and downloads the artifact directly.
- Hosted PR validation is green for the exact head.
- Cortex CI pipeline text matches the new ownership.

## Safety review

- No raw prompts, transcripts, secrets, private data, raw logs, or local machine paths.
