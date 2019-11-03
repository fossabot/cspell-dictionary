// @ts-check
/// <reference types="@types/jest" />

/**
 * @type jest.ProjectConfig
 */
const jestConfig = {
  coverageDirectory: './__coverage__',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['jest-serializer-path'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
}

module.exports = jestConfig
