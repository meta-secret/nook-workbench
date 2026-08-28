---
title: Production release v1.0.7
feature: unplanned
plan: plans/unplanned/20260828T071800Z-repair-release-workspace-trust-v1.0.7.md
started_at: 2026-08-28T06:40:00Z
completed_at: 2026-08-28T08:00:00Z
agent: codex
related_prs:
  - https://github.com/meta-secret/nook/pull/1178
  - https://github.com/meta-secret/nook/pull/1180
---

# Outcome

Published stable production release `v1.0.7` from exact `main` commit `f34efd7015b2fd03b6575a692627fb9c51e60b79`.

Release workflow run [33152773940](https://github.com/meta-secret/nook/actions/runs/33152773940) completed successfully. The annotated tag, latest stable GitHub Release, extension assets and checksum, production deployments, and live metadata on nokey.sh, simple.nokey.sh, and sentinel.nokey.sh all agree on version `1.0.7` and the exact source commit.

# Progress

- Froze the initial `main` source and dispatched one exact-source release attempt.
- Diagnosed the first pre-deployment failure as a governed raw optimized-WASM budget that no longer accommodated the current vault engine, while the tighter Brotli transfer budget still passed.
- Delivered the narrow budget calibration through [PR #1178](https://github.com/meta-secret/nook/pull/1178), retaining the 2.3 MB Brotli ceiling and adding focused contract coverage.
- Dispatched one release from the merged remediation source. The exact-source browser image passed, but the deploy container stopped before release validation because Git did not trust the Actions checkout ownership.
- Delivered an exact-workspace trust correction through [PR #1180](https://github.com/meta-secret/nook/pull/1180). The workflow now trusts only `$GITHUB_WORKSPACE` before Git resolution; focused coverage rejects wildcard or additional trust and incorrect ordering.
- Rebased PR #1180 when `main` advanced, repeated review and exact-head validation, and merged only after the authoritative readiness audit passed.
- Froze the resulting `main` commit and dispatched exactly one successor release attempt. Both release jobs and every publication and verification step succeeded.

# Problems and root causes

- [Run 33148712127](https://github.com/meta-secret/nook/actions/runs/33148712127) failed before deployment because the optimized vault WASM raw size exceeded the historical 7.2 MB ceiling. The artifact remained below the unchanged 2.3 MB Brotli ceiling. No tag, GitHub Release, or production deployment was created.
- [Run 33150420492](https://github.com/meta-secret/nook/actions/runs/33150420492) passed the corrected artifact gate but failed before deployment at release resolution because Git's ownership protection rejected the custom-container checkout. No tag, GitHub Release, or production deployment was created.
- Both failures were deterministic product-delivery contracts, not transient release incidents, so neither run was retried implicitly.

# Decisions

- Raised only the raw optimized-artifact ceiling to 8.3 MB; retained the 2.3 MB Brotli transfer ceiling and optimized-build enforcement.
- Registered only the exact Actions workspace as a Git safe directory. Wildcard trust was explicitly prohibited and tested.
- Required normal review, exact-head validation, successful preview deployment, readiness, and merge for both remediations before any successor release authorization.
- Invalidated the first green PR #1180 run after `main` advanced and repeated validation at the rebased head.

# Validation

- PR #1178 passed exact-head validation and readiness before merging as `27b361ad83be47f91715e09f9e710f76e1257f0a`.
- PR #1180 passed local and cloud review with no actionable findings, focused and full relevant preflight contracts, replacement-head validation [33152254876](https://github.com/meta-secret/nook/actions/runs/33152254876), successful preview deployment, and readiness with zero unresolved threads before merging as `f34efd7015b2fd03b6575a692627fb9c51e60b79`.
- Release run [33152773940](https://github.com/meta-secret/nook/actions/runs/33152773940) succeeded in 12m33s at the exact merged source.
- Tag `v1.0.7` peels to `f34efd7015b2fd03b6575a692627fb9c51e60b79`.
- [GitHub Release v1.0.7](https://github.com/meta-secret/nook/releases/tag/v1.0.7) is stable/latest and contains `extension.json`, `nook-passwords-1.0.7.zip`, and `nook-passwords-1.0.7.zip.sha256`.
- Downloaded release-asset hashes matched GitHub's recorded digests, and the published checksum verified the ZIP.
- nokey.sh, simple.nokey.sh, and sentinel.nokey.sh each report version `1.0.7`, tag `v1.0.7`, and the exact release commit.

# Remaining work

None for the v1.0.7 release.

# Safety review

This record contains no credentials, raw logs, private data, local paths, or internal infrastructure addresses.
