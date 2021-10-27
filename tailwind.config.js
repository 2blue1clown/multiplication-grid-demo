module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    // make it so that there are no animations
    animation: true,
  },
  theme: {
    colors: {

      primary: '#0583F2',
      darkPrimary: '#035DAB',
      secondary: '#0D0D0D',
      background: '#F2F2F2',

    },
    extend: {
      animation: {
        'bounce-once': 'bounce 1s 1.5',
        jump: 'jump 1s infinite',
        kill: 'kill 0.5s 1'
      },

      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
          '50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' }
        },
        kill: {
          '0%,100%': { transform: 'translateY(0)', backgroundColor: 'secondary', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
          '50%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
        }
      }


    },

  },
  variants: {
    extend: {
      ringColor: ['hover'],
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
