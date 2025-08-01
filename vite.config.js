import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/', // ✅ Correct for custom domain
    build: {
      outDir: 'docs',
      assetsDir: '', // Optional but fine
    }
  };
});