<template>
  <div>
    <!-- 404 -->
    <div class="Jumbotron" v-if="error">
      <div class="pt5 indent center mw-85">
        <div class="Row items-center">
          <h3>Page not found...</h3>
        </div>
      </div>
    </div>
    <!-- Main -->
    <div class="pt6 indent center mw-85" v-if="currentPage">
      <div class="Row">
        <article class="PageSingle">
          <figure class="BlogPostSingle__images" v-if="currentPage.image">
            <img :src="currentPage.image.source_url">
          </figure>
          <header class="BlogPostSingle__header">
            <h1>{{ currentPage.title }}</h1>
          </header>
          <aside class="BlogPostSingle__content">
            <div v-html="currentPage.content"></div>
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

/**
 * 404
 */
.Jumbotron
  padding: 1em 0
  margin-bottom: 1.5em
  background: #fff
  border-bottom: 1px solid #ccc

h3
  padding: 1em 0
  margin: 0 auto

/**
 * Main
 */
.fade-enter-active
  transition: opacity 0.5s

.fade-leave-active
  @extend .fade-enter-active

.fade-enter
  opacity: 0

.fade-leave
  @extend .fade-enter

@media only screen and (max-width: 640px)
  .PageSingle
    margin: 1em 0

</style>
