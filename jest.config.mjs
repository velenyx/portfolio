import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  rootDir: "./",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  // collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", '!src/shared/assets/**', '!src/**/index.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  moduleFileExtensions: [
    'js', 'jsx', 'ts', 'tsx', 'json', 'node'
  ],
  resetMocks: true,
  testEnvironment: 'jsdom',
}

export default createJestConfig(config)
