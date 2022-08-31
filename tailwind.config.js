/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover': 'url(/assets/images/mount-doom.jpg)'
      },
      colors: {
        'lor': {
          500: '#FBB87C',
          400: '#CD4FAF',
          300: '#9D5DEB',
          200: '#512C8B',
          100: '#1D2026',
          50: '#121418',
        },
      },
    },
  },

  plugins: [],
}
