import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the default browser
    port: 3000, // Specify a custom port
  },
  resolve: {
    alias: {
      "@": "/src", // Allows the use of "@/..." as an alias for the src directory
    },
  },
  build: {
    outDir: "dist", // Output directory for the production build
    sourcemap: true, // Generate sourcemaps for easier debugging
  },
});
