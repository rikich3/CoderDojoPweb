/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dojoSky: '#87cefa',
        dojoBuilding: '#A97338',
        dojoMountain: '#8c8c8c'
      }
    },
  },
  plugins: [],
}

