<template>
  <v-container fluid>
    <h1 v-h1>aifedesglitch</h1>
    <div>Découvre toutes les mécaniques des Glitchs en Français</div>

    <h2 v-h2>Les derniers Glitchs</h2>

    <Glitchs :glitches="lastGlitches"></Glitchs>
  </v-container>
</template>

<script>
import Glitchs from '~/components/lists/glitches.vue'

export default {
  components: {
    Glitchs
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
  async asyncData({ app }) {
    return {
      lastGlitches: await app.$glitch.filter([{ arg: '_limit', value: 20 }])
    }
  }
}
</script>
