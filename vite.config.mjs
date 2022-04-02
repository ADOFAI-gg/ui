import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dts from "vite-plugin-dts";
import svgr from "@svgr/rollup";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      name: "adofai-gg-ui",
      entry: path.resolve(fileURLToPath(import.meta.url), "../src/index.tsx"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(fileURLToPath(import.meta.url), "../src"),
    },
  },
});
