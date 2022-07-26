module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'vue',
    'jest',
    'markdown',
    'simple-import-sort',
    'import',
    'modules-newline',
    'json-format',
  ],
  // add your custom rules here
  rules: {
    'vue/max-len': [
      'error',
      {
        code: 130,
        template: 130,
      },
    ],
    'no-empty-pattern': 'off',
    'modules-newline/import-declaration-newline': 'error',
    'modules-newline/export-declaration-newline': 'error',
    'newline-per-chained-call': 'error',
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        minProperties: 1,
      },
    ],
    'array-element-newline': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'func-names': 'off',
    'simple-import-sort/imports': 'error',
    'import/order': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/no-unresolved': [
      'off',
    ],
    'import/prefer-default-export': [
      'off',
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/html-closing-bracket-newline': [
      'off',
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    camelcase: [
      'off',
    ],
    'class-methods-use-this': [
      'off',
    ],
    'global-require': [
      'off',
    ],
    'import/no-dynamic-require': [
      'off',
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'commit',
      },
    ],
    'max-len': [
      'error',
      {
        code: 130,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '="\\$t\\(',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
    ],
    'vue/component-definition-name-casing': [
      'error',
      'kebab-case',
    ],
    'no-shadow': [
      2,
      {
        allow: [
          'state',
          'getters',
        ],
      },
    ],
    'vue/valid-v-slot': [
      'off',
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          [
            'delimiters',
            'comments',
          ],
          [
            'components',
            'directives',
            'filters',
          ],
          'extends',
          'mixins',
          'beforeRouteEnter',
          'beforeRouteUpdate',
          'beforeRouteLeave',
          'middleware',
          'validate',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData',
          ],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          'layout',
          [
            'template',
            'render',
          ],
          'renderError',
          'transition',
          'loading',
          'scrollToTop',
        ],
      },
    ],
    'jest/no-commented-out-tests': 'off',
    'jest/expect-expect': 'off',
    'jest/no-mocks-import': 'off',
    'jest/valid-expect': 'off',
    'jest/no-standalone-expect': 'off',
  },
};
