import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), VitePWA(), tsconfigPaths(), checker({ typescript: true })],
  server: {
    host: true,
  },
  publicDir: "public",
});
