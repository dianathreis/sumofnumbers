module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',  // Add this to disable ESLint rules that conflict with Prettier
    'plugin:prettier/recommended', // Enables Prettier as an ESLint rule
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'arrow-parens': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 120],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'prefer-arrow-callback': 'off',
    // If using Prettier, you can add or modify rules for formatting:
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 120 }],
  },
};