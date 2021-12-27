module.exports = {
  content: ['./src/**/*.{pug,ts}'],
  theme: {
    extend: {
      keyframes: {
        'scroll-coin-hor': {
          '0%': { backgroundPosition: '0' },
          '100%': { backgroundPosition: '-' + 16 * 4 + 'rem' },
        },
        'scroll-coin-vert': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -' + 16 * 4 + 'rem' },
        },
      },
      animation: {
        'scroll-coin-l': 'scroll-coin-hor 8s linear infinite',
        'scroll-coin-r': 'scroll-coin-hor 8s linear infinite reverse',
        'scroll-coin-t': 'scroll-coin-vert 8s linear infinite',
        'scroll-coin-b': 'scroll-coin-vert 8s linear infinite reverse',
      },
    },
    colors: {
      yellow: '#FAFF00',
      pink: '#FF008A',
      black: '#000000',
      white: '#ffffff',
    },
    boxShadow: {
      hard: '4px 4px 0 0 rgb(0 0 0)',
    },
  },
  plugins: [],
}
