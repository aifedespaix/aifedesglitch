<template>
  <v-app-bar :clipped-left="clipped" app>
    <v-app-bar-nav-icon v-if="type !== 'permanent'" @click.stop="switchNav()" />
    <Logo />
    <v-toolbar-title>aifedesglitch</v-toolbar-title>
    <v-spacer />
    <v-switch v-model="$vuetify.theme.dark" primary label="Dark" />
  </v-app-bar>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => ({
    model: null,
    type: 'default (no property)',
    clipped: false,
    floating: false,
    mini: false,
    inset: false
  }),
  methods: {
    switchNav() {
      this.$store.commit('layout/SET_MODEL', true)
    }
  }
}
</script>
