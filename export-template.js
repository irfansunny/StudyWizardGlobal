// Export Template Script
// This script will create a downloadable template package

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportDir = path.join(__dirname, 'template-export');
const downloadDir = path.join(exportDir, 'download');

// Create directories if they don't exist
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Function to copy a file
function copyFile(source, destination) {
  try {
    fs.copyFileSync(source, destination);
    console.log(`✅ Copied: ${path.basename(source)}`);
  } catch (err) {
    console.error(`❌ Error copying ${source}: ${err.message}`);
  }
}

// Function to copy a directory recursively
function copyDirectory(source, destination) {
  try {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    
    const entries = fs.readdirSync(source, { withFileTypes: true });
    
    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules and other build directories
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') {
          continue;
        }
        copyDirectory(sourcePath, destPath);
      } else {
        copyFile(sourcePath, destPath);
      }
    }
    
    console.log(`✅ Copied directory: ${path.basename(source)}`);
  } catch (err) {
    console.error(`❌ Error copying directory ${source}: ${err.message}`);
  }
}

console.log('🚀 Starting template export...');

// Copy documentation files
const docFiles = [
  path.join(exportDir, 'README.md'),
  path.join(exportDir, 'CUSTOMIZATION.md'),
  path.join(exportDir, 'LICENSE'),
  path.join(exportDir, 'WORDPRESS_INTEGRATION.md'),
  path.join(exportDir, 'download.html'),
  path.join(exportDir, 'setup.sh')
];

docFiles.forEach(file => {
  if (fs.existsSync(file)) {
    copyFile(file, path.join(downloadDir, path.basename(file)));
  } else {
    console.warn(`⚠️ Warning: ${path.basename(file)} does not exist`);
  }
});

// Copy project directories and files
const projectFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'postcss.config.js',
  'vite.config.ts',
  'theme.json',
  'drizzle.config.ts'
];

const templateDir = path.join(downloadDir, 'edge-education-template');
if (!fs.existsSync(templateDir)) {
  fs.mkdirSync(templateDir, { recursive: true });
}

// Copy project files
projectFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    copyFile(path.join(__dirname, file), path.join(templateDir, file));
  } else {
    console.warn(`⚠️ Warning: ${file} does not exist`);
  }
});

// Copy project directories
const projectDirs = [
  'client',
  'server',
  'shared'
];

projectDirs.forEach(dir => {
  if (fs.existsSync(path.join(__dirname, dir))) {
    copyDirectory(path.join(__dirname, dir), path.join(templateDir, dir));
  } else {
    console.warn(`⚠️ Warning: ${dir} directory does not exist`);
  }
});

// Copy Edge Education logo for documentation
if (fs.existsSync(path.join(__dirname, 'attached_assets', 'Logo.png'))) {
  const logoDir = path.join(downloadDir, 'assets');
  if (!fs.existsSync(logoDir)) {
    fs.mkdirSync(logoDir, { recursive: true });
  }
  copyFile(
    path.join(__dirname, 'attached_assets', 'Logo.png'), 
    path.join(logoDir, 'edge-education-logo.png')
  );
}

// Create index.html in the download directory
copyFile(
  path.join(exportDir, 'download', 'index.html'),
  path.join(downloadDir, 'index.html')
);

console.log('\n✅ Template export completed successfully!');
console.log(`📁 Files are available in: ${downloadDir}`);
console.log('🌐 To view the download page, open index.html in your browser.');