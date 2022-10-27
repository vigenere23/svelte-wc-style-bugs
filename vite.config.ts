import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteDefaultConfig from "./svelte.config.js";

export default defineConfig({
  plugins: [
    svelte({
      ...svelteDefaultConfig,
      compilerOptions: {
        customElement: true,
      },
      include: /\.wc\.svelte$/,
    }),
    svelte({
      ...svelteDefaultConfig,
      compilerOptions: {
        customElement: false,
      },
      exclude: /\.wc\.svelte$/,
    }),
  ],
});
