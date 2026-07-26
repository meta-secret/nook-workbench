import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

execFileSync("git", ["config", "--local", "core.hooksPath", ".githooks"], {
  cwd: root,
  stdio: "inherit",
});
console.log("Installed Nook Workbench Git hooks from .githooks/.");
