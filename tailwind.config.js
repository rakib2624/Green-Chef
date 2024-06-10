/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui', 'flowbite/plugin'),
  ],
  daisyui: {
    themes: ['light'], // set to 'light' theme
    // themes: false, // disable DaisyUI themes
  },
}

