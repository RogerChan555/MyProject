/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  experimental: 'all',
  corePlugins: {
    clear: false,
    float: false,
    letterSpacing: false,
    skew: false
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryLight: 'var(--color-primary-light)',
        primaryDark: 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        secondaryLight: 'var(--color-secondary-light)',
        secondaryDark: 'var(--color-secondary-dark)',
        accent: 'var(--color-accent)',
        accentLight: 'var(--bg-light-color)',
        accentDark: 'var(--bg-dark-color)',
        bgColor: 'var(--bg-color)',
        bgLightColor: 'var(--bg-light-color)',
        bgDarkColor: 'var(--bg-dark-color)',
        fgColor: 'var(--fg-color)',
        fgLightColor: 'var(--fg-light-color)',
        brdColor: 'var(--brd-color)',
        errColor: 'var(--err-color)',
        ttColor: 'var(--tt-color)',
        acColor: 'var(--ac-color)',
        actColor: 'var(--act-color)',
        bgGrad1: 'var(bg-grad-1)',
        bgGrad2: 'var(bg-grad-2)'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1921px'
    },
    fontFamily: {
      body: 'var(--font-body)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
      icon: 'var(--font-icon)'
    },
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem'
    },
    fontWeight: {
      light: 'var(--font-light)',
      normal: 'var(--font-normal)',
      medium: 'var(--font-medium)',
      semibold: 'var(--font-semibold)',
      bold: 'var(--font-bold)',
      extrabold: 'var(--font-extrabold)',
      black: 'var(--font-black)'
    },
    // transitionTimingFunction: {
    //   'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    //   'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
    // },
    // lineHeight: {
    //   none: 1,
    //   tight: 1.25,
    //   normal: 1.5,
    //   loose: 2
    // }
    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
      drop: '0 2px 8px 0 rgba(0,0,0,0.14)'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelistPatterns: [/^bg-/, /^text-/, /^border-/, /^h-/, /^w-/, /^hover:/]
    }
  }
}
