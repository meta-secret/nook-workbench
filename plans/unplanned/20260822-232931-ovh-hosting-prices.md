---
title: Collect and analyze authoritative OVHcloud hosting prices
feature: unplanned
issue: direct-request
started_at: 2026-08-22T23:29:31Z
agent: codex
---

# Task plan

## Interpreted request

Create a reproducible hosting research tool that obtains real OVHcloud US bare-metal order-catalogue prices and current availability, saves an auditable normalized JSONL snapshot, and evaluates configurations for a mixed k0s cluster that must also sustain bursty ARC build runners. Keep the implementation provider-oriented so future hosting collectors and shared analysis can live in the same infrastructure module.

## Requirements

- Use OVHcloud order-catalogue and availability data rather than promotional card prices.
- Preserve base, mandatory/default add-on, optional add-on, setup, duration, currency, region, and availability evidence where the source exposes it.
- Store the collector, schema, snapshot, tests, and analysis under `infra/hosting/`.
- Implement automation with Bun and TypeScript only.
- Produce transparent capacity and value metrics without presenting a heuristic as a benchmark.
- Cover parsing, price composition, normalization, and ranking behavior with focused tests.
- Deliver through a reviewed, exact-head validated, squash-merged pull request.

## Constraints and exclusions

- No credential or account data may be persisted or logged.
- Public catalogue access is preferred; configured OVH credentials may be used only if an endpoint requires them.
- The snapshot represents its collection timestamp and must not be described as permanently current.
- Performance analysis uses disclosed hardware and capacity data; it does not invent benchmark results absent a cited benchmark source.
- Provider account mutations and server purchases are excluded.

## Change budget and PR sequence

- Estimated authored changed lines: 1,500
- Owning modules, packages, or layers: `infra/hosting` research automation and generated hosting evidence.
- Public or cross-module interfaces: provider-neutral JSONL record schema and Bun CLI arguments.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,500
- Current PR slice and acceptance evidence: OVH collector, checked-in JSONL snapshot, generated analysis, usage documentation, and focused deterministic tests; Acceptance evidence: the collector reruns from authoritative endpoints and focused tests prove normalization and price arithmetic.
- PR slices and acceptance evidence:
  1. OVH collector, checked-in JSONL snapshot, generated analysis, usage documentation, and focused deterministic tests; Acceptance evidence: the collector reruns from authoritative endpoints and focused tests prove normalization and price arithmetic.

## Initial plan

1. Inspect OVHcloud catalogue and availability contracts and existing infrastructure conventions.
2. Implement typed transport decoding, normalized records, price composition, JSONL output, and tests in `infra/hosting/`.
3. Collect the current US snapshot and generate a methodology-backed price/performance report for the target workload.
4. Format, review, validate on GitHub Actions, address findings, and merge.

## Completion evidence

- A checked-in JSONL snapshot with source URLs and collection timestamp.
- A checked-in report that explains actual totals, configuration assumptions, capacity constraints, and recommendations.
- Focused tests and repository validation pass on the exact pull-request head.
- The pull request is squash-merged and the completion records link the delivered artifacts.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
