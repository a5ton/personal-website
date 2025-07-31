import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for the project.
 * 
 * - Uses React plugin
 * - Outputs build to 'docs' for GitHub Pages
 * - Sets correct base path for deployment to /personal-website/
 * - Loads environment variables automatically via VITE_ prefix
 */
export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode (optional if you rely on Vite's default behaviour)
  loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/personal-website/',
    build: {
      outDir: 'docs',
      assetsDir: '', // Places assets in the root of the output directory
    }
  };
});