import { screens } from "./libraries/screens";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./scaffold/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: { 'inria-sans': ['var(--inria-sans'] },
      colors: {
        default: '#07161e',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'primary-gradient': `linear-gradient(
      319deg,
      rgba(4, 97, 154, 1) 11%,
      rgba(51, 105, 55, 1) 89%
    );`
      },
      screens: {
        '3xl': `${screens["3xl"]}px`
      },
    },
  },
  plugins: [],
};
export default config;
