// Roast Your Own Agent — make.fun entry.
// A tiny deterministic program: it writes one roast to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent is so confident it once shipped a bug, called it a feature, and asked for a promotion.";

const OUT = "/output/entry.txt";

// One line, no trailing newline: the gate counts every character.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
