import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { configDefaults } from 'vitest/config';
import { dependencies } from './package.json';

const vendor = ['react', 'react-router-dom', 'react-dom'];

function defineChunks(deps: Record<string, string>) {
  const chunks: any = {};
  Object.keys(deps).forEach((key) => {
    if ([...vendor].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  server: {
    port: 3001,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude, 'src/tests/*'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor,
          ...defineChunks(dependencies),
        },
      },
    },
  },
});
