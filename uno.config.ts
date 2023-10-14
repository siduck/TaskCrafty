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

  rules: [
    ["lighten", { filter: "brightness(1.3)" }],
    ["lighten2", { filter: "brightness(1.1)" }],
    ["darken", { filter: "brightness(0.95)" }],
    ["nocolor", { filter: "brightness(1)" }],
  ],
});
