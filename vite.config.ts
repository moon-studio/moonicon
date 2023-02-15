/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@moon-form/svg': resolve(__dirname, 'packages/moon-form-svg'),
      '@moon-form/vue': resolve(__dirname, 'packages/moon-form-vue'),
      '@moon-form/util': resolve(__dirname, 'packages/moon-form-util')
    }
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    }),
    AutoImport({
      imports: ['vitest'],
      dts: true
    })
  ],
  build: {
    outDir: 'moon-icon',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, 'packages/moon-icon-vue3/src/index.ts'),
      formats: ['es']
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
