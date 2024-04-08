import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD125",
        secondary: "#019843",
        "secondary-dark": "#1A2921",
        light: "#F7F8F8",
        font: "#1C1C1C",
        "background-dark": "#111B16",
        "background-light": "#F7F3E5BF",
      },
      backgroundImage: {
        skeleton:
          "linear-gradient(0deg, rgba(28, 28, 28, 0.35) 0%, rgba(28, 28, 28, 0.35) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)",
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translate(0%)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
