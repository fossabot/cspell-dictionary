// @ts-check
/// <reference types="@types/babel__core" />

/**
 * @type babel.TransformOptions
 */
const babelConfig = {
  ignore: ['**/*.d.ts', '**/__fixtures__/**'],
  presets: [['slick']]
}

module.exports = babelConfig
