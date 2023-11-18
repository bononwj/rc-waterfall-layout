import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/WaterfallLayout/index.tsx",
      name: "rc-waterfall-layout",
      fileName: (format) => `rc-waterfall-layout.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    outDir: "lib",
  },
});
