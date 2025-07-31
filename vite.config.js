// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for the personal website.
 * - Uses the React plugin for Vite.
 * - Sets the base path for deployed assets.
 * - Outputs the build to the 'docs' directory.
 * - Places assets at the root of the build directory.
 */
export default defineConfig({
  plugins: [react()],
  base: '/personal-website/',
  build: {
    outDir: 'docs',
    assetsDir: './', // This ensures assets are placed in the root of the build directory
  },
});