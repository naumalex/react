import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/tests/setup.ts',
    coverage: {
      exclude: [...configDefaults.exclude, 'build/*', '*.mjs', '*.cjs'],
      provider: 'istanbul',
      reporter: ['text', 'html', 'clover', 'json', 'cobertura'],
    },
    reporters: ['junit'],
    outputFile: './reports/junit.xml',
  },
});
