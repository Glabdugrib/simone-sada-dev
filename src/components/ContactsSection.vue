<template>
  <section id="contacts">
    <!-- Contacts section -->
    <h2 class="section-title">{{ $t("contacts.sectionName") }}</h2>
    <ul class="social-list">
      <li class="social-btn">
        <a :href="contactLinks.Github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>LinkedIn</title><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Instagram" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Instagram</title><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
        </a>
      </li>
    </ul>
    <div class="contact-me">
      <p class="catch-phrase" v-html="catchPhrase"></p>
      <a class="cta-btn" :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">{{ $t("contacts.ctaBtn") }}</a>
    </div>

    <!-- Vertical social links (only desktop) -->
      <!-- Left -->
    <ul class="social-list vertical">
      <li class="social-btn">
        <a :href="contactLinks.Github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>LinkedIn</title><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Instagram" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Instagram</title><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </li>
    </ul>
      <!-- Right -->
    <div class="email vertical">
      <a :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">{{ email }}</a>
    </div>
  </section>
</template>

<script>
import state from '../store'

export default {
  computed: {
    emailMessage() {
      return this.$t('contacts.emailMessage')
    },
    catchPhrase() {
      return this.$t("contacts.catchPhrase")
    },
    contactLinks() {
      return state.contactLinks
    },
    email() {
      return state.email
    }
  },
  methods: {
    URLEncode(string) { // convert into the correct encoding (blanck space => %20)
      return string.replace(' ', '%20')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

#contacts {
  
  .section-title {

    &::before {
      content: "04.";
    }
  }

  // Social list section
  .social-list:not(.vertical) {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;

    .social-btn {
      transition: all ease-in-out 0.3s;

      &:hover {
        transform: scale(1.05);
        color: $highlight;
      }

      a {
        display: inline-block;
        padding: 10px;
        
        svg {
          min-width: calc(max(5vw, 38px));
          max-width: calc(max(5vw, 38px));
          aspect-ratio: 1;
        }
      }
    }
  }

  // Vertical social links (only desktop)
  .vertical {
    
    &.social-list,
    &.email {
      position: fixed;
      bottom: 0px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40px;
      color: $light-text;

      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: $light-text;
      }
    }

    &.social-list {
      left: 40px;
      right: auto;
    }

    &.email {
      left: auto;
      right: 40px;
      transition: all ease-in-out .3s;

      &:hover {
        transform: scale(1.02);
        color: $highlight;  
      }

      a {
        @include font_titles;
        margin: 20px auto;
        padding: 10px;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
      }
    }
    .social-btn {
      transition: all ease-in-out 0.3s;
      margin-bottom: 5px;

      &:hover {
        transform: scale(1.15);
        color: $highlight;
      }

      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        display: inline-block;
        padding: 10px;
        
        svg {
          min-width: 22px;
          max-width: 22px;
          aspect-ratio: 1;
        }
      }
    }
  }

  .contact-me {
    text-align: center;

    .catch-phrase {
      @include font_default;
      margin-bottom: 30px;
      color: $text;
      font-size: 20px;
      line-height: 26px;
    }
  }
}

// Medium screens
@media screen and (max-width: 1080px) {

  #contacts {

    .vertical {

      &.social-list {
        left: 20px;
      }

      &.email {
        right: 20px;
      }
    }
  }
}

// Small screens
@media screen and (max-width: 768px) {

  #contacts {

    .vertical {

      &.social-list,
      &.email {    
        display: none;
      }
    }
  }
}
</style>