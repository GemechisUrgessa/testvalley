/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        999: "999",
      },
      width: {
        "custom-width": "1100px", // Replace with your desired width
      },
      height: {
        "custom-height": "300px", // Replace with your desired height
      },
    },
  },
  plugins: [],
};
