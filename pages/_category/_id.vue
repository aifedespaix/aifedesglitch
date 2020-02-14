<template>
  <v-container v-if="category" fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <v-parallax :src="category.page.banner.url | fdgApiUrl"></v-parallax>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>{{ category.title }}</h1>
      </v-col>
    </v-row>
    <v-flex v-for="glitch in glitches" :key="glitch._id" xs12 sm6 lg4 pa-2>
      <ArticleCard :glitch="glitch" />
    </v-flex>
  </v-container>
</template>

<script>
import axios from 'axios'

import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
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
