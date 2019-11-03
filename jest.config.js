// @ts-check
/// <reference types="@types/jest" />

/**
 * @type jest.ProjectConfig
 */
const config = {
  coverageDirectory: './__coverage__',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['jest-serializer-path'],
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
}

module.exports = config
