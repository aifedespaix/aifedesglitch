<template>
  <v-flex>
    <h2 class="display-2 my-2">Items</h2>
    <v-carousel
      :hide-delimiters="sortedItems.length === 1"
      :show-arrows="sortedItems.length > 1"
    >
      <v-carousel-item :key="i" v-for="(items, i) in sortedItems">
        <v-layout row>
          <v-flex
            :key="i"
            @click.stop="selectItem(item)"
            v-for="item in items"
            pl-2
            pr-2
            sm4
          >
            <v-card>
              <ImageFdg :image="item.thumbnail" aspect-ratio="1" />
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
      eager
      max-width="600px"
      scrollable
      transition="dialog-bottom-transition"
    >
      <v-card v-if="activeItem">
        <v-card-title class="headline">
          {{ activeItem.name }}
        </v-card-title>

        <v-card-text>
          {{ activeItem.description }}
        </v-card-text>

        <ImageFdg :image="activeItem.thumbnail" />

        <template v-if="activeItem.obtain">
          <v-card-title class="display-2 my-2" tag="h3">
            Obtention
          </v-card-title>
          <v-card-text v-html="$md.render(activeItem.obtain)"></v-card-text>
        </template>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import ImageFdg from '~/components/images/fdg.vue'

export default {
  components: {
    ImageFdg
  },
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
