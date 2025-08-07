import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // هشدار بده
      emitError: false, // ولی خطا نده که development قطع نشه
    }),
  ],
  base: "/WorldWise",
});
