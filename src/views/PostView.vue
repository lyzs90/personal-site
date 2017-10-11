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
            <figure class="" v-if="currentPost">
              <img :src="currentPost.source_url">
            </figure>
            <header class="">
              <h1>{{ currentPost.title }}</h1>
            </header>
            <aside class="">
              <div v-html="currentPost.content"></div>
            </aside>
          </article>
        </div>
        <div class="ColumnQuarter">
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
.BlogPostSingle {
  &__header {
    h1 {
      font-size: 4em;
      padding: 0.3em 0;
    }
  }

  &__content {
    color: #444;

    h1, h2, h3, h4, h5, h6 {
      padding: 0.3em 0;
    }
  }
}

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
  .BlogPostSingle {
    margin: 1em 0;

    &__header {
      h1 {
        font-size: 2.5em;
      }
    }
  }
}
</style>
