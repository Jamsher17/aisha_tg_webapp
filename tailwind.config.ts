import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        appOrange: "#F9E5D1",
        appGrayBg: "#F3F3F3",
      },
    },
    fontFamily: {
      dekko: ["Dekko", "cursive"],
    },
  },
  plugins: [],
} satisfies Config;
