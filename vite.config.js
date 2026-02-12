import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //start get data in chrome
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://fakestoreapi.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
    //end get data in chrome

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
})
