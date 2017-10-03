<template>
  <div>
    <div class="dn flex-ns flex-column-ns justify-center h1 h-75-ns indent center br3 mw-100 bg-top mt5-ns">
      <div class="nest-bg self-center z-999">
        <h1 class="f1">
          <mark class="dib lh-0 pb4 o-90 dark-gray">Shem Leong</mark>
        </h1>
        <h3 class="f3 white-80 tc">Full-stack Developer</h3>
      </div>
      <!--<img class="o-70 vh-75-ns" :src="backgroundImage" />-->
    </div>
    <div class="flex flex-column pt6 indent center mw-85">
      <h1 class="dn db-ns pa2 self-center">Portfolio</h1>
      <div class="Row">
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
import { mapGetters, mapActions } from 'vuex'

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
    return this.getAllPosts()
      .then(() => {
        this.isLoading = false
      })
  },

  computed: {
    ...mapGetters({
      items: 'allPosts',
    }),
    backgroundImage() {
      return require('../static/bg.jpg');
    },
  },

  methods: {
    ...mapActions([
      'getAllPosts'
    ]),
  }

}

</script>

<style lang="stylus" scoped>

.lh-0
  line-height: 0

.nest-bg:after
  content: ''
  height: 75vh
  opacity: .7
  background: url(../static/bg.jpg)


@media only screen and (min-width: 640px)
  .vh-95-ns
    height: 95vh

  .mt5-ns
    margin-top: 5.4rem

</style>
