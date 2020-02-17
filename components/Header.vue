<template>
  <v-app-bar
    v-bind:class="{ 'flex-row-reverse': !isLargeScreen }"
    :bottom="!isLargeScreen"
    :clipped-left="isLargeScreen"
    :clipped-right="!isLargeScreen"
    app
  >
    <v-app-bar-nav-icon @click.stop="switchNav()" v-if="!isLargeScreen" />
    <Logo />
    <v-spacer />

    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn v-on="{ ...tooltip, ...menu }" icon>
              <v-icon>mdi-cogs</v-icon>
            </v-btn>
          </template>
          <span>Paramètres</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item>
          <v-switch v-model="darkTheme" label="Theme Sombre" primary />
        </v-list-item>
      </v-list>
    </v-menu>
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
    },
    darkTheme: {
      get() {
        return process.browser ? JSON.parse(localStorage.darkTheme) : false
      },
      set(value) {
        if (process.browser) {
          localStorage.darkTheme = value
          this.$vuetify.theme.dark = value
        }
      }
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.darkTheme
  },
  methods: {
    switchNav() {
      this.$store.dispatch('layout/switchNav')
    }
  }
}
</script>
