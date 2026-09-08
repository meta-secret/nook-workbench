---
title: Restore registry transfer throughput
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: registry-network-throughput
created_at: 2026-09-08T03:52:45Z
updated_at: 2026-09-08T03:52:45Z
source_issues: []
related_prs: []
depends_on: []
---

# Restore registry transfer throughput

## Context

CI registry downloads show much lower single-connection throughput than other destinations from the same worker. Cache retention improvements do not resolve this transport bottleneck.

## Outcome

Identify and correct the network constraint using controlled before-and-after measurements.

## Scope

- Compare identical registry transfers through existing supported routes.
- Inspect sender congestion control, transport errors, and proxy configuration.
- Apply a bounded reversible correction supported by measurements.
- Exclude a new network architecture or disruptive service restarts.

## Acceptance criteria

- [ ] Measurements distinguish destination-specific throughput from total access-link capacity.
- [ ] A supported correction materially improves repeated comparable transfers.
- [ ] Existing cluster and registry connectivity remain healthy.
- [ ] Any persistent configuration change has reviewed repository provenance.

## Progress

- 2026-09-08: Assigned controlled transfer diagnosis and transport inspection.

## Findings and decisions

- Treat packet reordering and congestion-window behavior as hypotheses until controlled testing establishes the effect of a correction.

## References

- [Related cache retention issue](retain-reusable-buildkit-layers.md)
