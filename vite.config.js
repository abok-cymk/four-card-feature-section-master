import { defineConfig } from "vite"

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  base: "/four-card-feature-section-master",
});