import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrRollup from '@svgr/rollup'
import svgrPlugin from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@icons': '/src/lib/icons.ts',
    },
  },
  plugins: [
    react(),
    // vite-plugin-svgr: SVG'leri React bileşeni olarak import etmek için
    svgrPlugin(),
    // rollup svgr (opsiyonel): inline/asset kullanımları için
    svgrRollup()
  ],
  resolve: {
  }
})
