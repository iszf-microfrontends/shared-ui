module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', 'coverage', 'rollup.config.js', '.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',

    'react/react-in-jsx-scope': 'off',

    'import/no-named-as-default-member': 'off',
    'import/export': 'off',
    'import/no-named-as-default': 'off',
    'import/newline-after-import': 'error',

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react'],
          ['^@?\\w'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^.+\\.?(css|scss)$'],
        ],
      },
    ],

    'no-console': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-template': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['src/**/*.test.{ts,tsx}'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
};
