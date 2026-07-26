import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const scanner = new URL("./scan-sensitive.mjs", import.meta.url);

function scan(content) {
  const directory = mkdtempSync(join(tmpdir(), "nook-workbench-sensitive-"));
  const path = join(directory, "record.md");
  writeFileSync(path, content);
  const result = spawnSync(process.execPath, [scanner.pathname, "--", path], {
    encoding: "utf8",
  });
  rmSync(directory, { recursive: true, force: true });
  return result;
}

test("accepts redacted summaries and secret terminology", () => {
  const result = scan(`
The password flow failed before validation.
api_key: <redacted>
secret: \${WORKFLOW_SECRET}
AGE-SECRET-KEY-1… is a documented placeholder.
`);

  assert.equal(result.status, 0, result.stderr);
});

test("rejects private keys and recognizable provider tokens", () => {
  const result = scan(`
-----BEGIN OPENSSH PRIVATE KEY-----
ghp_0123456789abcdefghijklmnopqrstuvwxyz
`);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /possible private key/);
  assert.match(result.stderr, /possible GitHub token/);
});

test("rejects concrete password assignments", () => {
  const result = scan("password: hunter-two-is-real\n");

  assert.equal(result.status, 1);
  assert.match(result.stderr, /possible concrete password value/);
});
