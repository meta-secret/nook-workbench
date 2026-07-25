# Worklogs

Every task-owning agent adds one concise worklog before completing or blocking a
Nook task. Worklogs are feature-scoped and append-only:

```text
worklogs/<feature>/<UTC timestamp>-<issue-or-pr>.md
```

Use `YYYYMMDDTHHMMSSZ` timestamps in filenames. A later correction should be a
new worklog that links the superseded entry; do not rewrite historical
experience out of the record.

Worklogs summarize durable development context. They are not chat transcripts
or raw command logs.
