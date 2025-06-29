# Markdown to PDF Converter

A simple Node.js tool to convert Markdown files to PDF using Puppeteer.

## Installation

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Clone and install dependencies**
   ```bash
   git clone https://github.com/integrationninjas/markdown-to-pdf.git
   cd markdown-to-pdf
   npm install
   ```

## Usage

```bash
node md2pdf.js <input.md> [output.pdf]
```

### Examples

```bash
# Convert README.md to output.pdf
node md2pdf.js README.md

# Convert README.md to custom-name.pdf
node md2pdf.js README.md custom-name.pdf
```

## Troubleshooting

### Windows Users

If you encounter "could not find chrome" error on Windows:

1. **Option 1: Install Google Chrome**
   - Download and install Chrome from: https://www.google.com/chrome/
   - Restart your terminal/command prompt

2. **Option 2: Use bundled Chromium (Recommended)**
   - The updated code now uses Puppeteer's bundled Chromium
   - No additional installation required

3. **If still having issues:**
   ```bash
   # Reinstall dependencies
   npm install
   
   # Or force reinstall Puppeteer
   npm install puppeteer --force
   ```

### Linux Users

For Ubuntu/Debian:
```bash
sudo apt update
sudo apt install chromium-browser
```

For CentOS/RHEL:
```bash
sudo yum install chromium
```

### macOS Users

```bash
brew install chromium
```

## Features

- Converts Markdown to PDF with GitHub-style formatting
- Supports all standard Markdown syntax
- Generates clean, professional-looking PDFs
- Cross-platform compatibility

## Dependencies

- **Puppeteer**: For PDF generation
- **Marked**: For Markdown parsing

## License

ISC 