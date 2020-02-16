<template>
  <v-img :src="image.url | fdgApiUrl" class="fdgImage"></v-img>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.fdgImage {
  background: rgb(27, 64, 145);
  background: linear-gradient(
    149deg,
    rgba(27, 64, 145, 1) 0%,
    rgba(2, 143, 76, 1) 100%
  );
}
</style>
