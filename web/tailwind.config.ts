import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        // https://colorhunt.co/palette/f7f7f7eeeeee393e46929aab
        // https://colorhunt.co/palette/0079ff00dfa2f6fa70ff0060
        transparent: 'transparent',
        current: '#393E46',
        blue: {
          DEFAULT: '#0079FF',
          100: '#E6F2FF',
          200: '#99C9FF',
          300: '#4DA1FF'
        },
        red: '#FF0060',
        yellow: '#F6FA70',
        white: {
          100: '#FFFFFF',
          200: '#F7F7F7'
        },
        black: {
          100: '#000000',
          DEFAULT: '#393E46',
          200: '#D2D8E2',
          300: '#9BA1AA',
          400: '#818790',
          500: '#686D76'
        },
        green: '#00DFA2',
        grey: {
          100: '#EEEEEE',
          110: '#d3d6dd',
          200: '#929AAB',
        },
        purple: '#81689D',
        gold: {
          500: '#aa895f',
          100: '#E0D8CC'
        }
      },
      fontFamily: {
        sans: ['Tahoma', 'Meiryo UI', 'sans-serif'],
      },
      fontSize:  {
        sm: ['0.75rem', {
          lineHeight: '1.35rem',
          letterSpacing: '-0.01em',
          fontWeight: '100',
        }],
        md: ['1.00rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '100',
        }],
        lg: ['1.25rem', {
          lineHeight: '1.85rem',
          letterSpacing: '0.06em',
          fontWeight: '100',
        }],
        xl: ['3.50rem', {
          lineHeight: '4.50rem',
          letterSpacing: '0.03em',
          fontWeight: '600',
        }],
        xxl: ['5.00rem', {
          lineHeight: '5.00rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;