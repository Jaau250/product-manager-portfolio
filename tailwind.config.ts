import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        panel: "#101827",
        mist: "#97A3B6",
        line: "rgba(151, 163, 182, 0.16)",
        accent: "#7DD3FC",
        ember: "#F59E0B",
        lime: "#86EFAC"
      },
      boxShadow: {
        glow: "0 25px 80px rgba(34, 211, 238, 0.16)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(125, 211, 252, 0.18), transparent 28%), radial-gradient(circle at 85% 20%, rgba(245, 158, 11, 0.14), transparent 24%), radial-gradient(circle at 60% 80%, rgba(134, 239, 172, 0.12), transparent 28%)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        }
      },
      animation: {
        drift: "drift 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
