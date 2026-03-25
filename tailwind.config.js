/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f4ff',
                    100: '#e5ebff',
                    500: '#4F46E5',
                    600: '#4338ca',
                    700: '#3730a3',
                },
                dark: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
