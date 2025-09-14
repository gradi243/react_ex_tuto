import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import t

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
