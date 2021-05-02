module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#917898',
        secondary: '#4c394f',
        dark: '#2e1a1e',
        light: '#bcb8ce',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './components/**/*.{jsx}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    options: {
      safelist: [/^text-/, /^bg-/, /^align-/, /^pr-/, /^pl-/, /rotate/],
    },
  },
}
