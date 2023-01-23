- [NativeWind](https://www.nativewind.dev/)
- Layout [Figma](https://www.figma.com/file/5jbHW05S9TttkQ5iofRxRF/Habits-(i)-(Community)?node-id=6%3A343&t=dKFWH05gt3ONi2FO-1)




```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}

```

só paramos de rodar o app para instalar libs que tocam no código nativo o dayjs como é puro js não tem a necessidade de para a aplicação