<template>
  <div class="flex flex-column ease-all" :class="{ 'bg-primary': navigation }">
    <header class="w-100 pa3 z-999 fixed" :class="{ 'bg-white-90': !navigation }">
      <div class="indent center mw-85 flex justify-between items-center">
        <!-- Title -->
        <h2>
          <router-link to="/" :class="{ 'fill-white-90': navigation, primary: !navigation }">
            <svg id="header-icon" @mouseover="iconBounce" width="50" height="50" viewBox="0 0 418 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Design 1.2</title>
              <desc>Created using Figma</desc>
              <g id="Canvas" transform="translate(1632 -1025)">
                <g id="Design 1.2">
                  <g id="Eye" filter="url(#filter0_d)">
                    <use xlink:href="#path0_fill" transform="translate(-1551.82 1025.04)" fill="#000000" fill-opacity="0.57" />
                  </g>
                  <g id="Iris">
                    <use xlink:href="#path1_fill" transform="translate(-1490.32 1059.04)" fill="#FFFFFF" />
                  </g>
                  <g id="Pupil">
                    <use xlink:href="#path2_fill" transform="translate(-1445.82 1076.04)" fill="#828282" />
                  </g>
                  <g id="Fork">
                    <use xlink:href="#path3_fill" transform="matrix(0.938346 0.345696 -0.486993 0.873406 -1238.81 1060.23)" fill="#000000" fill-opacity="0.57" />
                  </g>
                  <g id="Knife">
                    <use xlink:href="#path4_fill" transform="matrix(0.885055 -0.465486 0.586751 0.809767 -1634.99 1070.77)" fill="#000000" fill-opacity="0.57" />
                  </g>
                  <g id="Ellipse 2" filter="url(#filter1_d)">
                    <use xlink:href="#path5_fill" transform="translate(-1473.65 1286.25)" fill="#000000" fill-opacity="0.57" />
                  </g>
                </g>
              </g>
              <defs>
                <filter id="filter0_d" filterUnits="userSpaceOnUse" x="-1556" y="1025" width="267" height="266" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" />
                  <feOffset dx="0" dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter1_d" filterUnits="userSpaceOnUse" x="-1478" y="1286" width="112" height="49" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" />
                  <feOffset dx="0" dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <path id="path0_fill" d="M 258 128.5C 258 199.469 200.245 257 129 257C 57.7553 257 0 199.469 0 128.5C 0 57.5314 57.7553 0 129 0C 200.245 0 258 57.5314 258 128.5Z" />
                <path id="path1_fill" d="M 149 78.5C 149 121.854 115.645 157 74.5 157C 33.3548 157 0 121.854 0 78.5C 0 35.1456 33.3548 0 74.5 0C 115.645 0 149 35.1456 149 78.5Z" />
                <path id="path2_fill" d="M 93 45C 93 69.8528 72.1812 90 46.5 90C 20.8188 90 0 69.8528 0 45C 0 20.1472 20.8188 0 46.5 0C 72.1812 0 93 20.1472 93 45Z" />
                <path id="path3_fill" d="M 1.50068 0L 0 1.40568L 0 31.3265L 0 39.5598L 0.575901 41.5679L 1.8706 44.1785L 3.52495 46.1866L 5.26919 47.9939L 6.29747 48.5963L 7.28901 48.9979L 8.36093 49.3996L 9.38233 49.8012L 10.657 50.002L 8.57026 70.8793L 6.2171 90.1642L 5.30981 105.139L 5.30981 108.437L 7.3965 111.125L 9.61361 112.957L 13.3957 112.957L 16.2931 112.957L 18.6513 111.125L 21.0095 108.437L 21.0095 105.139L 21.0095 96.9539L 19.9376 87.0587L 18.6513 78.4253L 17.5794 70.8793L 16.9362 62.4523L 16.2931 57.6739L 16.2931 53.6988L 16.2931 50.002L 17.5794 49.8012L 18.6513 49.3497L 19.9376 48.5963L 21.0095 47.9939L 22.0814 47.1906L 23.1533 46.1866L 24.0109 45.5841L 24.8684 44.1785L 25.5115 43.1744L 25.9403 41.5679L 26.5835 40.1622L 26.5835 1.40568L 25.5115 0.602434L 25.0828 0L 24.0109 0L 22.7246 0L 21.6527 1.00406L 21.0095 2.00811L 21.0095 30.3225L 20.152 32.1298L 18.6513 32.5314L 17.7938 32.1298L 16.7219 31.3265L 15.8643 30.3225L 15.8643 2.00811L 15.4356 1.00406L 14.578 0L 13.7205 0L 12.4342 0L 11.3623 1.00406L 10.7191 2.00811L 10.7191 29.9209L 10.2904 31.3265L 9.64722 31.7282L 9.00407 32.5314L 7.71778 32.1298L 6.64586 31.7282L 5.78833 31.3265L 5.78833 29.9209L 5.78833 2.00811L 5.14518 1.00406L 3.43012 0L 1.50068 0Z" />
                <path id="path4_fill" d="M 0.512826 5.36818L 0.256413 6.32679L 0 15.6473L 0 59.1584L 0 60.2003L 0.512826 61.3507L 0.769239 62.3093L 1.53848 63.2679L 2.30772 64.2265L 3.07695 64.8016L 3.84619 65.3768L 4.87184 65.952L 6.15391 66.5438L 6.15391 102.115L 6.15391 108.322L 6.41032 109.089L 6.92315 110.048L 7.29363 111.198L 8.20521 111.773L 9.64873 112.54L 11.0258 112.924L 13.3335 113.115L 14.3591 112.732L 15.3848 112.54L 16.4104 111.965L 17.4361 111.582L 17.9489 111.198L 18.2053 110.239L 18.7181 109.473L 18.9746 108.869L 18.9746 64.8071L 18.9746 22.6231L 18.9746 7.66883L 18.9746 6.32679L 18.4617 4.98474L 17.6925 3.83442L 16.9233 2.87581L 16.154 1.91721L 15.1284 1.34205L 13.8463 0.575162L 12.8206 0.383442L 11.795 0L 10.5129 0L 9.48728 0L 7.9488 0L 6.66673 0.383442L 4.61543 1.15032L 3.33337 1.91721L 2.30772 2.49237L 1.28206 3.6427L 1.02565 4.40958L 0.512826 5.36818Z" />
                <path id="path5_fill" d="M 98.5368 18.8076C 80.0368 44.0408 75.4832 40.5486 51.1826 40.5486C 26.8821 40.5486 19.5368 40.0408 4.03681 18.8077C -12.4632 -6.45923 25.3821 1.04075 49.6826 1.04075C 73.9832 1.04075 115.962 -4.95923 98.5368 18.8076Z" />
              </defs>
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
        <div class="indent center pt5 mw-85">

          <ul class="list pa2 tc">
            <li v-for="page in orderedPages" v-bind:key="page.id" class="mt3 pa2 f3 f1-ns">
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
import { Bounce, TimelineLite } from 'gsap';

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
      return orderBy(this.items, 'id')
    },
  },

  methods: {
    ...mapActions([
      'getAllPages'
    ]),

    ...mapMutations({
      closeNavigation: 'CLOSE_NAVIGATION',
    }),

    iconBounce() {
      const t1 = new TimelineLite();

      t1.to('#header-icon', 0.5, {
        x: 0,
        y: -10,
        ease: Bounce.easeOut,
      });

      t1.to('#header-icon', 0.5, {
        x: 0,
        y: 0,
        ease: Bounce.easeOut,
      });
    }
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
