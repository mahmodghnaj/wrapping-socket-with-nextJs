import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "#1d232a",
        "base-200": "#191e24",
        "base-300": "#15191e",
        "base-content": "#A6ADBB",
        primary: "#661AE6",
        "primary-content": "#ffffff",
        neutral: "#2a323c",
        "neutral-content": "#A6ADBB",
      },
    },
  },
  plugins: [],
};
export default config;
