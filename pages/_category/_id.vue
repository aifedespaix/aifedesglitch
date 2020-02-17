<template>
  <v-container v-if="category" fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <v-parallax :src="category.page.banner.url | fdgApiUrl" height="300">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 v-banner>
                {{ category.name }}
              </h1>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col xs="12" pa-2>
          <h2 v-h2>Tous les Glitchs de {{ category.name }}</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="glitch in glitches"
          :key="glitch._id"
          xs="6"
          md="4"
          lg="3"
          pa-2
        >
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
