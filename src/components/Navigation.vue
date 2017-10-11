<template>
  <div class="flex justify-end">
    <a class="pointer h2 w2" @click="toggleNavigation">
      <span id="top-bar" class="db mt1 mb1 h-15 w-100 br3" :class="{ 'bg-white-90': navigation, 'bg-primary': !navigation }"></span>
      <span id="middle-bar" class="db mt1 mb1 h-15 w-100 br3" :class="{ 'bg-white-90': navigation, 'bg-primary': !navigation }"></span>
      <span id="bottom-bar" class="db mt1 mb1 h-15 w-100 br3" :class="{ 'bg-white-90': navigation, 'bg-primary': !navigation }"></span>
    </a>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from '../store/mutation-types';

export default {

  computed: {
    ...mapState([
      'navigation',
    ]),
  },

  methods: {
    toggleNavigation() {
      if (!this.navigation) {
        this.$store.commit(OPEN_NAVIGATION);
      } else {
        this.$store.commit(CLOSE_NAVIGATION);
      }
    },
  }

}

</script>

<style lang="stylus" scoped>
.h-15 {
  height: 15%;
}

.rotate-enter-active {
  animation: rotate-in 0.5s;
}

.rotate-leave-active {
  animation: rotate-in 0.5s reverse;
}

@keyframes rotate-in {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(70deg);
  }

  100% {
    transform: rotate(135deg);
  }
}
</style>
