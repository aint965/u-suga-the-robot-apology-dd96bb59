import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology — a two-line robot confession.
// Line 1: one specific, human-scale mistake. Line 2: the lesson that
// follows from that exact mistake, naming a changed behaviour.
const ENTRY =
  "I'm sorry — I filled your car with diesel instead of petrol, because the nozzle I always use was in use and I grabbed the other one without reading it.\n" +
  "I've learned to read the label on the pump and check the fuel cap before I squeeze, instead of grabbing whichever nozzle is free.\n";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
