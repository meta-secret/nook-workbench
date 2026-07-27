## Interpreted request

Restore functional Hive Main-repair execution in production. Repair the
Codex structured-output contract, make failed deterministic queue items
recoverable without duplicating work, expose durable queue diagnostics through
the root Taskfile, and redeploy the verified result.

## Requirements

- Replace the GPT-5.6-incompatible output schema while preserving typed
  completed and blocked terminal results.
- Add behavior-focused Rust coverage for schema compatibility and task
  recovery.
- Reconcile durable Neo4j state with ready Workbench incidents so an exhausted
  task can be retried after a platform repair.
- Keep queue inspection and recovery credential-safe and Taskfile-owned.
- Preserve one-agent ownership through reviewed PR, squash merge, production
  deployment, and live task-claim verification.

## Constraints and exclusions

- Do not expose Neo4j, Codex, or GitHub credentials in logs or repository
  content.
- Do not delete task history or create duplicate repair identities.
- Do not push directly to Main or bypass repository-owned validation.
- Browser-suite root causes are handled by Hive after the platform itself is
  repaired.

## Initial plan

1. Model the structured response without unsupported JSON Schema combinators.
2. Add an explicit durable retry transition for exhausted tasks and reconcile
   ready Workbench incidents through that transition.
3. Add bounded Taskfile queue diagnostics and contract tests.
4. Format, publish a PR, and resolve exact-head CI and review findings.
5. Squash-merge, deploy through the Taskfile, recover queued incidents, and
   verify a worker claims and advances a Main repair.

## Completion evidence

- Rust tests reject unsupported schema constructs and prove completed/blocked
  decoding plus exhausted-task recovery.
- The exact PR head passes repository-owned PR and Hive workflows.
- Production diagnostics show a repaired Hive deployment and truthful durable
  queue state.
- At least one previously exhausted Main incident advances beyond the schema
  rejection after deployment.

## Safety review

The work keeps credentials inside existing Kubernetes secrets and brokers,
prints only bounded task metadata, preserves attempt history, and uses normal
reviewed Git and Taskfile deployment paths. No prompt transcript, raw workflow
log, private path, or secret value is recorded.
