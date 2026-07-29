---
title: Strengthen web quality and security checks
feature: unplanned
issue:
started_at: 2026-07-29T08:02:25Z
agent: codex
---

# Strengthen web quality and security checks

## Interpreted request

Audit the TypeScript and Svelte validation stack, identify important gaps that
well-supported ecosystem tools can close, and make the highest-value checks
part of Nook's ordinary pull-request validation.

## Requirements

- Inventory existing type, lint, test, unused-code, duplication, dependency,
  and security gates before adding dependencies.
- Prefer mature, widely adopted tools that find distinct classes of defects.
- Add practical property-based and security-focused coverage where the current
  web checks lack it.
- Integrate new checks into the existing sealed and GitHub-hosted workflow.
- Keep findings actionable and make failures block pull-request readiness.
- Add mechanical coverage proving the checks remain wired into the gate.

## Constraints and exclusions

- Preserve Nook's Rust/WASM ownership of portable domain and security policy.
- Do not duplicate checks whose existing tools already provide equivalent
  coverage or add fashionable dependencies without a concrete role.
- Do not weaken existing thresholds, exclusions, or validation gates.
- Heavy validation runs only on repository GitHub-hosted workers.

## Initial plan

1. Map the web packages, current scripts, sealed images, task graph, and CI gate.
2. Compare mature candidate tools against uncovered defect classes and select
   the smallest high-value set.
3. Add pinned dependencies, configuration, representative tests, and task/CI
   integration.
4. Add preflight assertions for durable wiring and document the expanded gate.
5. Format, publish a focused commit and pull request, validate the exact head,
   address failures or feedback, and squash-merge.

## Completion evidence

- The normal web or pull-request check path invokes the selected analyzers and
  tests.
- Representative property/security tests and mechanical wiring assertions pass.
- Exact-head repository-owned pull-request validation is green.
- The implementation is squash-merged and recorded in Workbench.

## Safety review

This plan contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure detail.
