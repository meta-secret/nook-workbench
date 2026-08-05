import { fileURLToPath } from "node:url";

import {
  formatFinding,
  loadLegacyBaseline,
  reconcileLegacyFindings,
  validateRecords,
} from "./validate-records.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const findings = await validateRecords(root);
const baseline = await loadLegacyBaseline(root);
const { active, exempted } = reconcileLegacyFindings(findings, baseline);

if (active.length) {
  console.error(active.map(formatFinding).join("\n"));
  process.exitCode = 1;
} else {
  const suffix = exempted.length
    ? ` (${exempted.length} immutable historical finding(s) exempted).`
    : ".";
  console.log(`Workbench records are valid${suffix}`);
}
