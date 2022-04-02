import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dts from "vite-plugin-dts";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      name: "adofai-gg-ui",
      entry: path.resolve(__dirname, "src/index.tsx"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
