import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#2D5016",
          dark: "#1E3A0E",
          light: "#4A7A2B",
          muted: "#EAF2E2"
        },
        gold: {
          DEFAULT: "#C9A961",
          dark: "#A98842",
          light: "#E7D5A8",
          muted: "#F7F0DD"
        },
        cream: "#FAF7F2",
        ink: "#1A1A1A"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "translateY(-24px) rotate(12deg)", opacity: "1" }
        }
      },
      animation: {
        "gradient-pan": "gradient-pan 14s ease infinite",
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
