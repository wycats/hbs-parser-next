module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  ignorePatterns: ["dist/", "node_modules/", "!.*"],
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        directory: ["{src,tests,docs}/tsconfig.json"],
      },
      webpack: true,
    },
  },
  overrides: [
    {
      files: ["**/*.ts"],
      plugins: ["@glimmerx", "@typescript-eslint", "prettier"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      rules: {
        "@glimmerx/template-vars": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
        "import/export": "off",
        "import/no-cycle": ["error"],
        "prefer-const": "off",
        "no-constant-condition": [
          "error",
          {
            checkLoops: false,
          },
        ],
        "@typescript-eslint/no-explicit-any": [
          "error",
          { ignoreRestArgs: true },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: false, variables: false },
        ],
      },
    },
  ],
};
