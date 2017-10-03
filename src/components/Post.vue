<template>
  <div class="mw-100 pa3 pa1-ns vh-50-ns" :class="widthNs">
    <router-link :to="{ name: 'post', params: { slug: item.slug } }" class="flex flex-column justify-center-ns cover 0-90 br2 h-100-ns grow" :style="{ 'background-color': color }">
      <header class="flex items-center pa3 self-center-ns">
        <h2 class="dark-gray tc pa1">{{ trimTitle }}</h2>
      </header>
      <div class="pa4 gray f5 tc">
        {{ item.content }}
      </div>
    </router-link>
  </div>
</template>

<script>

import { findIndex } from 'lodash'
import { mapGetters } from 'vuex'

import { mapStyles } from '../services/UtilsService'

export default {

  props: ['item'],

  data() {
    return {
      colors: ['#00FBBE', '#F8F8F8', '#E0E0E0', '#DFC360', '#F1F1F1', '#61F8E9', '#F8F8F8', '#E0E0E0', '#252424'],

      widths: ['w-third-ns', 'w-two-thirds-ns', 'w-100-ns', 'w-two-thirds-ns', 'w-third-ns', 'w-100-ns']
    }
  },

  computed: {
    trimTitle() {
      if (this.item.title.length < 34) {
        return this.item.title
      } else {
        return this.item.title.substring(0, 35) + '...'
      }
    },

    trimExcerpt() {
      return this.item.excerpt.substring(3, 110) + '...'
    },

    color() {
      const colorsArray = mapStyles(this.items)(this.colors)
      const itemIndex = findIndex(this.items, { 'id': this.item.id })

      return colorsArray[itemIndex]
    },

    widthNs() {
      const widthsArray = mapStyles(this.items)(this.widths)
      const itemIndex = findIndex(this.items, { 'id': this.item.id })

      return widthsArray[itemIndex]
    },

    ...mapGetters({
      items: 'allPosts'
    }),
  }

}

</script>

<style lang="stylus" scoped>

.flex-grow-2
  flex-grow: 2

@media all and (min-width: 600px)

  .pa1-ns
    padding: 0.15rem

</style>
