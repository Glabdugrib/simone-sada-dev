<template>
  <section id="hero">
    <div class="row">
      <div class="col-12">
        <h3 class="overline">{{ $t("hero.overline") }}</h3>
        <h1 class="main-title">{{ $t("hero.mainTitle") }}</h1>
        <h2 class="subtitle">{{ $t("hero.subtitle") }}</h2>
        <p class="description">{{ $t("hero.description") }}</p>
        <a class="cta-btn" :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">{{ $t("hero.cta") }}</a>
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

#hero {
  text-align: left;
  // height: max(100vh,530px);

  h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: $lightest-text;
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
    margin-bottom: 20px;
    font-size: clamp(40px, 8vw, 70px);
    // font-family: 'Roboto', sans-serif;
  }

  .subtitle {
    margin: 0px;
    font-size: clamp(20px, 4vw, 35px);
    // margin-top: 10px;
    color: $text;
    line-height: 0.9;
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
}

</style>