export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Morana Taguatinga Shopping',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:300,400,700,900'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'
      },
      { rel: 'stylesheet', href: '/fonts/icomoon/style.css' },
      { rel: 'stylesheet', href: '/fonts/calibri-bold.ttf' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/jquery-ui.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/css/jquery.fancybox.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap-datepicker.css' },
      { rel: 'stylesheet', href: '/fonts/flaticon/font/flaticon.css' },
      { rel: 'stylesheet', href: '/css/aos.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/produto.css' },
      { rel: 'stylesheet', href: '/css/carrinho.css' },
      { rel: 'stylesheet', href: '/css/morana-admin.css' }
    ],
    script: [
      { src: '/js/jquery-3.3.1.min.js', type: 'text/javascript', body: true },
      {
        src: '/js/jquery-migrate-3.0.1.min.js',
        type: 'text/javascript',
        body: true
      },
      { src: '/js/jquery-ui.js', type: 'text/javascript', body: true },
      { src: '/js/popper.min.js', type: 'text/javascript', body: true },
      { src: '/js/bootstrap.min.js', type: 'text/javascript', body: true },
      { src: '/js/owl.carousel.min.js', type: 'text/javascript', body: true },
      { src: '/js/jquery.stellar.min.js', type: 'text/javascript', body: true },
      {
        src: '/js/jquery.countdown.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: '/js/bootstrap-datepicker.min.js',
        type: 'text/javascript',
        body: true
      },
      { src: '/js/jquery.easing.1.3.js', type: 'text/javascript', body: true },
      { src: '/js/aos.js', type: 'text/javascript', body: true },
      {
        src: '/js/jquery.fancybox.min.js',
        type: 'text/javascript',
        body: true
      },
      { src: '/js/jquery.sticky.js', type: 'text/javascript', body: true },
      {
        src: '/js/jquery.maskMoney.min.js',
        type: 'text/javascript',
        body: true
      },
      { src: '/js/connection.js', type: 'text/javascript', body: true },
      { src: '/js/main.js', type: 'text/javascript', body: true },
      { src: '/js/morana-admin.js', type: 'text/javascript', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f16821', height: '5px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/auth.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  /*
   ** Proxy
   */
  proxy: {
    '/api': {
      target: 'https://catalogo-morana.herokuapp.com',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'catalogo',
        path: '/catalogo',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  }
}
