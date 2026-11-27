// ni27 entry: the finished broadsheet lives in this repo as entry.png, and
// this program copies it to the grader's output directory as entry.png.
// Nothing is drawn or fetched here, so the two grader runs write the same
// bytes. Node 22, standard library only.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
