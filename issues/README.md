# Issues

Markdown issues keep development context next to feature plans, worklogs, and
delivery evidence.

Each feature owns a kebab-case directory:

```text
issues/<feature>/README.md
issues/<feature>/<focused-deliverable>.md
```

The feature `README.md` replaces a milestone or aggregate issue. Focused issue
files replace sub-issues. Use relative Markdown links for parent/child
relationships and absolute links for Nook pull requests or historical GitHub
issues.

When a Gizmo PR slice materializes a focused issue, persist its stable
lowercase kebab-case ID as `gizmo_id` in YAML frontmatter. The field is optional
for historical or standalone issues without an originating slice and immutable
once recorded.

Copy the templates from [`_templates/`](./_templates/). Do not use GitHub
Issues in either this repository or `meta-secret/nook` for new work.
