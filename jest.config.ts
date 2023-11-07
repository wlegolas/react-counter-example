import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default jestConfig;
