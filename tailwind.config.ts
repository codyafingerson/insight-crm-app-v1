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
        'light-blue': '#158ff9',
        'cyan-blue': '#00fefb',
        'insight-blue': '#1593f9'
      }
    },
  },
  plugins: [],
};
export default config;
