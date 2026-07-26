import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const textExtensions = new Set([".md", ".yaml", ".yml", ".json", ".txt"]);
const exactPatterns = [
  ["private key", /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/g],
  ["age secret key", /AGE-SECRET-KEY-1[0-9A-Z]{50,}/g],
  ["AWS access key", /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g],
  ["GitHub token", /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g],
  ["GitLab token", /\bglpat-[A-Za-z0-9_-]{20,}\b/g],
  ["Slack token", /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g],
  ["npm token", /\bnpm_[A-Za-z0-9]{20,}\b/g],
  ["Stripe live secret", /\bsk_live_[A-Za-z0-9]{16,}\b/g],
  [
    "credential in URL",
    /\b[a-z][a-z0-9+.-]*:\/\/[^/\s:@]+:[^/\s@]{8,}@/gi,
  ],
  [
    "JWT",
    /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,
  ],
];
const assignmentPattern =
  /\b(password|passwd|secret|api[_-]?key|access[_-]?token|private[_-]?key)\b\s*[:=]\s*["']?([^\s"',;}{\]]{8,})/gi;
const placeholderPattern =
  /^(?:<.*>|\$\{.*\}|\{\{.*\}\}|[*x]+|redacted|masked|placeholder|example|dummy|none|null|process\.env\.|secrets\.)/i;

function trackedFiles() {
  return execFileSync("git", ["ls-files", "-z"], {
    cwd: root,
    encoding: "utf8",
  })
    .split("\0")
    .filter(Boolean);
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function displayPath(path) {
  const local = relative(root, resolve(root, path));
  return local.startsWith("..") ? path : local;
}

const separator = process.argv.indexOf("--");
const argumentsAfterSeparator =
  separator === -1 ? process.argv.slice(2) : process.argv.slice(separator + 1);
const paths = argumentsAfterSeparator.length
  ? argumentsAfterSeparator
  : trackedFiles();
const findings = [];

for (const path of paths) {
  if (!textExtensions.has(extname(path).toLowerCase())) continue;
  let text;
  try {
    text = await readFile(resolve(root, path), "utf8");
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }

  for (const [label, pattern] of exactPatterns) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      findings.push(
        `${displayPath(path)}:${lineNumber(text, match.index)}: possible ${label}`,
      );
    }
  }

  assignmentPattern.lastIndex = 0;
  for (const match of text.matchAll(assignmentPattern)) {
    const value = match[2];
    if (placeholderPattern.test(value) || value.includes("…")) continue;
    findings.push(
      `${displayPath(path)}:${lineNumber(text, match.index)}: possible concrete ${match[1]} value`,
    );
  }
}

if (findings.length) {
  console.error(
    [
      "Sensitive-content scan failed. Remove the value, rotate it if real, and keep only a redacted summary.",
      ...findings,
    ].join("\n"),
  );
  process.exitCode = 1;
} else {
  console.log(`Sensitive-content scan passed for ${paths.length} tracked path(s).`);
}
