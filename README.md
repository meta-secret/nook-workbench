# Nook Workbench

Nook Workbench is the durable development workspace for
[`meta-secret/nook`](https://github.com/meta-secret/nook).

The product repository owns source code, architecture, and development rules.
This repository owns the context surrounding that work:

- [`issues/`](issues/) — feature-scoped Markdown issues and execution plans;
- [`worklogs/`](worklogs/) — agent progress, decisions, problems, and outcomes;
- [`stats/`](stats/) — AI-agent delivery and Main-build measurements.

GitHub Issues are intentionally disabled. Work is proposed, reviewed, assigned,
and completed through versioned Markdown files so the full context travels
through the same branch and review model as every other development artifact.

## Directory layout

```text
issues/
  <feature>/
    README.md
    <issue>.md
worklogs/
  <feature>/
    <timestamp>-<issue-or-pr>.md
stats/
  ai-agent/
    <nook-pr-number>.yaml
  main-build/
    <run-id>-attempt-<attempt>.yaml
```

Use lowercase kebab-case for feature and issue paths. A feature directory is the
replacement for a GitHub milestone or epic. Its `README.md` owns the feature
goal, shared decisions, current progress, and issue index.

## Starting agent work

An issue is automated only when its frontmatter contains both:

```yaml
status: ready
automation: agent
```

Nook's scheduled `Agent implement` workflow claims one eligible record by
changing `status` to `in_progress` before starting. Drafts and manually owned
records never trigger an agent.

## Recording work

Every task-owning agent writes a worklog before finishing, including incomplete
or blocked work. The worklog links the issue, Nook pull request, material
progress, implementation problems, decisions, validation evidence, and
remaining work. Chat transcripts, prompts, secrets, credentials, raw logs, and
vault data must never be copied here.

Workbench is public. Record durable outcomes, decisions, root causes, and
validation references; omit environment dumps, stack traces, local paths,
internal infrastructure details, and incidental debugging history. Install the
versioned commit and push hooks once per clone:

```bash
bun scripts/install-hooks.mjs
```

Git intentionally does not activate repository-owned hooks automatically on
clone. The one-time command points this clone at the versioned `.githooks/`
directory. The hooks run `scripts/scan-sensitive.mjs` with Bun before commits
and pushes. GitHub validation and native push protection are automatic for
everyone, so skipped local hooks do not remove the remote detection gates. If a
real secret is ever detected after publication, rotate or revoke it first, then
remove it from the repository and history.

See [AGENTS.md](AGENTS.md) for the full contract and the templates under
[`issues/_templates/`](issues/_templates/) and
[`worklogs/_templates/`](worklogs/_templates/).
