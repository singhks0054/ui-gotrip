/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      },
      fontFamily: {
        'f1': ['Barlow Semi Condensed', 'sans-serif'],
        'f2': ['Satisfy', 'cursive'],
      },
      colors: {
        'c1': 'rgb(14,28,53)',
        'c2': 'rgb(253,224,47)',
      },
      backgroundImage: {
        'hero': 'url("https://preview.colorlib.com/theme/gotrip/assets/img/hero/h1_hero.jpg.webp")',
        'pack': 'url("https://preview.colorlib.com/theme/gotrip/assets/img/hero/contact_hero.jpg.webp")',
        'water': 'url("https://preview.colorlib.com/theme/gotrip/assets/img/service/video-bg.jpg.webp")',
        'tree': 'url("https://preview.colorlib.com/theme/gotrip/assets/img/testmonial/testimonial_bg.jpg.webp")',
        'about': 'url("https://preview.colorlib.com/theme/gotrip/assets/img/hero/about.jpg.webp")',
      }
    },
  },
  plugins: [],
}
