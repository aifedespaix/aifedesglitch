<template>
  <v-app id="sandbox">
    <Nav />
    <AppBar />

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="false" app>
      <span class="px-4"
        >&copy; aifedesglitch - 2019 / {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'
import AppBar from '~/components/Header.vue'

export default {
  components: {
    AppBar,
    Nav
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary']
  })
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
