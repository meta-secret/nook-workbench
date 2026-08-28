---
title: "Split generation lifecycle from admission evidence authority"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/admission-evidence-authority.md
started_at: 2026-08-28T11:09:00Z
agent: codex
---

# Task plan

## Interpreted request

Preserve the strict pull-request size and API boundaries after exact-head
review proved that complete generation-restart lifecycle no longer fits safely
inside the admission and evidence authority successor.

## Requirements

- The current admission/evidence successor owns one immutable generation:
  authenticated source-commit authority, bounded evidence, deterministic
  selection, leases, dispositions, proof retention, and blocked-closure
  reporting.
- Independent eligible tasks continue when another dependency closure is
  terminally blocked.
- Evidence ancestry is rejected before recursive expansion, serialization, or
  registry mutation when it exceeds the bounded contract.
- Lease recording atomically revalidates resource conflicts against current
  active leases and the submitted batch.
- The module-delivery barrel remains an explicit curated API.
- A dedicated dependency successor owns authenticated transactional generation
  restart, monotonic cross-generation attempts, and restart-specific tests.
- Provider integration follows generation lifecycle and owns private
  exact-attempt writer-frontier minting plus the public end-to-end advancement
  tests.

## Constraints and exclusions

- The current pull request remains below 3,000 authored lines and every file
  remains at or below 1,000 lines.
- Do not minify code, weaken validation, broaden exports, or move unfinished
  behavior behind an apparently usable public API.
- Do not activate provider Git integration or remove its runtime gate in the
  current pull request.
- No Cortex, Hive, storage, harness lifecycle, Docker, or infrastructure change
  is in scope.

## Change budget and PR sequence

- Estimated authored changed lines: 6,000
- Owning modules, packages, or layers: Loom module-delivery authority
- Ownership units:
1. Capability: Single-generation admission and evidence authority; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/authority.ts,agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/evidence.ts,agentic-ai/loom/src/module-delivery/index.ts,agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts,agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts,agentic-ai/loom/src/module-delivery/codec.ts,agentic-ai/loom/src/module-delivery/domain.ts,agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: One-generation admission, lease, disposition, evidence, and fail-closed frontier capabilities; Expertise acceptance evidence: Bounded evidence, authenticated source, stale-selection conflict rejection, independent-work continuation, and curated API tests pass; Capability acceptance evidence: Exact-head AI, Web, Security, local, hosted, readiness, and merge gates pass
2. Capability: Authenticated generation lifecycle; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/authority.ts,agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/index.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: Transactional restart with repository-authenticated source and monotonic attempts; Expertise acceptance evidence: Invalid restart cannot mutate the prior generation and exhausted attempts remain blocked; Capability acceptance evidence: Exact-head restart tests and team reviews pass before provider integration begins
3. Capability: Provider integration materialization; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts,agentic-ai/loom/src/module-delivery/integration-provenance.ts,agentic-ai/loom/src/module-delivery/worktree-test-support.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/integration.test.ts,agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts; Expertise forbidden paths: .cortex; Expertise consumer interfaces: Exact-attempt integrated writer-frontier capabilities and active provider flow; Expertise acceptance evidence: Public write-to-evidence-to-synthesis-to-consumer flow passes and all integration-pending skips are removed; Capability acceptance evidence: Integration gate removal, public end-to-end tests, and full Loom verification pass
4. Capability: Delivery join; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Every successor merges before preservation draft retirement
- Public or cross-module interfaces: Explicit single-generation admission/evidence API followed by explicit restart and provider integrations
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2,999
- Current PR slice and acceptance evidence: Single-generation admission/evidence authority; Acceptance evidence: authenticated source, bounded ancestry, conflict-safe lease recording, curated exports, exact-head gates
- PR slices and acceptance evidence:
1. Single-generation admission/evidence authority; Acceptance evidence: authenticated source, bounded ancestry, conflict-safe lease recording, curated exports, exact-head gates
2. Authenticated generation lifecycle; Acceptance evidence: Transactional restart and attempt-budget tests pass
3. Provider integration materialization; Acceptance evidence: Active end-to-end flow passes and preservation-only code is fully retired

## Initial plan

1. Publish this superseding split before removing restart lifecycle from the
   current pull request.
2. Finish and merge the bounded single-generation admission/evidence authority.
3. Reconstruct authenticated generation restart in its dedicated successor.
4. Reconstruct provider integration on the merged restart authority.
5. Prove no useful behavior remains unique to the preservation draft, then
   close it without merging.

## Completion evidence

- The current pull request is below repository ceilings with a narrow explicit
  API and no known admission/evidence finding.
- Generation restart is absent rather than partially implemented in the
  current public contract, then restored and proven in its dedicated successor.
- Provider integration is the only layer that can mint an authenticated writer
  frontier and it supplies the public end-to-end regression.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
