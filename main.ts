import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from './parse.js';

// Environment paths support the kit's process driver as well as /input and /output.
const inputPath = `${process.env.MAKEFUN_INPUT_DIR ?? '/input'}/cases.json`;
const outputPath = `${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/html.json`;
const documents: { markdown: string }[] = JSON.parse(readFileSync(inputPath, 'utf8'));
const rendered = new Array<string>(documents.length);
for (let index = 0; index < documents.length; index++) {
  rendered[index] = parse(documents[index].markdown);
}
writeFileSync(outputPath, JSON.stringify(rendered));
