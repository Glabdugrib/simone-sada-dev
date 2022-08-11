<template>
  <section id="hero">
    <div class="row">
      <div class="col-12">
        <!-- <h3 class="overline">{{ $t("hero.overline") }}</h3> -->
        <!-- <h2 class="subtitle">{{ $t("hero.mainTitle_firstRow") }}</h2> -->
        <h1 class="main-title"><span class="highlight">Simone Sada</span></h1>
        <h2 class="subtitle">Full Stack Web Developer</h2>
        <!-- <p class="description">{{ $t("hero.description") }}</p> -->
        <!-- <a class="cta-btn" :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">{{ $t("hero.cta") }}</a> -->
        <a href="#projects" class="scroll-down-arrow">
          <svg class="arrow first-arrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          <svg class="arrow second-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          <svg class="arrow third-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>        
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import state from '../store'

export default {
  computed: {
    emailMessage() {
      return this.$t('contacts.emailMessage') // attinge dai file locale delle lingue
    },
    contactLinks() {
      return state.contactLinks
    },
    email() {
      return state.email
    }
  },
  methods: {
    URLEncode(string) { // converte con l'encoding corretto senza spazi
      return string.replace(' ', '%20')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cherish&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

#hero {
  text-align: left;
  height: max(100vh,530px);

  .row {
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    .col-12 {
      // height: 100%;
      // position: relative;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: $light-text;
    line-height: 1.1;
  }

  .overline {
    margin: 0px 0px 30px 4px;
    color: $highlight;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
  }

  .main-title {
    margin: 0px;
    margin-bottom: 40px;
    font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
    // font-family: PT Mono, monospace;
    // font-family: 'Mr Dafoe', cursive;
    // font-family: 'Cherish', cursive;
    font-family: 'Audiowide', cursive;
    // font-family: 'Vujahday Script', cursive;
    font-weight: 400;
  }

  .subtitle {
    margin: 0px;
    font-size: clamp(20px, 4vw, 35px);
    // margin-top: 10px;
    color: $text;
    line-height: 0.9;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  }

  .description {
    margin: 20px 0px 0px;
    max-width: 540px;
    font-size: 18px;
    line-height: 24px;
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    color: $text;
    margin-bottom: 50px;
  }

  .btn {
    color: $highlight;
    border: 1px solid $highlight;
    font-size: 14px;
    padding: 28px 20px;
    margin-bottom: 50px;
    background-color: transparent;
  }

  .scroll-down-arrow {
    position: absolute;
    bottom: -30px;
    // border: 1px solid white;
    color: rgba($color: $text, $alpha: 0.3);
    transition: all ease-in-out .3s;

    &:hover {
      color: rgba($color: $highlight, $alpha: 0.6);
    }

    .arrow {
      // min-width: 40px;
      aspect-ratio: 1;
      position: absolute;
      left: 50%;
      // bottom: 50%;
      transform: translate(-50%, -50%);

      &.first-arrow {
        width: 36px;
        bottom: 50px;
      }

      &.second-arrow {
        width: 36px;
        bottom: 25px;
      }

      &.third-arrow {
        width: 36px;
        bottom: 0;
      }
    }
  }
}

</style>