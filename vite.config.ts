/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@moonicon/svg': resolve(__dirname, 'packages/moonicon-svg'),
      '@moonicon/vue': resolve(__dirname, 'packages/moonicon-vue'),
      '@moonicon/util': resolve(__dirname, 'packages/moonicon-util')
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
    outDir: 'moonicon',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, 'packages/moonicon-vue3/src/index.ts'),
      formats: ['es']
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
