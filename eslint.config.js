import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: ['next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'react/no-unescaped-entities': 0,
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
  },
})
