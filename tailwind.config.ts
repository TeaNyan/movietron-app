import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sw-dark": "#1d1d1d", // Dark background color
        "sw-metallic": "#3c3c3c", // Metallic color for headers
        "sw-light": "#c5c5c5", // Light color for text
        "sw-highlight": "#ffe81f", // Highlight color
        "sw-input-bg": "#2a2a2a", // Input background color
        "sw-input-text": "#ffffff", // Input text color
      },
    },
  },
  plugins: [],
};
export default config;
