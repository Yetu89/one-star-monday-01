// One Star for Monday — make.fun bounty u-clever-harbor-75-one-star-for-monday-9ead4a61
// Entry: a one-star review of Monday, written as if Monday were a restaurant.
// 107 characters (limit 180), 24 words (limit 25). One line, no trailing newline.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One star. The waiter took my order at 9 a.m. and brought the bill at 5 p.m. — still no weekend on the menu.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.split(/\s+/).filter(Boolean).length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 180) {
    found.push(`entry must be 1-180 characters, got ${LENGTH}`);
  }
  if (WORDS > 25) {
    found.push(`entry must be at most 25 words, got ${WORDS}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
