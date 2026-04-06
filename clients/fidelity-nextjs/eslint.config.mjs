import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Ignore folders and non-source files
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/*',
    'coverage/*',
  ]),

  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/*',
      'coverage/*',
      // Ignore config files to prevent react plugin crashes
      'next.config.js',
      'next.config.ts',
      'babel.config.js',
    ],
    rules: {
      // Turn off rules that break non-React files
      'react/display-name': 'off',
    },
  },
]);
