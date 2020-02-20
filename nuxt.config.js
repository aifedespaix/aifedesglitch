import axios from 'axios'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  generate: {
    async routes() {
      const load = async (url) => {
        const { data } = await axios.get(url)
        return data
      }

      return [].concat(
        (await load(`https://aifedesglitch.aifedespaix.com/glitches`)).map(
          (g) => `/${g.category.page.slug}/${g.page.slug}/${g.id}`
        ),
        (await load(`https://aifedesglitch.aifedespaix.com/categories`)).map(
          (c) => `/${c.page.slug}/${c.id}`
        )
      )
    }
  },
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fr-FR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'aifedesglich'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filter.js',
    '~/plugins/global.js',
    '~/plugins/directives.js',
    '~/plugins/seo.js',
    { src: '~/plugins/google-analytics.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  vuetify: {
    defaultAssets: false,
    icons: {
      iconfont: false
    },
    optionsPath: './plugins/vuetify.js'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  sitemap: {
    hostname: 'https://aifedesglitch.com',
    gzip: true
    // exclude: ['/secret', '/admin/**']
    // routes: [
    //   '/page/1',
    //   '/page/2',
    //   {
    //     url: '/page/3',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
  pwa: {
    meta: {
      /* meta options */
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
