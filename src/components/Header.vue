<template>
  <div class="flex flex-column ease-all" :class="{ 'bg-primary': navigation }">
    <header class="w-100 pa3 z-999 fixed" :class="{ 'bg-white-90': !navigation }">
      <div class="indent center mw-85 flex justify-between items-center">
        <!-- Title -->
        <h2>
          <router-link to="/" :class="{ 'fill-white-90': navigation, primary: !navigation }">
            <svg class="h2" aria-labelledby="simpleicons-ghost-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title id="simpleicons-ghost-icon">Ghost icon</title>
              <path d="M9.604 19.199H.008V24h9.597v-4.801zm14.39 0h-9.591V24h9.591v-4.801zm.003-9.599H0v4.8h23.997V9.6zM24 0h-4.801v4.801H24V0zm-9.596 0H.008v4.801h14.396V0z" />
            </svg>
          </router-link>
        </h2>

        <!-- Nav -->
        <navigation></navigation>

      </div>
    </header>

    <!-- Nav Wrap -->
    <transition name="fade">
      <div class="mt5 w-100 vh-100" v-if="navigation">
        <div class="indent center mw-85">

          <ul class="list pa2 tc">
            <li v-for="page in orderedPages" v-bind:key="page.slug" class="mt3 pa2 f3 f1-ns">
              <router-link :to="{ name: 'page', params: { slug: page.slug } }" @click.native="closeNavigation" class="white ttu">
                {{ page.title }}
              </router-link>
            </li>
          </ul>

        </div>
      </div>
    </transition>

  </div>
</template>

<script>

import { orderBy } from 'lodash'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

import { delay } from '../services/UtilsService'
import Navigation from '../components/Navigation.vue'

export default {

  components: { Navigation },

  data() {
    return {
      isLoading: true,
    }
  },

  created() {
    return delay(this.delay)
      .then(this.getAllPages)
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
      items: 'allPages',
    }),
    orderedPages() {
      return orderBy(this.items, 'slug')
    },
    icon() {
      return require('../static/icon.svg');
    },
  },

  methods: {
    ...mapActions([
      'getAllPages'
    ]),
    ...mapMutations({
      closeNavigation: 'CLOSE_NAVIGATION',
    }),
  }

}

</script>

<style lang="stylus" scoped>
.mt5 {
  margin-top: 5.4rem;
}

.ease-all {
  transition: all 0.3s ease-in-out;
}

.fa {
  cursor: pointer;
}

.fill-white-90 {
  fill: white;
}
</style>
