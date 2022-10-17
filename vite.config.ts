/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pug-fmt',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    target: ['es2019', 'node14.6'],
  },
  plugins: [dts()],
});
