import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), sveltekit()],
});
