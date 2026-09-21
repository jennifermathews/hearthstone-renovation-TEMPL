import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#fef9f0" },
          100: { value: "#fdf0da" },
          200: { value: "#fbe0b4" },
          300: { value: "#f7c878" },
          400: { value: "#f2a93b" },
          500: { value: "#e8920f" },
          600: { value: "#c9750a" },
          700: { value: "#a7590b" },
          800: { value: "#884710" },
          900: { value: "#6f3b10" },
          950: { value: "#3d1d05" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.600}" },
          contrast: { value: "#ffffff" },
          fg: { value: { base: "{colors.brand.700}", _dark: "{colors.brand.300}" } },
          muted: { value: { base: "{colors.brand.100}", _dark: "{colors.brand.900}" } },
          subtle: { value: { base: "{colors.brand.50}", _dark: "{colors.brand.950}" } },
          emphasized: { value: { base: "{colors.brand.200}", _dark: "{colors.brand.800}" } },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
  globalCss: {
    "html": {
      scrollBehavior: "smooth",
    },
    "body": {
      overflowX: "hidden",
    },
  },
})

export const system = createSystem(defaultConfig, config)
