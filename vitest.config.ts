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
      enabled: true,
      reporter: ['cobertura'],
      provider: 'istanbul',
    },
  },
});
