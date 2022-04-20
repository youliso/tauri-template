const { defineConfig } = require('vite');
const macrosPlugin = require('vite-plugin-babel-macros').default;
const { resolve } = require('path');
const root = resolve('src-view');
const outDir = resolve('dist');
// https://vitejs.dev/config/
module.exports = defineConfig({
  mode: process.env['viteMode'] || 'production',
  root,
  base: './',
  esbuild: {
    jsxInject: `import {h,f} from '@/common/h'`,
    jsxFactory: 'h',
    jsxFragment: 'f'
  },
  server: {
    host: '::'
  },
  build: {
    outDir,
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': root
    }
  },
  plugins: [macrosPlugin()]
});
