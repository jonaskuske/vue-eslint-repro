/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    // without the plugin, es2022: true is enough to parse,
    // with the plugin you also need the ecmaVersion config
    "plugin:vue/base",
  ],
  env: {
    // es2022: true,
  },
  parserOptions: {
    sourceType: "module",
    // ecmaVersion: "latest",
  },
};
