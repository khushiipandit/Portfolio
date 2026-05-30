/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cream:  "#F0EAFF",
        ink:    "#07050F",
        violet: "#7C3AED",
        purple: "#A855F7",
        pink:   "#EC4899",
        blue:   "#3B82F6",
        cyan:   "#06B6D4",
        blush:  "#F9A8D4",
        // keep legacy aliases so existing className refs still compile
        rose:   "#A855F7",
        gold:   "#EC4899",
        sage:   "#3B82F6",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};
