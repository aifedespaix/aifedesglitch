<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="glitch in glitchesList"
        :key="glitch.id"
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
      <v-col class="d-flex" cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <client-only>
          <infinite-loading @infinite="loadMore"></infinite-loading>
        </client-only>
      </v-col>
    </v-row>
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
    perPage: 5,
    loadedGlitches: []
  }),
  computed: {
    glitchesList() {
      const concat = [...this.glitches, ...this.loadedGlitches]
      return concat
        .map((e) => e.id)
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => concat[e])
        .map((e) => concat[e])
    }
  },
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
            this.loadedGlitches = this.loadedGlitches.concat(data)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
    }
  }
}
</script>
