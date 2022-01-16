module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 30,
      functions: 28,
      lines: 32,
      branches: 24,
    },
  },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}
