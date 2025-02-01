import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1EAEDB",
          hover: "#1a9cc4",
        },
        cyber: {
          DEFAULT: "#8B5CF6",
          hover: "#7c4ef3",
        },
        eco: {
          DEFAULT: "#4ADE80",
          hover: "#22c55e",
        },
        glass: "rgba(255, 255, 255, 0.1)",
        panel: "#1A1F2C",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #1A1F2C, #2A3441)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(30, 174, 219, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(30, 174, 219, 0.8)' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;