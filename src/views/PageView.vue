<template>
  <div>
    <!-- 404 -->
    <div class="pt1 pb1 mb1 bg-white bb b--gray" v-if="error">
      <div class="pt5 indent center mw-85">
        <div class="flex flex-wrap items-center">
          <h3 class="center no-indent pt1 pb1">Page not found...</h3>
        </div>
      </div>
    </div>
    <!-- Main -->
    <div class="pt6 indent center mw-85" v-if="currentPage">
      <div class="flex flex-wrap">
        <article class="">
          <figure class="" v-if="currentPage.image">
            <img :src="currentPage.image.source_url">
          </figure>
          <header class="">
            <h1>{{ currentPage.title }}</h1>
          </header>
          <aside class="mw7 pa2">
            <div v-html="currentPage.content" class="no-indent"></div>
          </aside>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {

  data() {
    return {
      error: false
    }
  },

  created() {
    this.fetchItem()
  },

  computed: {
    ...mapGetters([
      'currentPage',
    ]),
  },

  watch: {
    '$route': 'fetchItem'
  },

  methods: {
    fetchItem() {
      this.$store.dispatch('getPage', this.$route.params.slug)
    }
  }

}
</script>

<style lang="stylus" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  @extend .fade-enter-active;
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  @extend .fade-enter;
}

@media only screen and (max-width: 640px) {
  .PageSingle {
    margin: 1em 0;
  }
}
</style>
