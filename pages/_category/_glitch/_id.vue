<template>
  <v-container v-if="glitch">
    <v-row>
      <v-col sm="12">
        <h1 v-h1>{{ glitch.title }}</h1>
        <div v-html="$md.render(glitch.detail)" v-if="glitch.detail"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" sm="12" tag="article">
        <v-responsive
          :aspect-ratio="16 / 9"
          v-if="glitch.youtubeId"
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
          <h2 v-h2>Fonctionnement</h2>
          <div v-html="$md.render(glitch.fonctionnement)"></div>

          <ItemsCarousel
            :items="glitch.items"
            v-if="glitch.items && glitch.items.length"
          />

          <h2 v-h2>Sources</h2>
          <ul>
            <li v-for="source in glitch.sources">
              <a :href="source.url" target="_blank">{{ source.title }}</a>
              par {{ source.author }}
            </li>
          </ul>
        </template>
      </v-col>

      <v-col md="4" xs="12">
        <span class="caption">
          Publié le {{ glitch.created_at | formatDate }}
        </span>

        <h3 v-h3>Difficulté</h3>
        <div class="d-flex justify-center">
          <Difficulty :difficulty="glitch.difficulty" />
        </div>

        <h3 v-h3 v-if="similarGlitchs && similarGlitchs.length">
          Glitchs similaires
        </h3>
        <v-row v-if="similarGlitchs && similarGlitchs.length" dense>
          <v-col :key="glitch.id" v-for="glitch in similarGlitchs" cols="12">
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
import Difficulty from '~/components/difficulty.vue'

export default {
  components: {
    Glitch,
    ItemsCarousel,
    Difficulty
  },
  head() {
    return this.$seo(this.glitch.page, this.glitch.category.name)
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.glitch.youtubeId}`
    }
  },
  async asyncData({ params }) {
    const glitchUrl = `https://aifedesglitch.aifedespaix.com/glitches/${params.id}`
    const similarGlitchsUrl = `https://aifedesglitch.aifedespaix.com/glitches?_limit=10`

    return {
      glitch: (await axios.get(glitchUrl)).data,
      similarGlitchs: (await axios.get(similarGlitchsUrl)).data.filter((g) => {
        return g.id !== Number(params.id)
      })
    }
  }
}
</script>
