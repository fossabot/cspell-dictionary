// @ts-check
/// <reference types="@types/prettier" />

/**
 * @type Options
 */
const prettierConfig = {
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity":"css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "parser": "typescript",
  "printWidth": 80,
  "proseWrap": "preserve",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false
}

module.exports = prettierConfig