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
          DEFAULT: "#0A1128",
          hover: "#0F1A3D",
        },
        gold: {
          DEFAULT: "#D4AF37",
          hover: "#E5C158",
        },
        background: "#FFFFFF",
        surface: "#FDFCFB",
        surface2: "#F9F7F4",
        border: "#E9E5DE",
        mutedText: "#8A8AA0",
        darkText: "#0A1128",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
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
