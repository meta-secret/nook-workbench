import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

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
const forbiddenContextHeadings = [
  "## Raw prompt",
  "## User prompt",
  "## Chat transcript",
  "## Conversation transcript",
];
const recordAreas = ["issues", "plans", "worklogs"];

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

function contentHash(text) {
  return createHash("sha256").update(text).digest("hex");
}

function headings(text) {
  return [...text.matchAll(/^## (.+)$/gm)].map((match) => `## ${match[1]}`);
}

function addFinding(findings, path, sha256, message) {
  findings.push({ path, sha256, message });
}

function validateMetadata(area, path, text, metadata, sha256, findings) {
  const requiredMetadata =
    area === "issues"
      ? ["title", "status", "created_at", "updated_at"]
      : area === "plans"
        ? ["title", "feature", "started_at", "agent"]
        : ["title", "feature", "status", "started_at", "finished_at", "agent"];

  for (const required of requiredMetadata) {
    if (!metadata.get(required)) {
      addFinding(findings, path, sha256, `missing ${required}`);
    }
  }

  if (area === "issues" && !validStatuses.has(metadata.get("status"))) {
    addFinding(
      findings,
      path,
      sha256,
      `invalid status ${metadata.get("status")}`,
    );
  }
  if (area === "issues" && !validAutomation.has(metadata.get("automation"))) {
    addFinding(
      findings,
      path,
      sha256,
      "automation must be manual or agent",
    );
  }
  if (area === "worklogs") {
    if (!validWorklogStatuses.has(metadata.get("status"))) {
      addFinding(
        findings,
        path,
        sha256,
        `invalid worklog status ${metadata.get("status")}`,
      );
    }
    const actualHeadings = headings(text);
    if (JSON.stringify(actualHeadings) !== JSON.stringify(requiredWorklogSections)) {
      addFinding(
        findings,
        path,
        sha256,
        `worklog sections must exactly match ${requiredWorklogSections.join(", ")}`,
      );
    }
  }
  if (area === "plans") {
    const actualHeadings = headings(text);
    if (JSON.stringify(actualHeadings) !== JSON.stringify(requiredPlanSections)) {
      addFinding(
        findings,
        path,
        sha256,
        `plan sections must exactly match ${requiredPlanSections.join(", ")}`,
      );
    }
  }
  if (area === "plans" || area === "worklogs") {
    const plan = metadata.get("plan");
    if (
      area === "worklogs" &&
      plan &&
      !/^plans\/[a-z0-9-]+\/[a-zA-Z0-9._-]+\.md$/.test(plan)
    ) {
      addFinding(findings, path, sha256, `invalid plan reference ${plan}`);
    }
    for (const heading of forbiddenContextHeadings) {
      if (text.includes(heading)) {
        addFinding(
          findings,
          path,
          sha256,
          `forbidden raw-context heading ${heading}`,
        );
      }
    }
  }
}

export async function validateRecords(root) {
  const findings = [];
  for (const area of recordAreas) {
    const directory = join(root, area);
    for (const file of await filesUnder(directory)) {
      if (extname(file) !== ".md" || file.includes("/_templates/")) continue;
      const path = relative(root, file);
      if (path === `${area}/README.md` || path.endsWith("/README.md")) continue;
      const text = await readFile(file, "utf8");
      const sha256 = contentHash(text);
      const metadata = frontmatter(text);
      if (!metadata) {
        addFinding(findings, path, sha256, "missing YAML frontmatter");
        continue;
      }
      validateMetadata(area, path, text, metadata, sha256, findings);
    }
  }
  return findings;
}

export async function loadLegacyBaseline(root) {
  const path = join(root, "scripts", "legacy-validation-baseline.json");
  return JSON.parse(await readFile(path, "utf8"));
}

export function reconcileLegacyFindings(findings, baseline) {
  if (baseline.schema_version !== 1 || typeof baseline.records !== "object") {
    throw new Error("Unsupported legacy validation baseline schema");
  }
  const active = [];
  const exempted = [];
  for (const finding of findings) {
    const record = baseline.records[finding.path];
    const isExactLegacyFinding =
      record?.sha256 === finding.sha256 && record.errors.includes(finding.message);
    (isExactLegacyFinding ? exempted : active).push(finding);
  }
  return { active, exempted };
}

export function formatFinding(finding) {
  return `${finding.path}: ${finding.message}`;
}
