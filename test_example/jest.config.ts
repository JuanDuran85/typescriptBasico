import type { Config } from "@jest/types";

const baseDir = '<rootDir>/ejemplo2/app/pass_checker';
const baseTestDir = '<rootDir>/ejemplo2/test/pass_checker';


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
