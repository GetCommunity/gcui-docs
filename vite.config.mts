import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    // devtools(), https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    exclude: ['@storybook/html-vite'],
  },
});
