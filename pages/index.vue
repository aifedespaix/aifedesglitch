<template>
  <v-container fluid>
    <h1 class="display-2">
      aifedesglitch
    </h1>
    <h2>Les derniers Glitchs</h2>
    <v-flex
      v-for="glitch in lastGlitches"
      :key="glitch.title"
      :cols="glitch.flex"
      xs12
      sm6
      lg4
      pa-2
    >
      <Glitch :glitch="glitch" />
    </v-flex>
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
