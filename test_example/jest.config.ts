import type { Config } from "@jest/types";

const baseDir = '<rootDir>/ejemplo2/app/doubles';
const baseTestDir = '<rootDir>/ejemplo2/test/doubles';


const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    //'<rootDir>/ejemplo*/**/*.ts'
    `${baseDir}/**/*.ts`,
  ],
  testMatch: [
    `${baseTestDir}/**/*.ts`,
  ]
};

export default config;
