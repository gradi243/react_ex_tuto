import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
function tailwindcss(): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}

