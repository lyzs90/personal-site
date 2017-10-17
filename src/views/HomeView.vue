<template>
  <div v-show="!navigation">
    <div class="flex flex-column justify-center h-75 indent center br3 mw-100 bg-top mt5">
      <video class="dn db-ns w-100" autoplay loop>
        <source :src="backgroundMp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        <source :src="backgroundWebm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <img class="dn-ns o-80 vh-65" :src="backgroundImage" alt="background" />
      <div class="absolute self-center">
        <h1 class="f1 f1-ns mt1 mb1 white tc">Shem Leong</h1>
        <h3 class="f4 f3-ns white-90 tc">Full-stack Developer</h3>
      </div>
    </div>
    <div class="flex flex-column pt5 indent center mw-85">
      <h1 class="dn db-ns pa2 self-center">My Work</h1>
      <div class="flex flex-wrap">
        <post v-if="items.length > 0" v-for="item in items" :item="item" v-bind:key="item.slug">
        </post>
        <div class="InfoMessage" v-if="items.length < 1 && !isLoading">
          <h3>Seems like this site doesn't have any post yet...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import path from 'path'
import { mapState, mapGetters, mapActions } from 'vuex'

import { delay } from '../services/UtilsService'

const Post = () => import(
  /* webpackChunkName: "below-fold" */ '../components/Post.vue'
);

export default {

  components: { Post },

  data() {
    return {
      isLoading: true,
    }
  },

  created() {
    return delay(this.delay)
      .then(this.getAllPosts)
      .then(() => {
        this.isLoading = false
      })
  },

  computed: {
    ...mapState([
      'navigation',
      'delay',
    ]),
    ...mapGetters({
      items: 'allPosts',
    }),
    backgroundImage() {
      return require('../static/bg.jpg');
    },
    backgroundMp4() {
      return require('../static/bg.mp4')
    },
    backgroundWebm() {
      return require('../static/bg.webm')
    }
  },

  methods: {
    ...mapActions([
      'getAllPosts'
    ]),
  }

}

</script>

<style lang="stylus" scoped>
.f1 {
  font-size: 3rem;
}

@media all and (min-width: 600px) {
  .f1-ns {
    font-size: 4rem;
  }
}

.lh-0 {
  line-height: 0;
}

.vh-65 {
  height: 65vh;
}
</style>
