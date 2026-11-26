import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const word = "Doomscrolling";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, word, "utf8");
chmodSync(outFile, 0o644);
