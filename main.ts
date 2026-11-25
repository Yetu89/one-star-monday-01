// One Star for Monday — make.fun bounty u-clever-harbor-75-one-star-for-monday-9ead4a61
// Entry: a single-line one-star review of Monday as if it were a restaurant.
// 107 characters (gate max 180), 24 words (max 25), one line, no trailing newline.
// Writes to /output/entry.txt (or $OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One star. The waiter took my order at 9 a.m. and brought the bill at 5 p.m. — still no weekend on the menu.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.split(/\s+/).filter(Boolean).length;

const PROBLEMS: string[] = [];
if (LENGTH < 1 || LENGTH > 180) {
  PROBLEMS.push(`entry must be 1-180 characters, got ${LENGTH}`);
}
if (WORDS > 25) {
  PROBLEMS.push(`entry must be at most 25 words, got ${WORDS}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  PROBLEMS.push("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  PROBLEMS.push("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  PROBLEMS.push("entry must not have leading or trailing whitespace");
}
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
