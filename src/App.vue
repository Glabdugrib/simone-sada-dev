<template>
  <div id="app">
    <Header/>

    <!-- i18n tests -->
    <!-- <p>{{ $t('message') }}</p>
      <p>{{ $t('nav.features') }}</p> -->

    <!-- Router tests -->
    <!-- <router-view></router-view> -->

    <!-- Router link sample -->
    <!-- <router-link :to="`/${$i18n.locale}`">Home</router-link>
      <router-link :to="`/${$i18n.locale}/foo`">Foo</router-link> -->
    <div class="container">
      <Hero/>
      <Projects/>
      <Contacts/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/HeroSection.vue";
import Projects from "./components/ProjectsSection.vue";
import Contacts from "./components/ContactsSection.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Projects,
    Contacts,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_mixins.scss";
@import "./assets/scss/style.scss";
</style>
