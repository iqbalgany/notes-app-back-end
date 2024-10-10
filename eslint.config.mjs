import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import globals from 'globals';


export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
];