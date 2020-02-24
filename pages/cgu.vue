<template>
  <v-container fluid>
    <h1>{{ simplePage.page.title }}</h1>
    <div v-html="$md.render(simplePage.page.main)"></div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    simplePage: null
  }),
  head() {
    return this.$fdg.seo.title(this.simplePage.page)
  },
  async asyncData() {
    const simplePageUrl = `https://aifedesglitch.aifedespaix.com/simple-pages/?name=cgu`
    return { simplePage: (await axios.get(simplePageUrl)).data[0] }
  }
}
</script>
