const webpack = require('webpack')

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
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // script: [{ src: '/js/main.js' }],
    bodyAttrs: {
      class: '',
    },
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/woocommerce.css',
    '@/assets/css/vendor.css',
    '@/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-lazyload', mode: 'client' },
    { src: '~/plugins/vuex-persistedstate.js', mode: 'client' },
    { src: '~/plugins/external/main.js', mode: 'client' },
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
    // Doc: https://github.com/nuxt/components
    '@nuxt/components',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
  },

  pwa: {
    manifest: {
      name: 'Woo-nuxt',
      short_name: 'Woo-nuxt',
      theme_color: '#83E8BC',
      background_color: '#83E8BC',
      display: 'browser',
    },
    meta: {
      name: 'Woo-nuxt',
      description: 'Your personal workout assistant',
      author: 'Mowa-Zee',
      theme_color: '#83E8BC',
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    // hostname: 'https://www.webnoob.dev',
  },
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.config.js',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
    transpile: ['gsap'],
    vendor: ['main'],
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  render: {
    resourceHints: false,
  },
}
