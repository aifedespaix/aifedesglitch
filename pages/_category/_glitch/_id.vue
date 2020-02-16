<template>
  <v-container v-if="glitch">
    <v-row>
      <v-col sm="12">
        <h1 class="display-3 my-4">{{ glitch.title }}</h1>
        <div v-if="glitch.detail" v-html="$md.render(glitch.detail)"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="9" sm="12" tag="article">
        <v-responsive
          v-if="glitch.youtubeId"
          :aspect-ratio="16 / 9"
          max-height="calc(100vh - 64px)"
        >
          <iframe
            :src="videoUrl"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class=""
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>
        </v-responsive>

        <template v-if="glitch.fonctionnement">
          <h2 class="display-2 my-2">Fonctionnement</h2>
          <div v-html="$md.render(glitch.fonctionnement)"></div>
        </template>

        <ItemsCarousel v-if="glitch.items.length" :items="glitch.items" />
      </v-col>

      <v-col v-if="similarGlitchs.length" md="3" xs="12">
        <h3 class="display-2 my-2">Glitchs similaires</h3>
        <v-row dense>
          <v-col v-for="glitch in similarGlitchs" :key="glitch.id" cols="12">
            <Glitch :glitch="glitch"></Glitch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Glitch from '~/components/cards/Glitch.vue'
import ItemsCarousel from '~/components/carousels/Items.vue'

export default {
  components: {
    Glitch,
    ItemsCarousel
  },
  data: () => ({
    glitch: null,
    similarGlitchs: []
  }),
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.glitch.youtubeId}`
    }
  },
  mounted() {
    const glitchUrl = `https://aifedesglitch.aifedespaix.com/glitches/${this.$route.params.id}`
    axios.get(glitchUrl).then((response) => (this.glitch = response.data))
    const similarGlitchsUrl = `https://aifedesglitch.aifedespaix.com/glitches?_limit=10`
    axios.get(similarGlitchsUrl).then(
      (response) =>
        (this.similarGlitchs = response.data.filter((g) => {
          return g.id !== Number(this.$route.params.id)
        }))
    )
  }
}
</script>
