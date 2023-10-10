import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      presets: [],
      plugins: []
    }
  }), nodePolyfills()],
  base: '/',
  server:{
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    https: {
      cert: fs.readFileSync('ssl/certificate.crt'),
      key: fs.readFileSync('ssl/private.key')
    }
  }
})
