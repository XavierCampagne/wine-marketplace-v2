// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include any components (if added later)
  ],
  theme: {
    extend: {
      colors: {
        // Wine-inspired color palette
        wine: {
          DEFAULT: '#800020', // Primary burgundy color for buttons and accents
          hover: '#a00030', // Hover state for buttons
        },
        background: '#1a1a1a', // Dark background
        text: {
          primary: '#ffffff', // White text
          secondary: '#d1d5db', // Light gray for secondary text
          muted: '#6b7280', // Gray for muted text (e.g., placeholders)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default font (as in globals.css)
      },
    },
  },
  plugins: [],
};