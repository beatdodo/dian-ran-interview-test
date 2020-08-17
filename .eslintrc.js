module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    'vue/no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'no-undef': 'off',
    // 沒用到的參數
    'no-unused-vars': 'off',
    'camelcase': 'off'
  }
}
