<template>
  <section id="hero">
    <!-- Particles -->
    <vue-particles
      color="#5afed7"
      :particleOpacity="0.35"
      :particlesNumber="70"
      shapeType="circle"
      :particleSize="3"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="150"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!-- Titles -->
    <div class="title-wrapper">
      <h1 class="main-title">{{ $t("hero.mainTitle") }}</h1>
      <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
    </div>
    <!-- Arrow button -->
    <a href="#projects" class="scroll-down-arrow">
      <svg
        class="arrow first-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
      </svg>
      <svg
        class="arrow second-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
      </svg>
      <svg
        class="arrow third-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
      </svg>
    </a>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

#hero {
  position: relative;
  margin: 0;
  padding: 0;
  height: max(100vh, 530px);
  max-width: 100%;
  text-align: left;

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    @include text-shadow;

    h1,
    h2 {
      margin: 0px 0px 10px;
      font-weight: 600;
      color: $light-text;
      line-height: 1.1;
    }

    .main-title {
      margin: 0px 0px 40px 0;
      font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
      font-family: "Audiowide", cursive;
      font-weight: 400;
      color: $highlight;
    }

    .subtitle {
      margin: 0px;
      font-size: clamp(20px, 4vw, 35px);
      color: $text;
      line-height: 0.9;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    }
  }

  .scroll-down-arrow {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transition: all ease-in-out 0.3s;
    transform: translateX(-50%);
    color: rgba($color: $text, $alpha: 0.3);

    &:hover {
      color: rgba($color: $highlight, $alpha: 1);
    }

    .arrow {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 1;
      padding: 15px;

      &.first-arrow {
        bottom: 50px;
        width: 70px;
      }

      &.second-arrow {
        bottom: 25px;
        width: 70px;
      }

      &.third-arrow {
        bottom: 0;
        width: 70px;
      }
    }
  }
}
</style>