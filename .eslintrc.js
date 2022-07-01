module.exports = {
    extends: [
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:jest/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:import/recommended"
    ],
    plugins: ["react", "prettier", "@typescript-eslint", "jest"],
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    parserOptions: {
      project: './tsconfig.json'
    },
    rules: {
      'prettier/prettier': 'error',
      "no-return-await": "off",
      "@typescript-eslint/return-await": "error"
    }
  } 