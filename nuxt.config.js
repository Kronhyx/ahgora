export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '@kronhyx/ahgora',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://leap.mediumra.re/assets/css/theme.min.css'
      }
    ]
  },

  publicRuntimeConfig: {
    youtubeApi: process.env.YOUTUBE_API,
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxt/typescript-build', {}], // https://go.nuxtjs.dev/typescript
    ['@nuxtjs/svg', {}], // https://github.com/nuxt-community/svg-module
    ['@nuxtjs/moment', { }] // https://github.com/nuxt-community/moment-module
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
