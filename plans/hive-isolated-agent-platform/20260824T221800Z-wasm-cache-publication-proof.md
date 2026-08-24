# Repair WASM dependency cache publication

## Interpreted request

Restore trusted Main by ensuring its published Rust/WASM dependency cache contains every expensive dependency stage required by a fresh BuildKit worker.

## Requirements

- Publish the complete dependency graph from the same Dockerfile and context used by the hosted restore proof.
- Keep the fresh hosted proof as a deployment prerequisite.
- Add a regression contract and exercise the repository cache simulation.
- Merge the reviewed repair and verify the replacement Main workflow.

## Constraints and exclusions

- Preserve ordinary ARC Pods with persistent rootless BuildKit.
- Do not add Docker-in-Docker, Podman, Kata, or a host Docker socket.
- Do not weaken cache isolation, cache verification, or deployment gates.
- Do not mix the broader native tool-execution migration into this repair.

## Change budget and PR sequence

- Estimated authored changed lines: 300
- Owning modules, packages, or layers: Rust BuildKit cache graph, cache proof automation, CI contracts
- Public or cross-module interfaces: Docker Bake target contract and trusted Main cache reference
- Delivery shape: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Complete WASM dependency cache publication; Acceptance evidence: focused contracts, local cache simulation, exact-head validation, and green replacement Main
- PR slices and acceptance evidence: Complete WASM dependency cache publication; Acceptance evidence: focused contracts, local cache simulation, exact-head validation, and green replacement Main

## Initial plan

1. Reproduce the mismatch between the publisher target and the fresh restore target.
2. Make the writer export the exact terminal graph consumed by the proof.
3. Strengthen static and simulated cache contracts against partial exports.
4. Run focused remote checks, full exact-head validation, review, merge, and replacement Main verification.

## Completion evidence

- A fresh hosted worker reports the required dependency stages as cached.
- The repair PR passes repository-owned exact-head checks and is squash-merged.
- The resulting Main workflow completes its proof and deployment gates.

## Safety review

- No credentials or private runtime data are recorded.
- Cache writes remain restricted to trusted Main and isolated immutable scopes.
- The repair changes build-cache metadata flow, not product security boundaries.
