<template>
  <v-rating :value="difficulty.level" length="4" readonly max="4">
    <template v-slot:item="props">
      <v-icon
        :color="props.isFilled ? difficulty.color : ''"
        class="difficulty-star"
      >
        $vuetify.icons.{{ difficulty.icon }}
      </v-icon>
    </template>
  </v-rating>
</template>

<script>
export default {
  props: {
    difficulty: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.difficulty-star {
  width: 3rem;
  height: 3rem;
}
</style>
