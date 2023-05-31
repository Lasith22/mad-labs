/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        madlabsGreen: '#597B65',
        bgColorWhite: '#1E1E1E',
        bgYellow: 'rgba(247, 229, 181, 0.4)',
        bgPurple: 'rgba(180, 161, 220, 0.4)',
        bgDarkOrange: 'rgba(247, 194, 155, 0.4)',
        yellow2: '#BC8C05',
        purple2: '#350B8C',
        textBlack: '#000000',
        textGreen: '#53B98B',
        textORange: '#964306',
        bgDarkYelloyw: ' #F7E2A7',
        darkdray: '#374151',
        buttonColour1: '#BE8C00',
        bgPurple1: '#B4A1DC',
        buttonPurple: '#724FBC',
        textColorBlack: '#374151',
        bgorange: '#F7C29B',
        buttonOrange: '#E16F38',
        bgDark: '#F5F7F9',
        smallText: '#111827',
        darkText: '#6B7280',
        yellowRecatangle: '#F6C423',
        yellowsmallWhatsapp: ' #F5DA8F',
      },
      fontSize: {
        xl: '12px',
        '2xl': '20px',
        '10xl': '50px',
        26: '26px',
        18: '18px',
        16: '16px',
        50: '50px',
        14: '14px',
        20: '20px',
        40: '40px',
        60: '60px',
        // Add more sizes as needed
      },
      fontWeight: {
        // Add more sizes as needed
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        custom: ['Lato'],
        inter: ['Inter'],
        poppins: ['Poppins'],
        manrope: ['Manrope'],
        // Add more font families as needed
      },
      backgroundImage: {
        texture: `url('./icons/Group 1000000822@2x.png') `,
      },
      width: {
        boxWidth: '290px',
      },
      screens: {
        xs: '300px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
