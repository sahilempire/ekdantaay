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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dental clinic theme colors
        dental: {
          orange: "#FF6B35",
          teal: "#2D7D7D",
          lightBlue: "#87CEEB",
          darkGray: "#2C3E50",
          cream: "#FDF5E6",
        },
      },
      fontFamily: {
        hindi: ["Noto Sans Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

