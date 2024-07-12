import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import 'leaflet/dist/leaflet.css';
          @import 'leaflet-geosearch/dist/geosearch.css';
        `,
      },
    },
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
