import { fileURLToPath, URL } from 'node:url'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'
import VueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  build: {

    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {

          let extType = assetInfo.name?.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType as string)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // experimentalMinChunkSize: 20 * 1024,
        // manualChunks(id) {
        //   if (
        //     ['vue/', '@vue/', 'vue-', 'pinia', '@vueuse/'].some(part => id.includes('node_modules/' + part)) ||
        //     id === '\0plugin-vue:export-helper'
        //   ) return 'vendor'
        //   if (id.includes('src/apps')) return 'apps'
        // }
      }
    }
  },
  plugins: [
    VueDevTools(),
    splitVendorChunkPlugin(),
    Vue(),
    Vuetify({ autoImport: true, styles: command === 'serve' || mode === 'development' ? 'sass' : true, }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    
    WebfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
    ])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  optimizeDeps: {
    include: [
      'vue',
    ],
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue']
  }
}))
