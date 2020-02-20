<template>
  <v-card v-if="glitch" class="mx-auto body-1">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-img :src="glitch.page.author.avatar.url | fdgApiUrl"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-list-item-title v-on="on" class="headline">
              {{ glitch.page.title }}
            </v-list-item-title>
          </template>
          <span>{{ glitch.page.title }}</span>
        </v-tooltip>
        <v-list-item-subtitle v-if="glitch.page.author.username"
          >par {{ glitch.page.author.username }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-img
      v-if="glitch.page.thumbnail"
      :src="glitch.page.thumbnail.url | fdgApiUrl"
      height="200px"
    >
    </v-img>

    <v-card-text class="text--primary">
      {{ glitch.page.description }}
    </v-card-text>

    <v-card-actions>
      <Share :page="glitch.page" />

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
import Share from '~/components/btns/share.vue'
export default {
  components: {
    Share
  },
  props: {
    glitch: {
      type: Object,
      default: null
    }
  },
  computed: {
    glitchUrl() {
      return `/${this.glitch.category.page.slug}/${this.glitch.page.slug}/${this.glitch.id}`
    }
  }
}
</script>
