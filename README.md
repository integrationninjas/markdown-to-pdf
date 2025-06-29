# Markdown to PDF Converter

This tool converts a Markdown file (like a GitHub README) to a styled PDF using Node.js, Puppeteer, and marked.

## Prerequisites
- Node.js 18 or newer

## Install dependencies
```sh
npm install
```

## Usage
Convert a Markdown file to PDF:
```sh
node md2pdf.mjs <input.md> <output.pdf>
```

Example:
```sh
node md2pdf.mjs readme-badges.md readme-badges.pdf
```

## Run Unit Tests
```sh
npm install uvu --save-dev
node md2pdf.test.mjs
``` 