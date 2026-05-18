import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        paper: {
          DEFAULT: "hsl(var(--paper))",
          2: "hsl(var(--paper-2))",
          3: "hsl(var(--paper-3))",
        },
        bone: "hsl(var(--bone))",
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
        },
        mute: {
          DEFAULT: "hsl(var(--mute))",
          2: "hsl(var(--mute-2))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          deep: "hsl(var(--gold-deep))",
          soft: "hsl(var(--gold-soft))",
        },
        rust: "hsl(var(--rust))",
        olive: "hsl(var(--olive))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
