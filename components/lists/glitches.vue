<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="glitch in glitches"
        :key="glitches.id"
        class="d-flex"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <Glitch :glitch="glitch" />
      </v-col>
    </v-row>
    <infinite-loading @infinite="loadMore"></infinite-loading>
  </v-container>
</template>

<script>
import Glitch from '~/components/cards/Glitch.vue'

export default {
  components: {
    Glitch
  },
  props: {
    glitches: {
      type: Array,
      default: null
    },
    filter: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    page: 0,
    perPage: 5
  }),
  methods: {
    loadMore($state) {
      this.$glitch
        .filter([
          { arg: '_start', value: this.page++ * this.perPage },
          { arg: '_limit', value: this.perPage },
          ...this.filter
        ])
        .then((data) => {
          if (data.length) {
            const merge = (a, b, p) =>
              a.filter((aa) => !b.find((bb) => aa[p] === bb[p])).concat(b)
            merge(this.glitches, data)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
    }
  }
}
</script>
