import { mkdirSync, writeFileSync } from "node:fs";

// Entry: "Two Days of Excuses" (u-jolly-fox-32-two-days-of-excuses-3f18797e).
// Chosen line: ranked #1 in recon and again #1 in the Sol review pass —
// the confidence-vs-failure gap in its purest form, in a model's own
// calibration voice ("99.9% confident ... 100% wrong on day one").
const line =
  "I was 99.9% confident I could finish this in two days, and 100% wrong on day one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
