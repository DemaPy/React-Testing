import react from "@vitejs/plugin-react";
import { env } from "process";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
