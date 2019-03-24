module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
};
