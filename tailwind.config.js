import defaultTheme from 'tailwindcss/defaultTheme'

const tailwinConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      line: '#2C2820',
      line_input: '#443D30',
      white: '#fff',
      black: '#000',
      transparent: 'transparent'
    },

    extend: {
      fontFamily: {
        primary: ['Poppins', ...defaultTheme.fontFamily.sans]
      },

    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('daisyui')
  ]
}

export default tailwinConfig
