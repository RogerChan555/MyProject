const webpack = require('webpack')
import clientConfig from './client-config'
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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    mode: 'history',
    linkActiveClass: 'nuxt-link-active-custom',
    linkExactActiveClass: 'nuxt-link-exact-active',

    fallback: false
  },
  generate: {
    fallback: false,
    routes: ['/', '404']
  },
  /*
   ** Loading page
   */
  loading: '~/components/Loading.vue',
  // loading: false,
  /*
   ** Global CSS
   */
  css: [
    // '~/assets/scss/woocommerce.scss',
    '~/assets/scss/woocommerce-layout.scss',
    '~/assets/scss/styles.scss',
    '~/assets/scss/themes.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/css/main.css',
    '~/assets/scss/pages/singleProduct.scss',
    '~/assets/scss/pages/checkout.scss',
    '~/assets/scss/pages/account.scss',
    '~/assets/scss/pages/cart.scss',
    '~/assets/scss/pages/blog.scss',
    '~/assets/scss/components/badge.scss',
    '~/assets/scss/components/header.scss',
    '~/assets/scss/components/footer.scss',
    '~/assets/scss/components/navigation.scss',
    '~/assets/scss/components/shopping-bag.scss',
    '~/assets/scss/components/breadcrumb.scss',
    '~/assets/scss/components/comments.scss',
    '~/assets/scss/components/button.scss',
    '~/assets/scss/components/socialMedia.scss'
  ],
  pageTransition: {
    // name: 'fade',
    css: false,
    mode: 'out-in'
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
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images'
  ],

  // routerModule: {
  //   /* module options */
  // },

  optimizedImages: {
    optimizeImages: true
  },

  pwa: {
    manifest: {
      name: 'Woo-nuxt',
      short_name: 'Woo-nuxt',
      theme_color: '#83E8BC',
      background_color: '#83E8BC',
      display: 'browser'
    },
    meta: {
      name: 'Woo-nuxt',
      description: 'Your personal workout assistant',
      author: 'Mowa-Zee',
      theme_color: '#83E8BC'
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    // 'nuxt-svg-loader',
    'nuxt-svg-loader',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: clientConfig.siteUrl
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
