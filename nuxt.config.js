import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MAGICIAN SCHOOL',
    title: 'MAGICIAN SCHOOL',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Magic School. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui' },
      { hid: 'theme-color', name: 'theme-color', content: '#040714' },
      { hid: 'og:url', property: 'og:url', content: "https://magician-school.netlify.app" },
      { hid: 'og:description', name: 'og:description', content: 'Magic School. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui' },
      {hid: 'og:image', property: 'og:image', content: '/icon.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'canonical', type: 'image/x-icon', href: 'https://magician-school.netlify.app' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/general-config.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  loading: { color: colors.teal.darken2, height: '5px', throttle: 0 },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://hp-api.herokuapp.com',  // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    customVariables: [
      '@import ~/assets/scss/vuetify.scss',
      '@import ~/assets/scss/texts.scss',
      '@import ~/assets/scss/general-config.scss'
    ],
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: colors.teal.darken2,
          secondary: '#607D8B',
          background: '#040714',
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          'custom-blue': '#2177B6',
          'custom-green': '#1A9079',
          'custom-red': '#A63D40',
          'dark-1': '#606060',
          'dark-2': '#727272',
          'dark-3': '#939393',
          'light-1': '#ffffff',
          'light-2': '#ececec',
          'light-3': '#dedede'
        },
      }
    },
    treeShake: true,
    customProperties: true,
    icons: {
      iconfont: 'fa',
    }
  },
  server: {
    host: '0', // default: localhost
    port: 8080
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
