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
  data: () => ({
    lastGlitches: []
  }),
  mounted() {
    const lastGlitchsUrl = `https://aifedesglitch.aifedespaix.com/glitches?_limit=10`
    axios.get(lastGlitchsUrl).then((r) => (this.lastGlitches = r.data))
  }
}
</script>
