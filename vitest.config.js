/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    exclude: [
      'tests/e2e/**',
      'node_modules/**',
      'dist/**'
    ],
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/test/**',
        'src/**/*.test.{js,jsx}',
        'src/**/__tests__/**'
      ]
    },
    testTimeout: 20000,
    hookTimeout: 15000
  }
})