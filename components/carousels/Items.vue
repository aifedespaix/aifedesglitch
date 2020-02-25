<template>
  <v-flex>
    <h2 class="display-2 my-2">Items</h2>
    <v-carousel
      :hide-delimiters="sortedItems.length === 1"
      :show-arrows="sortedItems.length > 1"
    >
      <v-carousel-item :key="i" v-for="(partItems, i) in sortedItems">
        <v-layout row>
          <v-flex
            :key="item.id"
            @click.stop="selectItem(item)"
            v-for="item in partItems"
            pl-2
            pr-2
            sm4
          >
            <v-card>
              <v-img
                :src="item.thumbnail.url | fdgApiUrl"
                aspect-ratio="1"
                class="fdgImage"
              />
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ item.name }}</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-dialog
      v-model="itemDialog"
      max-width="600px"
      transition="dialog-bottom-transition"
    >
      <v-card v-if="activeItem">
        <v-card-title class="headline">
          {{ activeItem.name }}
        </v-card-title>

        <v-card-subtitle>
          {{ activeItem.description }}
        </v-card-subtitle>

        <v-img
          :src="activeItem.thumbnail.url | fdgApiUrl"
          max-height="300px"
          class="fdgImage"
          contain
        />

        <template v-if="activeItem.obtain">
          <v-card-text tag="h3">
            <h4 class="display-2 my-2">Obtention</h4>
            <div v-html="$md.render(activeItem.obtain)"></div>
          </v-card-text>
        </template>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    quantity: {
      type: Number,
      default: 3
    }
  },
  data: () => ({
    itemDialog: false,
    activeItem: null
  }),
  computed: {
    sortedItems() {
      const sortedItems = []
      for (let i = 0; i < this.items.length; i += this.quantity) {
        sortedItems.push(this.items.slice(i, i + this.quantity))
      }
      return sortedItems
    }
  },
  methods: {
    dialogId(id) {
      return `dialog-${id}`
    },
    selectItem(item) {
      this.activeItem = item
      this.itemDialog = true
    }
  }
}
</script>
