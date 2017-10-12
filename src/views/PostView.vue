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
    <div class="pt5 indent center mw-85" v-if="currentPost.content">
      <div class="Row">
        <div class="ColumnSeventy">
          <article class="">
            <header class="ml3 no-indent">
              <h1>{{ currentPost.title }}</h1>
            </header>
            <aside class="pa4 pl0">
              <div class="ml3 no-indent" v-html="currentPost.content"></div>
            </aside>
            <figure class="ml3 mw6" v-if="currentPost.image">
              <img :src="currentPost.image.source_url">
            </figure>
          </article>
        </div>
        <div class="dn db-ns ColumnQuarter">
          <aside class="SidebarItem">
            <header class="SidebarItem__header">
              <h3>My Work</h3>
            </header>
            <ul>
              <li v-for="post in limitedPosts" v-bind:key="post.slug">
                <router-link :to="{ name: 'post', params: { slug: post.slug } }">
                  {{ post.title }}
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
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

  watch: {
    '$route': 'fetchItem'
  },

  computed: {
    ...mapGetters([
      'currentPost',
      'limitedPosts',
    ]),
  },

  methods: {
    fetchItem() {
      this.$store.dispatch('getPost', this.$route.params.slug)
    }
  }

}
</script>

<style lang="stylus" scoped>
/**
 * 404
 */
.Jumbotron {
  padding: 1em 0;
  margin-bottom: 1.5em;
  background: #fff;
  border-bottom: 1px solid #ccc;
}

h3 {
  padding: 1em 0;
  margin: 0 auto;
}

/**
 * Main
 */
.SidebarItem {
  margin-bottom: 1em;

  &__header {
    background: #fff;
    padding: 1em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 1em;
      background: #fefefe;
      border-top: 1px solid #eee;
    }
  }
}
</style>
