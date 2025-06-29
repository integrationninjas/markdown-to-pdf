import { test } from 'uvu';
import * as assert from 'uvu/assert';
import fs from 'fs';
import { execSync } from 'child_process';

const SAMPLE_MD = 'test-sample.md';
const SAMPLE_PDF = 'test-sample.pdf';

// Create a sample markdown file
fs.writeFileSync(SAMPLE_MD, '# Test\n\nThis is a **test**.');

test('mdToPdf generates a PDF file', () => {
  execSync(`node md2pdf.mjs ${SAMPLE_MD} ${SAMPLE_PDF}`);
  assert.ok(fs.existsSync(SAMPLE_PDF), 'PDF file should be generated');
  const stats = fs.statSync(SAMPLE_PDF);
  assert.ok(stats.size > 0, 'PDF file should not be empty');
});

test.run();
// Cleanup
fs.unlinkSync(SAMPLE_MD);
fs.unlinkSync(SAMPLE_PDF); 