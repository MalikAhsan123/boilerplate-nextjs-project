#!/usr/bin/env node
/**
 * Initialize a new project from this boilerplate.
 * Usage: npm run init:project -- "My App Name"
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const appName = process.argv[2]?.trim();

if (!appName) {
  console.error('Usage: npm run init:project -- "My App Name"');
  process.exit(1);
}

const packageSlug = appName
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const packageJsonPath = join(root, 'package.json');
const appConfigPath = join(root, 'src', 'config.ts');

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
packageJson.name = packageSlug;
writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

let appConfig = readFileSync(appConfigPath, 'utf8');
appConfig = appConfig.replace(
  /export const APP_NAME = '.*';/,
  `export const APP_NAME = '${appName.replace(/'/g, "\\'")}';`,
);
writeFileSync(appConfigPath, appConfig);

console.log(`\nProject initialized: ${appName}`);
console.log(`  package name: ${packageSlug}`);
console.log('\nNext steps:');
console.log('  1. cp .env.example .env.local');
console.log('  2. Update src/config.ts (description, sidebar links)');
console.log('  3. Add RTK Query endpoints in src/store/api/ for your backend');
console.log('  4. npm run dev\n');
