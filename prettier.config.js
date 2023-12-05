/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'es5',
  arrowParens: 'always',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  jsxSingleQuote: false,
  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 360,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}

module.exports = config
