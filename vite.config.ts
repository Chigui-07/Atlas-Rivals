import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Atlas-Rivals/',
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['pruebas/**/*.test.ts'],
  },
});
