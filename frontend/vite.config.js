import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/designersworkroom.in/', // Update this to match your repo name
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome', 
        '@fortawesome/free-brands-svg-icons'
      ],
    },
    outDir: 'dist',
  },
});
