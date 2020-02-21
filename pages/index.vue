<template>
  <v-container fluid>
    <h1 v-h1>aifedesglitch</h1>
    <div>Découvre toutes les mécaniques des Glitchs en Français</div>

    <h2 v-h2>Les derniers Glitchs</h2>
    <v-row>
      <v-col
        v-for="glitch in lastGlitches"
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
</template>

<script>
import axios from 'axios'

import Glitch from '~/components/cards/Glitch.vue'

export default {
  components: {
    Glitch
  },
  head() {
    return this.$seo({
      title: "Page d'accueil : les derniers glitchs en Français",
      description:
        "Avec aifedesglitch, on casse le 4ème mur entre le développeur et le joueur ! Grâce à des tutos clairs et en Français. On comprend ce qu'il se passe en jeu pour pouvoir découvrir toujours plus de nouveaux glitchs",
      thumbnail: {
        url: '/uploads/5fdfbea8a7f94002a82bcfa12e634dc7.jpg'
      }
    })
  },
  data: () => ({
    lastGlitches: []
  }),
  mounted() {
    const lastGlitchsUrl = `https://aifedesglitch.aifedespaix.com/glitches?_limit=10`
    axios.get(lastGlitchsUrl).then((r) => (this.lastGlitches = r.data))
  }
}
</script>
