import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/components/**/*.{types,styles,test}.{ts,tsx}"],
    },
    setupFiles: ["./vitest.setup.ts"],
  },
});
