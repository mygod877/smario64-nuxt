module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "prettier", "prettier/vue", "plugin:prettier/recommended", "plugin:nuxt/recommended"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 140,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        arrowParens: "always",
        endOfLine: "crlf",
      },
    ],
  },
}
