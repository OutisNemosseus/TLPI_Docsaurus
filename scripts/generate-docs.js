#!/usr/bin/env node
/**
 * Generate Docusaurus MDX documentation pages from TLPI source files
 * Uses iframe to embed Monaco Editor HTML pages
 */

const fs = require('fs');
const path = require('path');

const TLPI_DIR = path.join(__dirname, '..', 'tlpi-dist');
const DOCS_DIR = path.join(__dirname, '..', 'docs');

const FILE_TYPES = {
  '.c': { label: 'C Source', lang: 'c' },
  '.h': { label: 'C Header', lang: 'c' },
  '.sh': { label: 'Shell Script', lang: 'bash' },
};

function generateMdx(filename, category, config) {
  const title = filename.replace(/\.[^.]+$/, '');
  const iframeSrc = `/code-pages/${category}/${filename}.html`;

  return `---
sidebar_label: "${filename}"
title: "${filename}"
description: "${config.label} from ${category}"
---

# ${filename}

**Category:** \`${category}\` | **Type:** ${config.label}

<iframe
  src="${iframeSrc}"
  width="100%"
  height="700px"
  style={{border: '1px solid #333', borderRadius: '8px'}}
  title="${filename} - Monaco Editor"
/>

`;
}

function findFiles(dir, baseDir) {
  baseDir = baseDir || dir;
  const files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...findFiles(fullPath, baseDir));
      } else {
        const ext = path.extname(item).toLowerCase();
        if (FILE_TYPES[ext]) {
          const relDir = path.relative(baseDir, dir);
          files.push({
            fullPath,
            filename: item,
            ext,
            category: relDir || 'lib',
            slug: item.replace(/\./g, '-').toLowerCase()
          });
        }
      }
    }
  } catch (e) {
    console.error('Error reading directory:', e.message);
  }
  return files;
}

function generateSidebars(files) {
  const grouped = {};
  files.forEach(f => {
    if (!grouped[f.category]) grouped[f.category] = [];
    grouped[f.category].push(f);
  });

  const categories = Object.keys(grouped).sort();

  const sidebarItems = categories.map(cat => {
    const catFiles = grouped[cat].sort((a, b) => a.filename.localeCompare(b.filename));
    return {
      type: 'category',
      label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' '),
      items: catFiles.map(f => `${cat}/${f.slug}`)
    };
  });

  return `/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Source Code',
      collapsed: false,
      items: ${JSON.stringify(sidebarItems, null, 6).replace(/"/g, "'").replace(/\n/g, '\n    ')}
    }
  ],
};

module.exports = sidebars;
`;
}

function main() {
  console.log('TLPI Docs Generator');
  console.log('===================\n');

  if (!fs.existsSync(TLPI_DIR)) {
    console.error('Error: tlpi-dist not found at', TLPI_DIR);
    process.exit(1);
  }

  // Clean docs directory (except intro.md)
  if (fs.existsSync(DOCS_DIR)) {
    const items = fs.readdirSync(DOCS_DIR);
    for (const item of items) {
      if (item !== 'intro.md') {
        const itemPath = path.join(DOCS_DIR, item);
        fs.rmSync(itemPath, { recursive: true, force: true });
      }
    }
  } else {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }

  console.log('Scanning', TLPI_DIR, '...');
  const files = findFiles(TLPI_DIR);
  console.log('Found', files.length, 'files\n');

  let generated = 0;
  for (const file of files) {
    try {
      const config = FILE_TYPES[file.ext];
      const mdx = generateMdx(file.filename, file.category, config);

      const outDir = path.join(DOCS_DIR, file.category);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }

      fs.writeFileSync(path.join(outDir, file.slug + '.mdx'), mdx);
      generated++;
      console.log('Generated:', file.category + '/' + file.slug + '.mdx');
    } catch (err) {
      console.error('Error:', file.filename, '-', err.message);
    }
  }

  // Generate sidebars.js
  console.log('\nGenerating sidebars.js...');
  const sidebarsContent = generateSidebars(files);
  fs.writeFileSync(path.join(__dirname, '..', 'sidebars.js'), sidebarsContent);

  console.log('\n===================');
  console.log('Generated', generated, 'MDX documentation pages with Monaco iframe embeds');
  console.log('Output:', DOCS_DIR);
}

main();
