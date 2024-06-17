// See https://github.com/TypeStrong/ts-node/issues/138
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);
// add modules to ignore in array below
const esModules = [].join('|');
module.exports = {
    transformIgnorePatterns: [
        `<rootDir>/node_modules/(?!${esModules})`
    ],
    testResultsProcessor: "jest-sonar-reporter",
    testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/src/app/test/"],
    moduleDirectories: ["node_modules", 'src'],
    moduleFileExtensions: ["ts", "js", "json"],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/app/test/"
    ],
    maxWorkers: "50%",
    testTimeout: 10000,
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    collectCoverage: true,
    coverageReporters: ["json", "lcov"],
    coverageDirectory: 'coverage',
    moduleNameMapper: {
    ...moduleNameMapper,
    '@env/(.*)': '<rootDir>/src/environments/test/$1',
  }
};
