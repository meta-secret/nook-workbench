---
title: Add sealed executable skill runtime
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/immutable-skill-registry.md
---

# Add sealed executable skill runtime

## Context

Approved immutable closure needs a bounded executor before any capability can be
activated in production workflows.

## Outcome

The generic runtime executes only registry-approved closures with deterministic
input, bounded output, cancellation, containment, and teardown receipts.

## Scope

- Add deterministic execution requests and verified receipts.
- Enforce containment, capacity, output, cancellation, and teardown bounds.
- Preserve one delivery owner and static authority.
- Exclude Cortex article registration and workflow activation.

## Acceptance criteria

- [ ] Only opaque registry-approved closures execute.
- [ ] Input, output, capacity, cancellation, and teardown are bounded.
- [ ] Failure receipts retain evidence without leaking sensitive content.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Depends on immutable source closure and registry.

## Findings and decisions

- The executor is generic infrastructure, not article policy.

## References

- `agentic-ai/loom/src/skill-provider-runtime.ts`
