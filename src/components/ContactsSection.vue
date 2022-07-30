<template>
  <section id="contacts">
    <!-- Versione in block per schermi piccoli -->
    <h2 class="section-title">Contacts</h2>
    <ul class="social-list">
      <li class="social-btn">
        <a :href="contactLinks.Github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>LinkedIn</title><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Instagram" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Instagram</title><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </li>
    </ul>
    <div class="contact-me">
      <p class="catch-phrase">Do you want to share your <em>idea</em> with me?</p>
      <a class="cta-btn" :href="`mailto:${email}?subject=${URLEncode(emailMessage.subject)}`">Let's talk!</a>
    </div>
    <!-- Versione fixed per schermi grandi -->
    <ul class="social-list vertical">
      <li class="social-btn">
        <a :href="contactLinks.Github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>LinkedIn</title><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
      </li>
      <li class="social-btn">
        <a :href="contactLinks.Instagram" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><title>Instagram</title><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </li>
    </ul>
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
      return this.$t('emailMessage') // attinge dai file locale delle lingue
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

#contacts {
  
  .section-title {

    &::before {
      content: "04.";
    }
  }

  .vertical {

    &.social-list,
    &.email {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40px;
      position: fixed;
      bottom: 0px;
      z-index: 10;
      color: $light-slate;

      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0pc auto;
        background-color: $light-slate;
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
        color: $highlight;
        transform: scale(1.02);
      }

      a {
        margin: 20px auto;
        padding: 10px;
        font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
      }
    }
  }

  .social-list {

    .social-btn {
      margin-bottom: 5px;
      transition: all ease-in-out 0.3s;

      &:hover {
        color: $highlight;
        transform: scale(1.1);
      }

      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        padding: 10px;
        display: inline-block;
        
        svg {
          min-width: 22px;
          max-width: 22px;
          aspect-ratio: 1;
        }
      }
    }
  }

  .contact-me {
    display: none;
    text-align: center;

    .catch-phrase {
      margin-bottom: 30px;
      color: $slate;
      font-size: 20px;
      font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
      line-height: 26px;
    }
  }
}

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

// Solo schermi grandi
@media screen and (min-width: 769px) {

  #contacts {
    padding: 0;
    margin: 0;

    .section-title,
    .social-list:not(.vertical) {
      display: none;
    }
  }
}

// Schermo più piccolo
@media screen and (max-width: 768px) {

  #contacts {

    .vertical {

      &.social-list,
      &.email {    
        display: none;
      }
    }

    .section-title {
      display: flex;
    }

    .social-list:not(.vertical) {
      display: flex;
      justify-content: space-around;
      margin-bottom: 40px;

      .social-btn {
        margin-bottom: 5px;
        width: calc(40px + 8vw);

        &:hover {
          transform: scale(1.08);
        }

        &:last-of-type {
        }

        a {
          width: 100%;
          
          svg {
            min-width: 100%;
            max-width: 100%;
            aspect-ratio: 1;
          }
        }
      }
    }

    .contact-me {
      display: block;
    }
  }
}
</style>