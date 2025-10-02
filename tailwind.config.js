/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        "md": "8px",
        "lg": "10px"
      },
      colors: {
        "primary": "#C8EE44",
        "secondary": "#29A073",
        "darkish": "#363A3F",
        "gray-1": "#FAFAFA",
        "gray-2": "#F8F8F8",
        "gray-3": "#F5F5F5",
        "gray-5": "#F2F2F2",
        "text-1": "#1B212D",
        "text-2": "#929EAE",
        "text-3": "#78778B"
      }
    },
  },
  plugins: [],
}

