const { resolve } = require('path')
const pkg = require('../package')
const paths = require('./paths')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['sanitize.css/sanitize.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-svgicon',
    // '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: { plugins: { autoprefixer: {} } },
    extractCSS: true,

    extend(config) {
      config.resolve.alias = {
        '@': paths.root,
        static: paths.static,
        styles: resolve(paths.root, 'styles'),
        icons: paths.icons.dist
      }

      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
