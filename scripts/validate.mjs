import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const validStatuses = new Set([
  "proposed",
  "ready",
  "in_progress",
  "blocked",
  "done",
  "cancelled",
]);
const validAutomation = new Set(["manual", "agent"]);
const validWorklogStatuses = new Set(["in_progress", "blocked", "completed"]);
const requiredPlanSections = [
  "## Interpreted request",
  "## Requirements",
  "## Constraints and exclusions",
  "## Initial plan",
  "## Completion evidence",
  "## Safety review",
];
const requiredWorklogSections = [
  "## Outcome",
  "## Progress",
  "## Implementation problems",
  "## Decisions",
  "## Validation",
  "## Remaining work",
];
const errors = [];
const forbiddenContextHeadings = [
  "## Raw prompt",
  "## User prompt",
  "## Chat transcript",
  "## Conversation transcript",
];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(path)));
    else files.push(path);
  }
  return files;
}

function frontmatter(text) {
  if (!text.startsWith("---\n")) return undefined;
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return undefined;
  const values = new Map();
  for (const line of text.slice(4, end).split("\n")) {
    const match = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (match) values.set(match[1], match[2].trim());
  }
  return values;
}

for (const area of ["issues", "plans", "worklogs"]) {
  const directory = join(root, area);
  for (const file of await filesUnder(directory)) {
    if (extname(file) !== ".md" || file.includes("/_templates/")) continue;
    const path = relative(root, file);
    if (path === `${area}/README.md` || path.endsWith("/README.md")) continue;
    const text = await readFile(file, "utf8");
    const metadata = frontmatter(text);
    if (!metadata) {
      errors.push(`${path}: missing YAML frontmatter`);
      continue;
    }
    const requiredMetadata =
      area === "issues"
        ? ["title", "status", "created_at", "updated_at"]
        : area === "plans"
          ? ["title", "feature", "issue", "started_at", "agent"]
          : [
            "title",
            "feature",
            "issue",
            "status",
            "started_at",
            "finished_at",
            "agent",
          ];
    for (const required of requiredMetadata) {
      if (!metadata.get(required)) errors.push(`${path}: missing ${required}`);
    }
    if (area === "issues" && !validStatuses.has(metadata.get("status"))) {
      errors.push(`${path}: invalid status ${metadata.get("status")}`);
    }
    if (area === "issues" && !validAutomation.has(metadata.get("automation"))) {
      errors.push(`${path}: automation must be manual or agent`);
    }
    if (area === "worklogs") {
      if (!validWorklogStatuses.has(metadata.get("status"))) {
        errors.push(`${path}: invalid worklog status ${metadata.get("status")}`);
      }
      const headings = [...text.matchAll(/^## (.+)$/gm)].map(
        (match) => `## ${match[1]}`,
      );
      if (JSON.stringify(headings) !== JSON.stringify(requiredWorklogSections)) {
        errors.push(
          `${path}: worklog sections must exactly match ${requiredWorklogSections.join(", ")}`,
        );
      }
      const plan = metadata.get("plan");
      if (plan && !/^plans\/[a-z0-9-]+\/[a-zA-Z0-9._-]+\.md$/.test(plan)) {
        errors.push(`${path}: invalid plan reference ${plan}`);
      }
    }
    if (area === "plans") {
      const headings = [...text.matchAll(/^## (.+)$/gm)].map(
        (match) => `## ${match[1]}`,
      );
      if (JSON.stringify(headings) !== JSON.stringify(requiredPlanSections)) {
        errors.push(
          `${path}: plan sections must exactly match ${requiredPlanSections.join(", ")}`,
        );
      }
    }
    if (area === "plans" || area === "worklogs") {
      for (const heading of forbiddenContextHeadings) {
        if (text.includes(heading)) {
          errors.push(`${path}: forbidden raw-context heading ${heading}`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Workbench records are valid.");
}
