// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/core/$1",
  },
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
};
