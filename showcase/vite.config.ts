import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// The showcase imports the system the way an app would, by package name.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@cambrian/design-system': fileURLToPath(new URL('../src/index.ts', import.meta.url)) },
  },
  server: { port: 5174, strictPort: true },
});
