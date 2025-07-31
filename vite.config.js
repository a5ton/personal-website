// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal-website/',
  build: {
    outDir: 'docs', // ✅ THIS is the important line
  },
});