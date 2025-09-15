import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eco-green-light": "#69e29aff", // light green young leaf color
        "eco-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
