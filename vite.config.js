import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      buffer: 'buffer',
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis',  // <-- important for Buffer and some node libs
  },
});
