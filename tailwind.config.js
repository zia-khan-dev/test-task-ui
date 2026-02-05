/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        secondary: '#8597A8',
        success: '#1EA54E',
        warning: '#F59F0A',
        error: '#F50A0A',
        info: '#0078D7',
        'accent-red': '#DB1F26',
        'border-color': '#E0E8ED',
        'background-light': '#F5F8FA',
        'timeline-bg': '#F5F8FB',
        'sidebar-hover': '#7B9FC3',
        'lead-10': '#F9FAFA',
        'lead-500': '#747A8B',
        'lead-900': '#23252A',
        'lead-950': '#17181C',
        'status-not-started': '#8597A8',
        'status-in-progress': '#F59F0A',
        'status-completed': '#1EA54E',
        'status-partially-uploaded': '#0078D7',
        'status-fully-uploaded': '#9333EA',
        'status-delayed': '#F50A0A',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
