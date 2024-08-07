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
        primary: "#FF0000",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(#000, #000) center/2px 100% no-repeat",
      },
      fontFamily: {
        display: "var(--font-display)",
        primary: "var(--font-primary)",
      },
    },
  },
  plugins: [],
};
export default config;
