import { heroui } from "@heroui/theme";
import { cambrianTheme } from "cambrian-ds";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/system/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/cambrian-ds/dist/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: cambrianTheme.themes,
    defaultTheme: cambrianTheme.defaultTheme,
    defaultExtendTheme: cambrianTheme.defaultExtendTheme
  })],
};