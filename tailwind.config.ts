import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "charcoal-navy": "#181F31",
        "powder-blue": "#D5E8FF",
        "primary-blue": '#0084FF'
      },
      colors: {
        "black-60": "#00000099",
        "primary-blue": '#0084FF'
      },
      borderColor:{
        "black-60": "#00000099"
      }
    },
  },
  plugins: [],
} satisfies Config;
