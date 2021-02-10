const webpack = require('webpack')
// import clientConfig from './client-config'

// Common options
export const options = {
  name: 'WooNuxt',
  shortDescription: 'WooCommerce Store in Vue',
  description:
    'Vue WooCommerce theme, built with Next JS, Webpack, Babel, Node, GraphQl',
  app: {
    background: '#202124'
  },
  social: {
    twitter: ''
  }
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: `${options.name} • ${options.shortDescription}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'woocommerce, nuxt, woocommerce nuxt, nuxt app, graphql'
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1'
      },
      {
        itemprop: 'name',
        content: `${options.name} • ${options.shortDescription}`
      },
      {
        itemprop: 'description',
        content: options.description
      },
      {
        itemprop: 'image',
        content: `${process.env.BASE_URL}banner.png`
      },
      {
        property: 'og:image',
        content: `${process.env.BASE_URL}banner.png`
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: options.name
      },
      // Windows phone tile icon
      {
        name: 'msapplication-TileImage',
        content: `/icon.png`
      },
      {
        name: 'msapplication-TileColor',
        content: options.app.background
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/icon.png'
      },
      {
        rel: 'apple-touch-startup-image',
        href: '/icon.png'
      }
    ],
    // script: [{ src: '/js/main.js' }],
    bodyAttrs: {
      class: ''
    }
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  router: {
    mode: 'history'
    // linkActiveClass: 'nuxt-link-active-custom',
    // linkExactActiveClass: 'nuxt-link-exact-active',
    // middleware: 'pages',
    // fallback: false
  },

  generate: {
    fallback: false
    // routes: ['/', '404']
  },
  /*
   ** Loading page
   */
  loading: '~/components/Loading.vue',
  // loading: false,
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/app.scss'],
  pageTransition: {
    // name: 'fade',
    // css: false,
    // mode: 'out-in'
    // beforeEnter() {
    //   console.log('beforeEnter')
    // },
    // beforeLeave() {
    //   console.log('beforeLeave')
    // }
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vee-validate.js', mode: 'client' },
    { src: '~/plugins/filter.js' },
    { src: '~/plugins/vue-lazyload', mode: 'client' },
    { src: '~/plugins/vuex-persistedstate.js', mode: 'client' },
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/external/main.js', mode: 'client' }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/router-module
    // '@nuxtjs/router',
    // https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode'
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    // '@aceforth/nuxt-optimized-images'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // 'nuxt-svg-loader',
    // 'nuxt-svg-loader',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],

  // routerModule: {
  //   /* module options */
  // },

  optimizedImages: {
    optimizeImages: true
  },

  pwa: {
    manifest: {
      name: options.name,
      short_name: options.name,
      description: options.shortDescription,
      start_url: '/',
      theme_color: options.app.background,
      background_color: options.app.background,
      display: 'browser'
    },
    meta: {
      ogHost: process.env.BASE_URL,
      twitterCard: 'summary_large_image',
      twitterSite: options.social.twitter,
      twitterCreator: options.social.twitter,
      name: 'Woo-nuxt',
      description:
        'Vue WooCommerce theme, built with Next JS, Webpack, Babel, Node, GraphQl',
      author: 'Mowa-Zee',
      theme_color: options.app.background
    },
    workbox: false
  },

  // Toast module configuration (https://github.com/nuxt-community/modules/tree/master/packages/toast)
  toast: {
    position: 'bottom-center',
    duration: 3000,
    theme: 'bubble',
    keepOnHover: true
  },

  sitemap: {
    hostname: process.env.BASE_URL || 'https://woo-nuxt.netlify.app/'
  },

  // Robots module configuration (https://github.com/nuxt-community/robots-module)
  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: `${process.env.BASE_URL}sitemap.xml`
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo/apollo-config.js'
    },
    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network'
      }
    },
    // setup a global query loader observer
    watchLoading: '~/plugins/apollo/apollo-watch-loading-handler.js',

    // setup a global error handler
    errorHandler: '~/plugins/apollo/apollo-error-handler.js'
  },
  // Color Mode module configuration (https://github.com/nuxt-community/color-mode-module)
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},

  // Public runtime configuration (https://nuxtjs.org/guide/runtime-config)
  publicRuntimeConfig: {
    // GA_ID: process.env.GA_ID || 'UA-61422507-4',
    // GTM_ID: process.env.GTM_ID || 'GTM-NMKVBMV',
    BASE_URL: process.env.BASE_URL || 'https://woo-nuxt.netlify.app/'
  },

  // Private runtime configuration (https://nuxtjs.org/guide/runtime-config)
  privateRuntimeConfig: {},

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.node = {
    //       fs: 'empty',
    //       child_process: 'empty',
    //       tls: 'empty',
    //       net: 'empty',
    //     }
    //   }
    // },
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    transpile: ['vee-validate/dist/rules'],
    vendor: ['main'],
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
    // parallel: true
    // cache: true
  },
  render: {
    resourceHints: false
  }
}
