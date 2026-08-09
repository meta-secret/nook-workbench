---
title: Parallel PR UI demos with a trusted browser-image cache
feature: unplanned
issue: issues/unplanned/parallel-ui-demo-e2e-cache.md
started_at: 2026-08-09T06:28:18Z
agent: codex
---

# Parallel PR UI demos with a trusted browser-image cache

## Interpreted request

Shorten UI-changing pull-request validation by removing avoidable Chromium
image rebuilds and moving demo recording off the serial web-verification path.
Evaluate job consolidation using measured critical-path behavior, and retain
parallel jobs where combining them would increase wall-clock time.

## Requirements

- Publish the verified browser-capable web BuildKit graph from trusted Main.
- Let pull requests restore that graph without granting shared-cache writes.
- Run required headless UI demos in parallel with ordinary web verification.
- Preserve demo artifacts, pull-request linking, cache telemetry, and exact-head
  validation semantics.
- Add mechanical coverage for the cache publisher and job topology.
- Keep GitHub-hosted runners and the existing Zot trust boundary.

## Constraints and exclusions

- Do not combine independent long-running gates when that serializes the
  critical path or weakens failure isolation.
- Do not introduce GitHub Actions cache storage, persistent runners, or empty
  Bake cache overrides.
- Do not change product UI behavior or browser test coverage.

## Initial plan

1. Measure the reported workflow and identify the first missing cache scope.
2. Add one trusted Main publisher for the verified e2e image graph.
3. Extract PR UI demo recording into a sibling job that consumes the WASM
   handoff in parallel with web verification.
4. Add preflight assertions and update the CI/cache documentation.
5. Deliver through focused hosted proof and complete exact-head PR validation.

## Completion evidence

- Preflight proves Main owns the stable e2e cache publisher and PR demo work is
  not nested inside web verification.
- Hosted validation passes at the exact pull-request head.
- Workflow timing shows the demo job overlaps web verification.
- A trusted Main run publishes the stable browser-image scope for later pulls.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
