import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerDirectives,
} from "unocss";

import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),

    presetIcons({
      scale: 1.3,
    }),
  ],

  transformers: [transformerDirectives()],
  extractors: [extractorSvelte()],

  theme: {
    colors: {
      primary: "#4253F0",
      black: "#1E293B",
      blackAlt: "#334155",
      pale: "#F6F8FB",
      softWhite: "#F9FAFB",
    },
  },
});
