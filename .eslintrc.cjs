module.exports = {
  root: true,
  extends: ['@iszf-microfrontends/eslint-config'],
  ignorePatterns: ['dist', 'coverage', '.eslintrc.cjs', 'rollup.config.js'],
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
