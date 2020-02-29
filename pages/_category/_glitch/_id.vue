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
          <h3 v-h2>Fonctionnement</h3>
          <div v-html="$md.render(glitch.fonctionnement)"></div>

          <ItemsCarousel
            :items="glitch.items"
            v-if="glitch.items && glitch.items.length"
          />

          <h3 v-h2>Sources</h3>
          <ul>
            <li v-for="source in glitch.sources">
              <a :href="source.url" target="_blank" rel="noopener">
                {{ source.title }}
              </a>
              par {{ source.author }}
            </li>
          </ul>
        </template>
        <h3 v-h2>Commentaires</h3>
        <client-only placeholder="Chargement...">
          <vue-disqus
            :identifier="glitch.page.slug"
            :url="$fdg.url.canonic($fdg.url.routing.glitch(glitch))"
            shortname="aifedesglitch"
          ></vue-disqus
        ></client-only>
      </v-col>

      <v-col md="4" xs="12">
        <div class="d-flex justify-space-between">
          <span class="caption">
            Publié le {{ glitch.created_at | formatDate }}
          </span>
          <Share :glitch="glitch" />
        </div>

        <h3 v-h3>Difficulté</h3>
        <div class="d-flex justify-center">
          <Difficulty :difficulty="glitch.difficulty" />
        </div>

        <Reactions :reactions="glitch.reactions" />

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
import Share from '~/components/btns/share.vue'
import Reactions from '~/components/reactions'

export default {
  components: {
    Reactions,
    Glitch,
    ItemsCarousel,
    Difficulty,
    Share
  },
  head() {
    const seo = this.$fdg.seo.title(this.glitch.page, this.glitch.category.name)
    seo.meta.push(
      {
        hid: 'og:video',
        name: 'og:video',
        content: `https://www.youtube.com/v/${this.glitch.youtubeId}`
      },
      {
        hid: 'og:video:width',
        name: 'og:video:width',
        content: `1920`
      },
      {
        hid: 'og:video:height',
        name: 'og:video:height',
        content: `1080`
      }
    )
    return seo
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
