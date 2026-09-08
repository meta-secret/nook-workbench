---
title: Split failure evidence from terminal summaries
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-failure-summary.md
started_at: 2026-09-08T15:42:00Z
agent: codex
gizmo_id: proactive-pr-steward-failure-summary
supersedes: plans/agent-orchestration/20260908T134500Z-pr-steward-observation-and-failure.md
---

# Split failure evidence from terminal summaries

## Interpreted request

Deliver the remaining GitHub failure capability as two serial PRs. The current PR owns private fixed readers and fail-closed evidence association. The final PR owns source-valid terminal summaries and observer emission.

## Requirements

- Fix all four Security findings without compressing tests into the exhausted combined budget.
- Merge and close the reader/evidence slice before creating the terminal-summary branch from fresh main.
- Keep bodies, job logs, raw payloads, credentials, and command causes out of outward records.
- PR Steward gathers GitHub evidence and gives Gizmo only bounded specialist-routing information.

## Constraints and exclusions

- No stacked branches, unmerged predecessor bases, extra worktrees, public arbitrary command runner, compatibility reader, fallback, persistence, retry, replay, scheduler, or automatic repair.
- The first slice cannot emit terminal summaries. The second cannot add new command capabilities outside the merged reader bundle.
- Each slice remains below 2,000 additions without test or ownership compression.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward-failure-summary
- Estimated authored changed lines: 2050
- Owning modules, packages, or layers: Loom fixed failure evidence readers; source-specific terminal summary codec and observer; AI-owned Cortex lifecycle contracts
- Ownership units:
  1. Capability: Bounded failure evidence readers and association; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Private fixed runner, owned reader bundle, strict association/status items, pagination, URL, identity, and bound tests
  2. Capability: Exact terminal failure summaries; Gizmo ID: proactive-pr-steward-terminal-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Source-valid terminal codec, exact triggering object, bounded summary, sanitized blocker, observer, and live canary tests
- Public or cross-module interfaces: owned fixed reader bundle in the current slice; final closed terminal-summary record version in the successor slice
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 850
- Current PR slice and acceptance evidence: Deliver private fixed failure readers with strict bounded association and status evidence; Acceptance evidence: focused fixed invocation, association, malformed item, pagination, URL, identity, Security, hosted exact-head, readiness, merge, and remote verification evidence
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Bounded PR Steward failure evidence; Predecessor Gizmo ID: None; Deliver private fixed failure readers with strict bounded association and status evidence; Estimated authored changed lines: 850; Acceptance evidence: focused fixed invocation, association, malformed item, pagination, URL, identity, Security, hosted exact-head, readiness, merge, and remote verification evidence
  2. Gizmo ID: proactive-pr-steward-terminal-summary; Gizmo name: Exact PR Steward terminal failure summaries; Predecessor Gizmo ID: proactive-pr-steward-failure-summary; Deliver source-valid exact terminal summaries and bounded observer output; Estimated authored changed lines: 1200; Acceptance evidence: focused source, terminal-state, mismatch, blocker, summary, observer, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence

## Initial plan

1. Reconstruct the current branch from fresh main with only private fixed readers, strict association/status items, bounded pagination, and owned reader tests.
2. Resolve review, validate, merge, verify, and close the evidence issue.
3. Create the terminal-summary branch from merged main and selectively port the preserved codec/observer draft.
4. Enforce source-specific terminal semantics, prove live bounded output, merge, and complete final Workbench closeout.

## Completion evidence

- The reader slice stays at or below 850 additions and the summary slice stays at or below 1,200.
- The reader predecessor is merged, remotely verified, and closed before the summary branch exists.
- Gizmo never invokes GitHub failure readers directly.

## Safety review

- This record contains only bounded planning metadata and public repository references.
