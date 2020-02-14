<template>
  <v-card v-if="glitch" class="mx-auto" max-width="400">
    <v-img
      v-if="glitch.page.banner"
      :src="glitch.page.banner.url | fdgApiUrl"
      class="white--text align-end"
      height="200px"
    >
      <v-card-title>{{ glitch.page.title }}</v-card-title>
    </v-img>

    <v-card-title v-else>{{ glitch.page.title }}</v-card-title>

    <v-card-text class="text--primary">
      {{ glitch.page.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="normal" text>
        Partager
      </v-btn>

      <v-spacer />

      <v-btn
        :to="'./' + glitch.page.slug + '/' + glitch.id"
        color="primary"
        raised
        router
      >
        Voir
      </v-btn>
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
  }
}
</script>
