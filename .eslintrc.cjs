module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    // Components use documented JS props and are not yet migrated to TypeScript.
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
