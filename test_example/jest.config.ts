import type { Config } from "@jest/types";

const baseDir = '<rootDir>/ejemplo4/src';
const baseTestDir = '<rootDir>/ejemplo4/test';


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
