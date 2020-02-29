<template>
  <div>
    {{ reactions }}
  </div>
</template>
<script>
export default {
  props: {
    reactions: {
      type: Object,
      default: null
    }
  }
}
</script>
