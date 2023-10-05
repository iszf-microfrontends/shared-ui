module.exports = {
  root: true,
  extends: ['@iszf-microfrontends/eslint-config'],
  ignorePatterns: ['rollup.config.js'],
  rules: {
    'import/export': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.{ts,tsx}'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
};
