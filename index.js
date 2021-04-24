module.exports = {
  plugins: ['ava', 'prettier'],
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  globals: {
    _: true,
    test: true,
    runningLog: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './.babelrc',
    },
  },
  rules: {
    'no-confusing-arrow': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'comma-dangle': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'max-len': [
      'error',
      {
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        comments: 100,
        code: 100,
      },
    ],
  },
};
