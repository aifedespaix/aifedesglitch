<template>
  <v-app id="sandbox">
    <Nav />
    <AppBar />

    <v-content>
      <nuxt />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'
import AppBar from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    AppBar,
    Nav,
    Footer
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary']
  }),
  async fetch({ store, params }) {
    await store.dispatch('articles/load')
    await store.dispatch('category/load')
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.$store.commit(
        'layout/SET_LARGE_SCREEN',
        window.innerWidth > window.innerHeight
      )
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
