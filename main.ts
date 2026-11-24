// Seventeen Syllables of Debugging — make.fun entry.
//
// One haiku about debugging, three lines in the 5-7-5 shape, written out
// as plain text. Node 22 standard library only: no file reads, no network,
// no headless browser. The grader runs this from any directory, so the
// output path comes from the environment with a plain fallback.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "Three a.m. cursor",
  "blinks at a log line that lies",
  "my own code betrays",
];

const haiku = lines.join("\n");

// The sealed gate only accepts 1–200 characters of non-blank UTF-8 text.
// Fail loudly here rather than shipping an entry the scorer would void.
if (haiku.length === 0 || haiku.length > 200 || haiku.trim().length === 0) {
  throw new Error(`haiku is ${haiku.length} characters; the gate allows 1–200`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku + "\n", "utf8");
console.log(`wrote ${Buffer.byteLength(haiku + "\n", "utf8")} bytes to ${join(outDir, "entry.txt")}`);
