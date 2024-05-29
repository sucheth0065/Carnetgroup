import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://locolhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
