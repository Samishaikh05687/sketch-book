/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
   colors: {
     background1: 'rgba(255,255,255,0.9)',
     shadow1: '0px 7px 14px rgba(0,0,0,.05), 0px 0px 3.12708px rgba(0, 0, 0, .0798), 0px 0px .931014px rgba(0,0,0,.1702)',
     shadow2: '0 0 0 1px #4a47b1',
     border1: '#b8b8b8',
     border2: '#f2f2f2',
     text1: '#212121',
     text2: '#CFCFCF'  
  }
  },
  plugins: [],
}
