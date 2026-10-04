import { defineConfig } from 'vitest/config';
import compiled from '@compiled/vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base: '/',
  plugins: [
    compiled({ transformerBabelPlugins: [['@atlaskit/tokens/babel-plugin']], extract: true }),
    react(),
    tailwindcss(),
  ],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});
