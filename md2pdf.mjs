import fs from 'fs';
import puppeteer from 'puppeteer';
import { marked } from 'marked';

const GITHUB_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css';

async function mdToPdf(mdPath, pdfPath) {
  const markdown = fs.readFileSync(mdPath, 'utf-8');
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="${GITHUB_CSS}">
      <style>
        body { box-sizing: border-box; margin: 0; padding: 40px; }
        .markdown-body { box-sizing: border-box; min-width: 200px; max-width: 980px; margin: 0 auto; }
      </style>
    </head>
    <body>
      <article class="markdown-body">
        ${marked.parse(markdown)}
      </article>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
  await browser.close();
}

const [,, mdPath, pdfPath = 'output.pdf'] = process.argv;
if (!mdPath) {
  console.error('Usage: node md2pdf.mjs <input.md> [output.pdf]');
  process.exit(1);
}
mdToPdf(mdPath, pdfPath).then(() => {
  console.log(`✅ PDF generated: ${pdfPath}`);
}); 