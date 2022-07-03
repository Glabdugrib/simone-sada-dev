<template>
  <section id="projects">
    <h2 class="title">Eccoci quà</h2>
    <Project/>
    <Project/>
    <Project/>
    <Project/>
  </section>
</template>

<script>
import Project from './ProjectCard.vue'

export default {
  components: {
    Project
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

#projects {
  width: 100%;

  .title {
    margin: 10px 0 40px 0;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    color: $lightest-slate;
    display: flex;
    align-items: center;
    // position: relative;

    &::before {
      content: "03.";
      display: block;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      color: $highlight;
      font-weight: 400;
      font-size: 24px;
      margin-right: 10px;
    }

    &::after {
      content: "";
      display: block;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      // position: absolute;
      // top: 50%;
      // left: 100%;
      // transform: translate(0, -50%);
      background-color: rgba($color: $light-slate, $alpha: 0.3);
    }
  }
}
</style>