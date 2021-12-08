module.exports = {
  automock: false,
  bail: 6,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
 coverageProvider: "babel",
  coverageReporters: [
  "json",
   "text"
  ],
  globals: {},
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
  "js",
  "json",
  "jsx",
  "ts",
  "tsx",
  "node"
  ],
  roots: [
    "src"
  ],
  testEnvironment: "node",
  testMatch: [
     "**/__tests__/**/*.js?(x)",
     "**/?(*.)+(Int).js?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|@fortawesome)/).*/"
  ],
  testRunner: "jest-circus/runner"
};
