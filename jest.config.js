// @ts-check

/**
 * @type Partial<jest.ProjectConfig>
 */
const config = {}

Object.assign(config, {
  coverageDirectory: './__coverage__',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['jest-serializer-path'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
})

module.exports = config
