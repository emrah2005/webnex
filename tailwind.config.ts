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
        brand: {
          navy: "#0A1A3D",
          navyDark: "#061129",
          blue: "#009DFF",
          blueLight: "#33B1FF",
        },
        navy: {
          950: "#05080F",
          900: "#0A0F1C",
          800: "#0F1629",
          700: "#151D35",
          600: "#1C2647",
        },
        blue: {
          500: "#009DFF",
          400: "#33B1FF",
          300: "#66C5FF",
        },
        muted: {
          500: "#8A93A8",
          400: "#A6AEC0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 157, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 157, 255, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "48px 48px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "line-draw": "lineDraw 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        lineDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
