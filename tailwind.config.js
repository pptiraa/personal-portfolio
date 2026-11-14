/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4BB8FA",
          50: "#EFF9FF",
          100: "#DEF2FE",
          200: "#B8E6FD",
          300: "#8FD8FC",
          400: "#67CAFB",
          500: "#4BB8FA",
          600: "#1E9FE0",
          700: "#1580B8",
          800: "#106491",
          900: "#0C4A6E",
        },
        accent: {
          DEFAULT: "#7C6FF0",
          light: "#EFECFE",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          muted: "#64748B",
          faint: "#94A3B8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F7FAFC",
          line: "#E7EDF3",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl2: "18px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        softer: "0 2px 12px -2px rgba(15, 23, 42, 0.06)",
        card: "0 8px 30px -6px rgba(15, 23, 42, 0.1)",
        glow: "0 0 0 1px rgba(75,184,250,0.15), 0 12px 40px -8px rgba(75,184,250,0.35)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        dash: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.8s ease both",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        dash: "dash 1.4s ease forwards",
      },
    },
  },
  plugins: [],
};
