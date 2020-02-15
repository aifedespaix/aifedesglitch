<template>
  <v-card v-if="glitch" class="mx-auto" max-width="400">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-img :src="glitch.page.author.avatar.url | fdgApiUrl"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{
          glitch.page.title
        }}</v-list-item-title>
        <v-list-item-subtitle v-if="glitch.page.author.username"
          >par {{ glitch.page.author.username }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-img
      v-if="glitch.page.banner"
      :src="glitch.page.banner.url | fdgApiUrl"
      :to="glitchUrl"
      class="white--text align-end"
      height="200px"
    >
    </v-img>

    <v-card-title v-else>{{ glitch.page.title }}</v-card-title>

    <v-card-text class="text--primary">
      {{ glitch.page.description }}
    </v-card-text>

    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" :href="tweetUrl" target="_blank" color="normal" icon>
            <v-icon>mdi-twitter</v-icon>
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
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </template>
        <span>Partager sur Facebook</span>
      </v-tooltip>

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" :to="glitchUrl" color="primary" raised router>
            Voir
          </v-btn>
        </template>
        <span>Accéder à l'article</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    glitch: {
      type: Object,
      default: null
    }
  },
  computed: {
    glitchUrl() {
      return `/${this.glitch.category.page.slug}/${this.glitch.page.slug}/${this.glitch.id}`
    },
    tweetUrl() {
      const url = encodeURIComponent(
        `https://aifedesglitch.com${this.$nuxt.$route.path}`
      )
      const via = 'aifedespaix'
      const text = encodeURIComponent(this.glitch.page.title)
      return `https://twitter.com/intent/tweet?url=${url}&via=${via}&text=${text}`
    },
    facebookUrl() {
      const url = encodeURIComponent(
        `https://aifedesglitch.com${this.$nuxt.$route.path}`
      )
      const text = encodeURIComponent(this.glitch.page.title)
      return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${text}`
    }
  }
}
</script>
