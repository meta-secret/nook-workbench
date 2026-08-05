import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";

import {
  reconcileLegacyFindings,
  validateRecords,
} from "./validate-records.mjs";

async function fixtureRoot() {
  const root = await mkdtemp(join(tmpdir(), "workbench-validation-"));
  await Promise.all(
    ["issues", "plans", "worklogs"].map((area) =>
      mkdir(join(root, area), { recursive: true }),
    ),
  );
  return root;
}

describe("Workbench record validation", () => {
  test("accepts direct-request plans and worklogs without an issue", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "direct.md"),
      `---
title: Direct task
feature: unplanned
started_at: 2026-08-05T00:00:00Z
agent: codex
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );
    await writeFile(
      join(root, "worklogs", "direct.md"),
      `---
title: Direct task
feature: unplanned
status: completed
started_at: 2026-08-05T00:00:00Z
finished_at: 2026-08-05T00:01:00Z
agent: codex
plan: plans/unplanned/direct.md
---

## Outcome
x
## Progress
x
## Implementation problems
x
## Decisions
x
## Validation
x
## Remaining work
x
`,
    );

    expect(await validateRecords(root)).toEqual([]);
  });

  test("rejects a new issue with a retired automation value", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "issues", "invalid.md"),
      `---
title: Invalid automation
status: ready
automation: hive
created_at: 2026-08-05T00:00:00Z
updated_at: 2026-08-05T00:00:00Z
---
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "automation must be manual or agent",
    ]);
  });

  test("exempts only exact findings on immutable historical content", () => {
    const finding = {
      path: "issues/history.md",
      sha256: "current-hash",
      message: "automation must be manual or agent",
    };
    const baseline = {
      schema_version: 1,
      records: {
        "issues/history.md": {
          sha256: "current-hash",
          errors: ["automation must be manual or agent"],
        },
      },
    };

    expect(reconcileLegacyFindings([finding], baseline)).toEqual({
      active: [],
      exempted: [finding],
    });
    expect(
      reconcileLegacyFindings(
        [{ ...finding, sha256: "modified-hash" }],
        baseline,
      ).active,
    ).toHaveLength(1);
    expect(
      reconcileLegacyFindings(
        [{ ...finding, message: "missing title" }],
        baseline,
      ).active,
    ).toHaveLength(1);
  });
});
