import { defineConfig } from 'vite';

export default defineConfig({
  // Build optimizations
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['locomotive-scroll'],
          animations: ['gsap', 'split-type']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2015'
  },
  
  // Development server
  server: {
    port: 3000,
    open: true
  },
  
  // Asset optimization
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
  
  // CSS preprocessing
  css: {
    devSourcemap: true
  }
});