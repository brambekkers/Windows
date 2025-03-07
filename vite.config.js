import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

const autoImportConfig = {
  dts: './src/auto-imports.d.ts',
  eslintrc: {
    enabled: true, // <-- this
  },
  imports: [
    'vue',
    'pinia',
    '@vueuse/core'
  ],
  dirs: [
    'src/composables',
    'src/stores',
    'src/utils',
    'src/types',
  ]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    vueDevTools(),
    svgLoader({ svgo: false }),
    AutoImport(autoImportConfig)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
