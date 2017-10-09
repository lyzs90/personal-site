<template>
  <div class="flex justify-end">
    <a @click="toggleNavigation">
      <span class="primary fa fa-2x fa-bars" v-if="!navigation"></span>
      <span class="white-90 fa fa-2x fa-close" v-if="navigation"></span>
    </a>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {

  computed: {
    ...mapState([
      'navigation',
    ]),
  },

  methods: {
    ...mapMutations({
      toggleNavigation: 'TOGGLE_NAVIGATION',
    }),
  }

}

</script>

<style lang="stylus" scoped>

.fa
  cursor: pointer

</style>
