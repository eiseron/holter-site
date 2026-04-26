import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://holter.dev",
  server: {
    host: true,
    port: 4321,
  },
});
