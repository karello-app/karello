import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/your-repo-name/' if deploying to a subpath
  build: {
    outDir: 'dist', // ✅ Important: Must NOT be '/'!
  },
  publicDir: 'public',
})
