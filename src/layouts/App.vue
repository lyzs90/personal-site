<template>
  <div class="flex flex-column">
    <header-bar></header-bar>
    <section class="MainSection">
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </section>
    <footer-bar></footer-bar>
  </div>
</template>

<script>

import HeaderBar from '../components/Header.vue'
import FooterBar from '../components/Footer.vue'

export default {

  components: { HeaderBar, FooterBar }

}

</script>

<style lang="stylus">
$primary = #5C5F61;
$accent = #00FBBE;

.primary {
  color: $primary;
}

.accent {
  color: $accent;
}

.bg-primary {
  background-color: $primary;
}

.b--primary {
  border-color: $primary;
}

.mw-85 {
  max-width: 85vw;
}

.no-indent {
  text-indent: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  font-family: 'Arvo', serif;
  font-weight: 300;
  font-size: 0.9em;
  height: 100%;
  overflow-x: hidden;
}

a {
  color: $accent;
  text-decoration: none;
}

p {
  color: #444;
  font-family: 'Arvo', serif, Arial;
}

h1, h2, h3, h4, h5, h6 {
  color: #343434;
  transition: all 0.5s ease-in-out;
}

.view {
  transition: opacity 0.3s ease-in-out;
  flex: 1;
  min-height: 100vh;
}

.fade-enter-active {
  transition: opacity 0.3s;
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
</style>
