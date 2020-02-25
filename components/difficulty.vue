<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <v-rating :value="difficulty.level" length="4" readonly max="4">
          <template v-slot:item="props">
            <v-icon
              :color="props.isFilled ? difficulty.color : ''"
              class="difficulty-star"
            >
              $vuetify.icons.medium
            </v-icon>
          </template>
        </v-rating>
      </div>
    </template>
    <span>{{ difficulty.name }}</span>
  </v-tooltip>
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
