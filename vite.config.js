// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for the project.
 * 
 * Configures the Vite build process with the following settings:
 * - Uses the React plugin for handling React components.
 * - Sets the base URL for the application to '/personal-website/'.
 * - Outputs the build to the 'docs' directory.
 * - Places assets at the root of the build directory.
 * - Loads environment variables for both development and production.
 */
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: '/personal-website/',
    build: {
      outDir: 'docs',
      assetsDir: './', // This ensures assets are placed in the root of the build directory
    },
    // Pass environment variables to the client
    define: {
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY)
    }
  };
});