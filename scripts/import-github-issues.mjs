import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repository = process.argv[2] || "meta-secret/nook";
const root = fileURLToPath(new URL("../", import.meta.url));
const importedAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

function slug(value) {
  return value
    .toLowerCase()
    .replace(/^feature:\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "backlog";
}

function yamlString(value) {
  return JSON.stringify(value);
}

const raw = execFileSync(
  "gh",
  [
    "issue",
    "list",
    "--repo",
    repository,
    "--state",
    "all",
    "--limit",
    "1000",
    "--json",
    "number,title,body,state,stateReason,labels,milestone,assignees,createdAt,updatedAt,closedAt,url,comments",
  ],
  { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
);
const issues = JSON.parse(raw);
const featureIssues = new Map();

for (const issue of issues) {
  const feature = slug(issue.milestone?.title || "backlog");
  const issueSlug = `gh-${issue.number}-${slug(issue.title)}`;
  const path = join(root, "issues", feature, `${issueSlug}.md`);
  const status = issue.state === "CLOSED" ? "done" : "proposed";
  const labels = issue.labels.map((label) => label.name);
  const assignees = issue.assignees.map((assignee) => assignee.login);
  const comments = issue.comments.length
    ? issue.comments
        .map(
          (comment) =>
            `### ${comment.author?.login || "unknown"} — ${comment.createdAt}\n\n${comment.body || "(empty comment)"}`,
        )
        .join("\n\n")
    : "No comments.";

  const document = `---
title: ${yamlString(issue.title)}
status: ${status}
priority: p2
automation: manual
owner: ${yamlString(assignees[0] || "unassigned")}
created_at: ${issue.createdAt}
updated_at: ${issue.updatedAt}
source_issues: [${yamlString(issue.url)}]
related_prs: []
depends_on: []
legacy_labels: ${JSON.stringify(labels)}
legacy_state_reason: ${yamlString(issue.stateReason || "")}
---

# ${issue.title}

## Imported context

This record was imported from [Nook GitHub issue #${issue.number}](${issue.url})
on ${importedAt}. Its historical body and comments are preserved below.

## Original issue body

${issue.body || "(no issue body)"}

## Historical comments

${comments}
`;

  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, document);

  const records = featureIssues.get(feature) || [];
  records.push({ issue, issueSlug, status });
  featureIssues.set(feature, records);
}

for (const [feature, records] of featureIssues) {
  const title = records[0].issue.milestone?.title || "Backlog";
  const openCount = records.filter(({ status }) => status !== "done").length;
  const lines = records
    .sort((a, b) => a.issue.number - b.issue.number)
    .map(
      ({ issue, issueSlug, status }) =>
        `- [${status === "done" ? "x" : " "}] [#${issue.number}: ${issue.title}](${issueSlug}.md)`,
    )
    .join("\n");
  const document = `---
title: ${yamlString(title)}
status: ${openCount ? "proposed" : "done"}
created_at: ${importedAt}
updated_at: ${importedAt}
---

# ${title}

## Migration status

Imported from the historical GitHub Issues collection in
[\`${repository}\`](https://github.com/${repository}/issues). These records are
reference context until an agent explicitly refines and claims them under the
Workbench issue contract.

## Issues

${lines}
`;
  await writeFile(join(root, "issues", feature, "README.md"), document);
}

console.log(`Imported ${issues.length} issues into ${featureIssues.size} feature directories.`);
