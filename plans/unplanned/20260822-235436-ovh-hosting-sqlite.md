---
title: Collect and analyze authoritative OVHcloud hosting prices in SQLite
feature: unplanned
issue: direct-request
started_at: 2026-08-22T23:54:36Z
agent: codex
---

# Task plan

## Interpreted request

Create a reusable hosting research facility that retrieves OVHcloud US bare-metal order prices and inventory, persists all normalized records in a locally generated searchable embedded database, and checks in only the reusable code, tests, schema behavior, and compact derived decision report. Keep the module provider-oriented for later cross-hoster comparisons.

## Requirements

- Source monetary data from OVHcloud order catalogues and current datacenter availability rather than promotional cards.
- Preserve all billing modes, plan and add-on charges, one-time fees, mandatory choices, hardware data, region, and availability in local SQLite.
- Index common search fields and provide a Bun query command whose output remains streamable JSONL.
- Keep generated raw provider data out of Git while retaining the compact derived analysis.
- Implement with Bun and TypeScript and provide focused normalization, composition, database refresh, and report tests.
- Deliver through reviewed exact-head validation and squash merge.

## Constraints and exclusions

- Credentials, account data, and raw provider snapshots must not be committed or logged.
- Public catalogue access is preferred and no account mutation or purchase is authorized.
- Price and inventory findings are timestamped and require refresh before purchase.
- Capacity metrics must disclose their assumptions and must not masquerade as application benchmarks.

## Change budget and PR sequence

- Estimated authored changed lines: 1,600
- Owning modules, packages, or layers: `infra/hosting` provider research automation, local storage adapter, and generated decision evidence.
- Public or cross-module interfaces: provider-neutral normalized record model, SQLite `snapshot_records` table, and Bun/Task collection and search commands.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,600
- Current PR slice and acceptance evidence: OVH collector, ignored searchable SQLite snapshot, compact analysis, usage documentation, and deterministic tests; Acceptance evidence: all catalogue price rows persist locally, the query returns composed configurations, raw data remains ignored, and exact-head checks pass.
- PR slices and acceptance evidence:
  1. OVH collector, ignored searchable SQLite snapshot, compact analysis, usage documentation, and deterministic tests; Acceptance evidence: all catalogue price rows persist locally, the query returns composed configurations, raw data remains ignored, and exact-head checks pass.

## Initial plan

1. Model both OVH US dedicated-server catalogues and availability data.
2. Normalize every billing row and orderable North American configuration into an indexed local SQLite database.
3. Generate a compact Vint Hill price/performance report using the current ARC resource envelope.
4. Verify raw data exclusion, test the collector/search path, and complete PR validation and merge.

## Completion evidence

- The collector reports complete plan/add-on and configuration row counts and writes an ignored SQLite file.
- A query for a named server returns exact composed checkout totals as JSONL.
- The checked-in report compares the relevant options and documents methodology and limitations.
- The exact pull-request head passes repository validation and is squash-merged.

## Safety review

This plan contains no copied request, conversation, secret, private data, operational output, local path, or unnecessary infrastructure detail.
