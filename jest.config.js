module.exports = {
  testEnvironment: '@edge-runtime/jest-environment',
  testMatch: ['**/test/**/*.+(ts|tsx|js)', '**/src/**/(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
  },
}
