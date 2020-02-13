<template>
  <v-navigation-drawer
    :permanent="isLargeScreen"
    :right="!isLargeScreen"
    v-model="nav"
    app
    fixed
    clipped
  >
    <v-list dense>
      <v-list-item
        :to="item.route"
        :key="item.title"
        @click=""
        v-for="item in items"
        router
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="category in categories" :key="category.name">
        <v-list-item-title>{{ category.name }}</v-list-item-title>
        <div v-html="category.icon"></div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    items: [
      {
        title: 'Accueil',
        icon: 'mdi-home',
        route: '/'
      }
    ]
  }),
  computed: {
    isLargeScreen() {
      return this.$store.state.layout.isLargeScreen
    },
    nav: {
      get() {
        return this.$store.state.layout.nav
      },
      set(value) {
        this.$store.commit('layout/SET_NAV', value)
      }
    },
    categories() {
      return this.$store.state.category.categories
    }
  }
}
</script>
