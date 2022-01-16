module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  plugins: ["react", "import", "@typescript-eslint", "react-hooks"],

  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  rules: {
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/dot-notation": "off",
  },
};
