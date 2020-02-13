<template>
  <v-app-bar
    :bottom="!isLargeScreen"
    :clipped-left="isLargeScreen"
    :clipped-right="!isLargeScreen"
    app
  >
    <v-app-bar-nav-icon @click.stop="switchNav()" v-if="!isLargeScreen" />
    <Logo />
    <v-toolbar-title>aifedesglitch</v-toolbar-title>
    <v-spacer />
    <v-switch v-model="$vuetify.theme.dark" label="Sombre" primary />
  </v-app-bar>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    isLargeScreen() {
      return this.$store.state.layout.isLargeScreen
    }
  },
  methods: {
    switchNav() {
      this.$store.dispatch('layout/switchNav')
    }
  }
}
</script>
