import { defineConfig } from 'vite';
// base relativa: funciona igual en localhost y en GitHub Pages (/<repo>/)
export default defineConfig({ base: './', server: { port: 5173, open: false }, build: { target: 'es2022', chunkSizeWarningLimit: 2000 } });
