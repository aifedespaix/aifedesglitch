<template>
  <v-container fluid>
    <h1 v-h1>aifedesglitch</h1>
    <div>Découvre toutes les mécaniques des Glitchs en Français</div>

    <h2 v-h2>Les derniers Glitchs</h2>
    <Glitches :glitches="lastGlitches"></Glitches>
  </v-container>
</template>

<script>
import axios from 'axios'
import Glitches from '~/components/lists/glitches.vue'

export default {
  components: {
    Glitches
  },
  head() {
    return this.$fdg.seo.title({
      title: "Page d'accueil : les derniers glitchs en Français",
      description:
        "Avec aifedesglitch, on casse le 4ème mur entre le développeur et le joueur, grâce à des vidéos claires, en Français accompagnées d'éxplications détaillées.",
      thumbnail: {
        url: '/uploads/5fdfbea8a7f94002a82bcfa12e634dc7.jpg'
      }
    })
  },
  data: () => ({
    lastGlitches: []
  }),
  async asyncData() {
    const lastGlitchsUrl = `https://aifedesglitch.aifedespaix.com/glitches?_limit=10`
    return { lastGlitches: (await axios.get(lastGlitchsUrl)).data }
  }
}
</script>
