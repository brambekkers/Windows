import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import svgLoader from 'vite-svg-loader'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    vueDevTools(),
    svgLoader({
      svgo: false
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
})
