# ARC Main web export hotfix

## Outcome

- Keep Main web verification on ARC without exporting a Docker image into a daemon-free runner.
- Keep development deployment operational while the broader Docker-run removal is audited separately.
- Verify the replacement Main run, cache hydration proof, and node-local cache distribution.

## Implementation

1. Make the ARC web verification Bake output cache-only after the verified graph is solved.
2. Route the current Docker-runtime deployment lane to a fresh hosted runner until direct artifact deployment replaces it.
3. Add repository contracts for both placement and output behavior.
4. Validate, merge, and monitor the exact Main revision.

## Completion evidence

- Exact-head PR checks and review are clear.
- Main web verification, fresh WASM cache restore proof, and deployment succeed.
- ARC placement and retained BuildKit totals are recorded from the live cluster.
