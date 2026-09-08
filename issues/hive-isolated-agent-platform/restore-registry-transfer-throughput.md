---
title: Restore registry transfer throughput
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: registry-network-throughput
created_at: 2026-09-08T03:52:45Z
updated_at: 2026-09-08T04:22:00Z
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
- 2026-09-08: A standard speed test measured 226.77 Mbps download. Controlled actual-BuildKit transfers showed CUBIC backing off heavily on the registry path. BBR completed the same 100 MB range in 9.25 seconds where CUBIC timed out after 45 seconds with 49 MB received.
- 2026-09-08: Persisted BBR on the registry host and affected worker. Updated the existing BuildKit network namespace without restart. Two final transfers completed in 10.06 and 16.63 seconds. Restored scheduling after verification; all four nodes are Ready and schedulable.
- 2026-09-08: Managed configuration task passed on both intended hosts. Independent SRE review passed; repository publication and hosted validation are underway.

## Findings and decisions

- Treat packet reordering and congestion-window behavior as hypotheses until controlled testing establishes the effect of a correction.
- Direct HTTPS and the private tunnel performed similarly with BBR. No DNS, MTU, buffer, or unrelated-worker changes were needed. The exact source of path loss or reordering remains unlocated; deliberate provider throttling was not established.

## References

- [Related cache retention issue](retain-reusable-buildkit-layers.md)
