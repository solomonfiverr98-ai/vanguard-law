import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          hover: "#243558",
        },
        gold: {
          DEFAULT: "#C9A84C",
          hover: "#D4B660",
        },
        background: "#FFFFFF",
        surface: "#F8F7F5",
        surface2: "#F0EDE8",
        border: "#E5E2DC",
        mutedText: "#8A8AA0",
        darkText: "#1A1A2E",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      animation: {
        pulseOpacity: 'pulseOpacity 4s ease-in-out infinite',
      },
      keyframes: {
        pulseOpacity: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
