// A simple Node.js script to prepare files for downloading

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create output directory
const outputDir = './download';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy all documentation files
const docFiles = [
  'README.md',
  'CUSTOMIZATION.md', 
  'LICENSE',
  'WORDPRESS_INTEGRATION.md',
  'download.html'
];

docFiles.forEach(file => {
  fs.copyFileSync(file, path.join(outputDir, file));
});

console.log('📄 Documentation files prepared for download');

// Create a basic manifest file
const manifest = {
  name: 'Edge Education Template',
  version: '1.0.0',
  description: 'A complete study abroad consultancy website template',
  files: [
    ...docFiles,
    'client/',
    'server/',
    'shared/',
    'package.json',
    'tsconfig.json',
    'tailwind.config.ts',
    'postcss.config.js',
    'vite.config.ts',
    'theme.json',
    'drizzle.config.ts'
  ],
  instructions: 'See README.md for setup instructions'
};

fs.writeFileSync(
  path.join(outputDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('📦 Download package prepared successfully!');
console.log('✅ All files are available in the /template-export/download directory');