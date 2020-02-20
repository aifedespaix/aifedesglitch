<template>
  <div class="text-center">
    <v-bottom-sheet v-model="show">
      <v-sheet class="text-center" height="8rem">
        <v-btn @click="close()" class="mt-6" color="primary">OK</v-btn>
        <div class="py-3">
          En cliquant sur OK ou en poursuivant la navigation, vous acceptez les
          CGU / politique de confidentialité et l'utilisation des cookies.
          <nuxt-link v-on:click.native="show = false" to="/cgu"
            >En savoir plus</nuxt-link
          >
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  mounted() {
    if (process.browser) {
      this.show = JSON.parse(localStorage.getItem('warn-cookies')) ?? true
    } else {
      this.show = false
    }
  },
  methods: {
    close() {
      this.show = false
      localStorage.setItem('warn-cookies', false)
    }
  }
}
</script>
