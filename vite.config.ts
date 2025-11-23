import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',  // Keeps your custom domain working
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // KEYS REMOVED HERE
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});