module.exports = {
  extends: [
    './.eslintrc-auto-import.json',
  ],
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}