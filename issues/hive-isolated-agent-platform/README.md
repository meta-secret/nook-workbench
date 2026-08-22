# Hive isolated agent platform

Stateful, isolated agents reconcile trusted Main failures into durable Neo4j
work, reviewed Nook pull requests, and verified Main outcomes.

## Delivery contract

- Pull requests remain the unit of review and validation.
- Main preserves cache writers and keeps only the newest pending revision.
- Failed Main runs become durable, deduplicated Hive tasks.
- One logical agent owns diagnosis through squash merge and green Main
  verification.
- Pod loss resumes durable branch, PR, and verification checkpoints.
- Credentials remain in trusted brokers; task sandboxes receive only typed,
  task-scoped capabilities.

## Focused issues

- [Build the isolated Hive agent platform](build-k0s-kata-hive-agent-platform.md)
  — delivered k0s, Dragonball, Neo4j, the four-worker pool, publication
  capabilities, cache topology, and operational verification.
- [Automate unchanged-web deployment attestations](automate-agentic-only-deployment-attestations.md)
  — proposed lightweight ruleset compliance for agentic-only pull requests.
- [Reuse private ARC BuildKit state](reuse-private-arc-buildkit-state.md) —
  delivered private 32 GiB reflink-backed BuildKit state for every ephemeral
  Kata guest, ten-runner scale sets, and production cache-hydration proof.
- [Stabilize the Hive ARC runtime with Kata QEMU](stabilize-hive-arc-runtime-qemu.md)
  — follows the evidence-backed runtime fallback after Dragonball lost a normal
  Hive verification sandbox.

Generated `main-failure-*.md` records in this directory are durable incident
handoffs owned by the Hive dispatcher.
