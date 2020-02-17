<template>
  <v-navigation-drawer
    :permanent="isLargeScreen"
    :right="!isLargeScreen"
    v-model="nav"
    app
    clipped
    fixed
  >
    <v-list
      v-bind:class="{
        'flex-column-reverse': !isLargeScreen,
        'flex-column': isLargeScreen
      }"
      dense
      class="h-full d-flex justify-start"
    >
      <v-list-item
        :key="item.title"
        :to="item.route"
        v-for="item in items"
        class="flex-0"
        router
      >
        <v-list-item-icon>
          <v-icon>$vuetify.icons.{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        :key="category.name"
        :to="categoryRoute(category.page.id, category.page.slug)"
        v-for="category in categories"
        router
        class="flex-0"
      >
        <v-list-item-icon>
          <v-icon>$vuetify.icons.{{ category.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ category.name }}</v-list-item-title>
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
        icon: 'home',
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
  },
  methods: {
    categoryRoute(id, slug) {
      return `/${slug}/${id}`
    }
  }
}
</script>
