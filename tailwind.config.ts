import type { Config } from "tailwindcss";

/**
 * Miro Design Token Configuration
 * 
 * Font Note:
 * Roobert PRO is Miro's custom geometric display typeface.
 * Inter is configured as the fallback font if Roobert PRO is unavailable on the client system.
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand & Accent
        primary: "#1c1c1e",
        "on-primary": "#ffffff",
        "brand-yellow": "#ffd02f",
        "brand-yellow-deep": "#fcb900",
        "yellow-light": "#fff4c4",
        "yellow-dark": "#746019",
        "brand-blue": "#4262ff",
        "blue-450": "#5b76fe",
        "blue-pressed": "#2a41b6",
        "brand-coral": "#ff9999",
        "coral-light": "#ffc6c6",
        "coral-dark": "#600000",
        "brand-rose": "#ffd8f4",
        "rose-light": "#fde0f0",
        "brand-pink": "#fde0f0",
        "brand-teal": "#0fbcb0",
        "teal-light": "#c3faf5",
        "moss-dark": "#187574",
        "brand-orange-light": "#ffe6cd",
        "brand-red": "#fbd4d4",
        "brand-red-dark": "#e3c5c5",
        "success-accent": "#00b473",

        // Surface & Hairlines
        canvas: "#ffffff",
        surface: "#f7f8fa",
        "surface-soft": "#fafbfc",
        "surface-yellow": "#fff8e0",
        "surface-pricing-featured": "#f5f3ff",
        hairline: "#e0e2e8",
        "hairline-soft": "#eef0f3",
        "hairline-strong": "#c7cad5",

        // Text & Ink
        "ink-deep": "#050038",
        ink: "#1c1c1e",
        charcoal: "#2c2c34",
        slate: "#555a6a",
        steel: "#6b6f7e",
        stone: "#8e91a0",
        muted: "#a5a8b5",
        "on-dark": "#ffffff",
        "on-dark-muted": "#a5a8b5",
        "footer-bg": "#1c1c1e",
      },
      fontFamily: {
        // Roobert PRO primary display face with Inter fallback
        sans: [
          "Roobert PRO",
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        roobert: [
          "Roobert PRO",
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "hero-display": ["80px", { lineHeight: "1.05", letterSpacing: "-2px" }],
        "display-lg": ["60px", { lineHeight: "1.10", letterSpacing: "-1.5px" }],
        "stat-display": ["64px", { lineHeight: "1.10", letterSpacing: "-1.5px" }],
        "heading-1": ["48px", { lineHeight: "1.15", letterSpacing: "-1px" }],
        "heading-2": ["36px", { lineHeight: "1.20", letterSpacing: "-0.5px" }],
        "heading-3": ["28px", { lineHeight: "1.25", letterSpacing: "0" }],
        "heading-4": ["22px", { lineHeight: "1.30", letterSpacing: "0" }],
        "heading-5": ["18px", { lineHeight: "1.40", letterSpacing: "0" }],
        subtitle: ["18px", { lineHeight: "1.50", letterSpacing: "0" }],
        "body-md": ["16px", { lineHeight: "1.50", letterSpacing: "0" }],
        "body-sm": ["14px", { lineHeight: "1.50", letterSpacing: "0" }],
        "button-md": ["14px", { lineHeight: "1.30", letterSpacing: "0" }],
        caption: ["13px", { lineHeight: "1.40", letterSpacing: "0" }],
        micro: ["12px", { lineHeight: "1.40", letterSpacing: "0" }],
        "micro-uppercase": [
          "11px",
          { lineHeight: "1.40", letterSpacing: "0.5px" },
        ],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        xxl: "20px",
        xxxl: "28px",
        feature: "32px",
        full: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
        xxxl: "40px",
        "section-sm": "48px",
        section: "64px",
        "section-lg": "96px",
        hero: "120px",
      },
      boxShadow: {
        subtle: "0px 1px 2px 0px rgba(5, 0, 56, 0.04)",
        card: "0px 4px 12px 0px rgba(5, 0, 56, 0.06)",
        mockup: "0px 12px 32px -4px rgba(5, 0, 56, 0.08)",
        modal: "0px 16px 48px -8px rgba(5, 0, 56, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
