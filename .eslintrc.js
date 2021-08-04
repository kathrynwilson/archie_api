module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  ignorePatterns: ['sequelize-mssql/'],
  rules: {
    'array-bracket-newline': [1, { "multiline": true }],
    'import/no-unresolved': 0,
    'import/no-unassigned-import': 0,
    'multiline-ternary': 0, //['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    // 'consistent-return': 'error',
    // 'function-paren-newline': 0,
    'no-unused-vars': [1, { args: 'none' }],
    'no-var': 'error',
    'no-console': 1,
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 0,
    // 'padding-line-between-statements': [
    //   'warn',
    //   { blankLine: 'always', prev: '*', next: 'function' },
    //   { blankLine: 'always', prev: '*', next: 'return' }
    // ],
    'no-undef': 2,
    'no-unused-vars': [1, { args: 'none' }],
    'no-var': 'error',
    quotes: ['error', 'backtick'],
    semi: ['error', 'never'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'space-before-function-paren': 0,
    'spaced-comment': 1,
    'comma-dangle': [1, 'always-multiline'],
    camelcase: [1]
  }
}
