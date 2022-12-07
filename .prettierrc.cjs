/** @type {import('prettier').Config} */
module.exports = {
  bracketSameLine: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,

  pluginSearchDirs: false,
  plugins: [
    require('prettier-plugin-packagejson'),
    require('./.prettier-plugins-workaround.cjs'),
  ],

  overrides: [
    {
      files: '.prettierrc.cjs',
      options: {
        printWidth: 80,
      },
    },
  ],
}
