module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    // We don't use prop-types
    'react/prop-types': 'off',
    // Next.JS project doesn't need declare react.
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    // sort for inside curly.
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    // sort for imports.
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'], // Built-in types are first
          'internal',
          ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
          'index', // Then the index file
          'object',
          // Then the rest: internal and external type
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: '@/**',
            group: 'external',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', // sort in ascending order. Options: ['ignore', 'asc', 'desc']
          caseInsensitive: true, // ignore case. Options: [true, false]
        },
      },
    ],
  },
};
