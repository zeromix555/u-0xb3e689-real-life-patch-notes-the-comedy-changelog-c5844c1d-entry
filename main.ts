// Real-Life Patch Notes: The Comedy Changelog
// Writes one patch-note line (<=160 chars) to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no time.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v4.2.0: fixed a bug where the bladder's low-battery warning fired only after the meeting started.";

// Self-check against the competition gate: 1-160 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
