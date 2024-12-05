import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom", // Use jsdom for testing browser-like environments
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Extend Jest with additional setup
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map imports using the `@` alias
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // File extensions Jest should recognize
  testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|tsx)"], // Look for test files
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
