import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noiseWhite: "url('/assets/NoisyWhite.png')",
        noiseBlack: "url('/assets/NoisyBlack.png')",
      },
      maxWidth: {
        "8xl": "1165px",
      },
      colors: {
        primary: "#0C0C0C",
        secondary: "#5F5F5F",
      },
    },
  },
  plugins: [],
};
export default config;
