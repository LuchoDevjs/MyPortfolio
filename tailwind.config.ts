import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noiseWhite: "url('/assets/background/NoisyWhite.png')",
        noiseBlack: "url('/assets/background/NoisyBlack.png')",
      },
      maxWidth: {
        "8xl": "1165px",
      },
      colors: {
        "dark-bg": "#000000",
        "light-bg": "#ffffff",
        "primary-light": "#0C0C0C",
        "secondary-light": "#5F5F5F",
        "primary-dark": "#fafafa",
        "secondary-dark": "#7d7d7d",
      },
    },
  },
  plugins: [],
};
export default config;
