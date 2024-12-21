import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            // center: true,
            // padding: "2rem",
            screens: {
                "2xl": "2520px",
            },
        },
        extend: {
            screens: {
                "2xl": "2520px",
            },
            colors: {
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    // foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    // foreground: "hsl(var(--secondary-foreground))",
                },
                tertiary: {
                    DEFAULT: "hsl(var(--tertiary))",
                    // foreground: "hsl(var(--secondary-foreground))",
                },
            },
            strokeWidth: {
                3: "3px",
                4: "4px",
            },
        },
    },
    plugins: [],
};
export default config;
