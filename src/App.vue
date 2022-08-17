<template>
  <div id="app">
    <Header/>
    <Hero/>
    <div class="container">
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
