module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "airbnb-base",
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "max-len": 0,
    "semi": 0,
    "linebreak-style": 0,
    "space-before-function-paren": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "no-shadow": 0,
    "func-names": 0,
    "no-unused-vars": 0,
    "prefer-const": 0,
    "no-mixed-operators": 0,
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0
  }
}
