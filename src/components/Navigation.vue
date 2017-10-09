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
import { Power2, TimelineLite } from "gsap";

import { TOGGLE_NAVIGATION } from '../store/mutation-types';

export default {

  computed: {
    ...mapState([
      'navigation',
    ]),
  },

  methods: {
    toggleNavigation() {
      this.$store.commit(TOGGLE_NAVIGATION);

      const t1 = new TimelineLite();

      t1.to('#top-bar', 0.5, { x: -30, y: 0, rotation: 180, ease: Power2.easeOut });

      t1.to('#middle-bar', 0.5, { x: -80, opacity: 0, ease: Power2.easeOut }, "-=0.5");

      t1.to('#middle-bar', 0, { x: 160, ease: Power2.easeOut });

      t1.to('#top-bar', 0.5, { x: 0, y: 9, rotation: 180, ease: Power2.easeOut });

      t1.to('#middle-bar', 0.5, { x: 0, y: -9, opacity: 1, ease: Power2.easeOut, onComplete: timelineDone }, "-=0.5");

      function timelineDone() {
        t1.pause();
        t1.seek(0);
      }
    },
  }

}

</script>

<style lang="stylus" scoped>

.h-15
  height: 15%

.rotate-enter-active
  animation: rotate-in .5s;

.rotate-leave-active
  animation: rotate-in .5s reverse;

@keyframes rotate-in
  0%
    transform: rotate(0deg);

  50%
    transform: rotate(70deg);

  100%
    transform: rotate(135deg);

</style>
