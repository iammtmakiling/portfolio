import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '375px',
      'ss': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
        fontFamily: {
          chakraPetch: ['"Chakra Petch"', "sans-serif"],
          sans : ['"Noto Sans"', "sans-serif"],
        },
        colors: {
          base: {
              'black': "#060606",
              brown: "#1D150A",
              'lightBrown': "#C38531",
              yellow : "#D19C28",
              white : "#EFEFEF",
              grey : "#AEA696",
          },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
