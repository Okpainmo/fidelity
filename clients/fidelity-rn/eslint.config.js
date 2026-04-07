// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      'coverage/*',
      '.expo/*',
      'android/*',
      // Ignore config files
      'babel.config.js',
      'metro.config.js',
    ],
    rules: {
      'react/display-name': 'off',
    },
  },
]);
