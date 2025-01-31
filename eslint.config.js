import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules', 'dist'] },
  {
    extends: [pluginJs.configs.recommended, eslintPluginPrettier],
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
    linterOptions: {
      noInlineConfig: true,
    },
  },
];
