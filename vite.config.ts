/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [
        react(),
        dts({
          include: ["src"],
          exclude: [
            "src/**/*.test.tsx",
            "src/**/*.test.ts",
            "src/**/*.stories.tsx",
          ],
        }),
      ],
      build: {
        lib: {
          entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
          name: "BlipCardsReact",
          formats: ["es", "umd"],
          fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
    },
  };
});
