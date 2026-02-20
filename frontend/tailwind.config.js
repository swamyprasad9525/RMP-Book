/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A2647", // Deep Navy
                secondary: "#144272", // Lighter Navy
                accent: "#00B4D8", // Medical Teal
                success: "#06D6A0",
                warning: "#FFD166",
                danger: "#EF476F",
                light: "#F0F8FF", // Alice Blue
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}
