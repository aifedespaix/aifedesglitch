<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          :href="tweetUrl"
          target="_blank"
          rel="noopener"
          color="normal"
          icon
          aria-label="Partager sur Twitter"
          name="Partager sur Twitter"
        >
          <v-icon color="grey lighten-1">$vuetify.icons.twitter</v-icon>
        </v-btn>
      </template>
      <span>Partager sur Twitter</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          :href="facebookUrl"
          target="_blank"
          rel="noopener"
          color="normal"
          aria-label="Partager sur Facebook"
          name="Partager sur Facebook"
          icon
        >
          <v-icon color="grey lighten-1">$vuetify.icons.facebook</v-icon>
        </v-btn>
      </template>
      <span>Partager sur Facebook</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    glitch: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    facebookUrl() {
      const url = encodeURIComponent(
        this.$fdg.url.canonic(this.$fdg.url.routing.glitch(this.glitch))
      )
      const text = encodeURIComponent(this.glitch.page.title)
      return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${text}`
    },
    tweetUrl() {
      const url = encodeURIComponent(
        this.$fdg.url.canonic(this.$fdg.url.routing.glitch(this.glitch))
      )
      const via = 'aifedesglitch'
      const text = encodeURIComponent(this.glitch.page.title)
      return `https://twitter.com/intent/tweet?url=${url}&via=${via}&text=${text}`
    }
  }
}
</script>
