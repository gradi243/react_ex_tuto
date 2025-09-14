import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssPlugin from 'tailwindcss';
import postcss from 'postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
function tailwindcss(): import("vite").PluginOption {
  return {
    name: 'vite:tailwindcss',
    async transform(code, id) {
      if (!id.endsWith('.css')) return;
      const result = await postcss([tailwindcssPlugin]).process(code, { from: id });
      return {
        code: result.css,
        map: result.map ? result.map.toJSON() : null,
      };
    },
  };
}

