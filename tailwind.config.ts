import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg: '#FFF9ED',
      text: '#111',
      fg: '#F7EFD9',
      white: '#fff',
      gray: '#666564',
      orange: '#FFB08D',
      lightOrange: '#FDE2D6',
      pink: '#E460AE',
      green: '#829624',
      blue: '#54AFD6',
      purple: '#C569E8',
      black: '#000'
    },
    fontFamily: 'Inter',
    lineHeight: '2rem',
    fontSize: {
      sm: '1rem',
      md: '1.20rem',
      lg: '2.5rem',
      xl: '3.75rem'
    },
    extend: {
      lineHeight: {
        'tight': '4rem',
        '12': '3rem',
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif']
      },
      opacity: {
        '50': '0.5'
      }
    },
  },

  plugins: [],
};
