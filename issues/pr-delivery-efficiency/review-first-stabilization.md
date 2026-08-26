---
title: Stabilize review before complete validation
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T04:22:43Z
source_issues: []
related_prs: []
depends_on: [issues/pr-delivery-efficiency/per-head-delivery-statistics.md]
---

# Stabilize review before complete validation

## Context

Cloud review usually responds while complete validation is still running.
Actionable findings then replace the reviewed head and invalidate expensive
checks. A later validation-label event cancels the old workflow, but the push
itself does not cancel it immediately.

## Scope

- Request exact-head Cloud review before complete validation for risk-bearing changes.
- Run focused change-surface evidence during a bounded review window.
- Batch current findings into one coherent replacement head.
- Proceed after a clean review or a bounded timeout when review is unavailable.
- Cancel obsolete complete validation immediately on head replacement.
- Add a circuit breaker for repeated finding batches.
- Keep review advisory and readiness fail closed for feedback already present.

## Acceptance criteria

- [ ] Complete validation normally starts only after review stabilization or timeout.
- [ ] Same-head validation does not duplicate a review request.
- [ ] A replacement push promptly cancels obsolete validation.
- [ ] Review unavailability cannot block delivery indefinitely.
- [ ] Three finding batches activate comprehensive stabilization instead of another full pipeline.
- [ ] Exact-head validation, readiness, squash merge, and completion records succeed.

## References

- [Feature](README.md)
- [Statistics foundation](per-head-delivery-statistics.md)
