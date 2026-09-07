---
title: Deliver the external reactive PR Steward event path
feature: agent-orchestration
issue: null
started_at: 2026-09-07T03:00:42Z
agent: codex
gizmo_id: reactive-pr-steward
---

# Deliver the external reactive PR Steward event path

## Interpreted request

Make the existing GitHub event flow directly consumable by short-lived PR
Steward Team Agents running on a developer machine. Retain one persistent NATS
JetStream cluster, place its complete configuration under repository ownership,
connect Argo Events to that cluster, and expose only an authenticated secure
WebSocket endpoint. Define the Gizmo-owned subscription and shutdown lifecycle
in Cortex and provide the bounded client contract needed to prove the flow.

## Requirements

- Preserve a single three-node persistent JetStream service and the existing
  Argo GitHub EventSource.
- Connect Argo Events through its supported external JetStream contract.
- Publish only native NATS WebSockets through trusted TLS on port 443 while
  keeping client, cluster, and monitoring ports private.
- Give PR Steward a rotatable least-privilege identity that can consume only
  the approved pull-request event subject and required JetStream API replies.
- Keep PR Steward subordinate to Gizmo: Gizmo starts it for one mission,
  receives bounded event notifications, performs final GitHub reconciliation,
  and explicitly stops it before Gizmo completes.
- Update SRE and AI Cortex authority, manifests, operational checks, focused
  tests, and delivery evidence together.
- Complete one pull request through exact-head hosted validation, readiness,
  squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not introduce a second NATS cluster, proxy, webhook application, Temporal,
  Convoy, GitLab, or another workflow engine.
- Do not expose raw NATS, cluster-routing, or monitoring ports publicly.
- Do not commit credentials or place secret values in logs, command arguments,
  Workbench records, or Cortex.
- Do not make PR Steward a persistent service, scheduler, mission authority, or
  product-code owner.
- Missed live notifications are acceptable because Gizmo performs the final
  authoritative GitHub reconciliation; do not add speculative recovery logic.
- Use one pull request and remain below the authored-addition limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: reactive-pr-steward
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: k0s Argo Events and NATS manifests, webhook-ingress infrastructure checks, SRE event-platform architecture, AI agent-orchestration Cortex, PR Steward subscription tooling and focused contracts
- Ownership units:
1. Capability: Single-cluster external JetStream and WSS transport; Gizmo ID: reactive-pr-steward; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Argo publishes through jetstreamExotic to one persistent cluster, WSS succeeds externally with scoped credentials, forbidden ports remain private, and operational checks pass
2. Capability: Reactive Gizmo and PR Steward lifecycle; Gizmo ID: reactive-pr-steward; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex and focused tests define and prove bounded subscription, event notification, explicit shutdown, and final reconciliation ownership
3. Capability: Event-path security review; Gizmo ID: reactive-pr-steward; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms TLS publication, subject permissions, credential lifecycle, payload handling, and fail-closed behavior
- Public or cross-module interfaces: wss://events.dev.nokey.sh; default.github-webhook.pr-lifecycle; Gizmo-to-PR-Steward subscription, notification, stop, and evidence contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Deliver the complete single-cluster reactive PR event path; Acceptance evidence: focused infrastructure and Loom checks, live signed GitHub event publication, authenticated external WSS consumption, explicit shutdown proof, hosted exact-head validation, security review, readiness audit, and remote merge verification
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: reactive-pr-steward; Gizmo name: Reactive PR Steward; Predecessor Gizmo ID: None; Deliver the complete single-cluster reactive PR event path; Estimated authored changed lines: 900; Acceptance evidence: focused infrastructure and Loom checks, live signed GitHub event publication, authenticated external WSS consumption, explicit shutdown proof, hosted exact-head validation, security review, readiness audit, and remote merge verification

## Initial plan

1. Convert the existing single persistent JetStream deployment to
   repository-owned configuration and connect Argo Events through
   `jetstreamExotic`.
2. Enable native authenticated WSS, publish the dedicated hostname, provision
   the scoped PR Steward identity, and prove a local client receives a natural
   signed GitHub event.
3. Document and implement the bounded reactive PR Steward subscription,
   notification, final reconciliation, and Gizmo-directed shutdown contract.
4. Obtain a focused security verdict and route any corrections to the owning
   Team Agent.
5. Complete one exact-head pull-request lifecycle and publish the Workbench
   worklog.

## Completion evidence

- Kubernetes reports one healthy persistent three-node JetStream cluster and a
  healthy Argo EventBus and GitHub EventSource.
- The public hostname negotiates trusted TLS and NATS WSS while all non-HTTP
  NATS ports remain private.
- A scoped local PR Steward consumer receives the expected pull-request subject
  without gaining publish or unrelated-subject access.
- Focused infrastructure, Cortex, and subscription tests pass.
- The exact PR head passes repository-owned hosted validation and readiness,
  the PR is squash-merged, and the resulting remote state is verified.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
