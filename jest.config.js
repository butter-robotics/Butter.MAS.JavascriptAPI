module.exports = {
    preset: 'ts-jest',
    modulePathIgnorePatterns: [
      "build",
    ],
    testPathIgnorePatterns: [
      "node_modules"
    ],
    coverageReporters: [
      "html"
    ],
    coverageDirectory: "coverage",
  };