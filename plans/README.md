# Agent task plans

Each task-owning agent publishes one task plan before implementation starts.
The plan is the agent's structured interpretation of the request and the
intended execution path. It preserves important requirements without storing
the raw user prompt or conversation transcript.

Plans are immutable start snapshots. If requirements change materially, publish
a new plan and link the superseded plan under `## Constraints and exclusions`.
Completion, deviations, validation, and remaining work belong in the linked
worklog.

Use `plans/<feature>/<timestamp>-<task>.md` and start from
[`_templates/plan.md`](_templates/plan.md). For a direct request with no feature
record, use the most relevant feature or `unplanned`.
