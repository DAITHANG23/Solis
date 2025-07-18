/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        success: "rgba(var(--success))",
        error: "rgba(var(--error))",
        warning: "rgba(var(--warning))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "primary-text": "rgba(var(--primary-text))",
        "secondary-text": "rgba(var(--secondary-text))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
