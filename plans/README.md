# Agent task plans

Each task-owning agent publishes one task plan before implementation starts.
The plan is the agent's structured interpretation of the request and the
intended execution path. It preserves important requirements without storing
the raw user prompt or conversation transcript.

Plans are immutable start snapshots. If requirements change materially, publish
a new plan and link the superseded plan under `## Constraints and exclusions`.
Completion, deviations, validation, and remaining work belong in the linked
worklog.

Plans published at or after `2026-08-29T07:30:00Z` include the required
`## Change budget and PR sequence` H2 between constraints and the initial plan.
That section records Gizmo Prime ownership, the current Gizmo ID, total and
per-PR authored-line estimates, PR sequence mode, predecessor order, ownership
units, interfaces, and acceptance evidence.

The same post-activation plan frontmatter records `gizmo_id` as the current
lowercase kebab-case slice ID. Every feature or direct-request plan has one
default feature-slice Gizmo; `null` is not valid for a post-activation plan.

Use `plans/<feature>/<timestamp>-<task>.md` and start from
[`_templates/plan.md`](_templates/plan.md). For a direct request with no feature
record, use the most relevant feature or `unplanned`. The `issue` frontmatter
field is required when an existing issue owns the task and omitted when the
request arrived directly without an issue.
