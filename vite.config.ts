import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1234,
  },
  define: {
    process: {
      env: {
        NODE_ENV: JSON.stringify("development"),
        VITE_APP_VERSION: JSON.stringify("1.0.0"),
      },
    },
  },
  preview: {
    headers: {
      "Cache-Control": "max-age=9000000",
    },
  },
});

