<template>
  <v-container v-if="category" fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <v-parallax :src="category.page.banner.url | fdgApiUrl">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1
                class="display-3 font-weight-thin mb-4 grey--text text--darken-4"
              >
                {{ category.name }}
              </h1>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-container>
      <h2>Tous les Glitchs de {{ category.name }}</h2>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="glitch in glitches" :key="glitch._id" xs="6" md="2" pa-2>
          <Glitch :glitch="glitch" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

import Glitch from '~/components/cards/Glitch.vue'

export default {
  components: {
    Glitch
  },
  data: () => ({
    category: null,
    glitches: []
  }),
  mounted() {
    const urlCategory = `https://aifedesglitch.aifedespaix.com/categories/${this.$route.params.id}`
    axios.get(urlCategory).then((response) => (this.category = response.data))
    const urlGlitches = `https://aifedesglitch.aifedespaix.com/glitches/?category=${this.$route.params.id}`
    axios.get(urlGlitches).then((response) => (this.glitches = response.data))
  }
}
</script>
