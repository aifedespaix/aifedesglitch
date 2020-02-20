<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" :href="tweetUrl" target="_blank" color="normal" icon>
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
          color="normal"
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
    page: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    facebookUrl() {
      const url = encodeURIComponent(
        `https://aifedesglitch.com${this.$nuxt.$route.path}`
      )
      const text = encodeURIComponent(this.page.title)
      return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${text}`
    },
    tweetUrl() {
      const url = encodeURIComponent(
        `https://aifedesglitch.com${this.$nuxt.$route.path}`
      )
      const via = 'aifedesglitch'
      const text = encodeURIComponent(this.page.title)
      return `https://twitter.com/intent/tweet?url=${url}&via=${via}&text=${text}`
    }
  }
}
</script>
