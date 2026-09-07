---
title: Trace the reactive PR pipeline end to end
feature: agent-orchestration
issue: null
started_at: 2026-09-07T05:51:03Z
agent: codex
gizmo_id: reactive-pr-pipeline-canary
---

# Trace the reactive PR pipeline end to end

## Interpreted request

Create and complete a deliberately small Nook pull request while observing the
real reactive path from GitHub webhook delivery through Argo Events and NATS to
one PR-specific PR Steward child. Prove that the child waits on NATS rather than
polling GitHub, notifies Gizmo when a matching event arrives, and is explicitly
drained and stopped after the pull request is complete.

## Requirements

- Make one small, durable documentation clarification owned by the AI team.
- Open the PR before the final documentation commit so that the second push
  creates a natural `pull_request.synchronize` event while the subscriber is
  already connected.
- Start one direct foreground PR Steward subscription scoped to the created PR.
- Correlate one delivery across GitHub, Argo EventSource, NATS, PR Steward
  output, and the PR Steward-to-Gizmo message boundary.
- Observe the waiting process and source path to prove it has no periodic
  GitHub polling loop.
- Complete exact-head validation, readiness, squash merge, remote
  verification, terminal-event observation, and explicit subscriber drain.
- Publish a final trace worklog and agent statistics.

## Constraints and exclusions

- Do not change the deployed event architecture or credentials.
- Do not expose raw NATS ports or secret content.
- Do not add sleeps, polling, durable consumers, queue groups, shared cursors,
  or a persistent PR Steward service.
- Do not use synthetic NATS publication as the primary proof; use a natural
  GitHub PR event.
- Keep authored changes small and limited to the PR Steward workflow document.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: reactive-pr-pipeline-canary
- Estimated authored changed lines: 20
- Owning modules, packages, or layers: AI-owned PR Steward workflow documentation
- Ownership units:
1. Capability: Reactive pipeline canary procedure; Gizmo ID: reactive-pr-pipeline-canary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Correlated delivery ID and action from GitHub through Argo and NATS to PR Steward, observable PR Steward-to-Gizmo notification, no GitHub polling while idle, and clean drain after terminal completion
- Public or cross-module interfaces: default.github-webhook.pr-lifecycle and the direct PR Steward subscriber command
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 20
- Current PR slice and acceptance evidence: Add and exercise the live canary procedure; Acceptance evidence: correlated delivery, no-poll observation, clean shutdown, hosted exact-head validation, readiness, and remote merge verification
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: reactive-pr-pipeline-canary; Gizmo name: Reactive PR Pipeline Canary; Predecessor Gizmo ID: None; Add and exercise the live canary procedure; Estimated authored changed lines: 20; Acceptance evidence: correlated delivery, no-poll observation, clean shutdown, hosted exact-head validation, readiness, and remote merge verification

## Initial plan

1. Add the first half of a concise live-canary procedure and open the PR.
2. Start a PR-specific Steward subscriber and verify its idle process boundary.
3. Add and push the final procedure wording to create a natural synchronize
   event; correlate and report it through every layer.
4. Validate and merge the PR, observe the terminal event, then command the
   subscriber to drain and verify exit status zero.
5. Publish the Workbench trace and agent statistics.

## Completion evidence

- A matching GitHub delivery ID is visible at ingress and in the Steward's
  minimal NATS event projection.
- Argo EventSource confirms forwarding to the EventBus and the PR-specific
  Steward reports the event to Gizmo without periodic GitHub API calls.
- Exact-head validation and readiness pass; the PR is squash merged.
- Gizmo explicitly stops the subscriber after direct terminal-state
  reconciliation; the foreground process drains and exits zero.

## Safety review

- The trace records identifiers and timestamps only; credentials and raw
  webhook bodies are never printed or persisted.
