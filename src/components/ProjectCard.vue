<template>
  <div class="project" :style="false ? {backgroundImage: 'url(' + require(`@/assets/images/${project.image}`) + ')'} : '' ">
    <!-- Image -->
    <figure class="project-image">
      <img :src="require(`../assets/images/${project.image}`)" alt="" />
    </figure>
    <!-- Content -->
    <div class="project-content">
      <!-- <h4 class="project-overline">{{ project.overline }}</h4> -->
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description" v-html="project.description"></p>
      <ul class="project-technologies">
        <li v-for="(technology, i) in project.technologies" :key="`tech-${i}`">
          {{ technology }}
        </li>
      </ul>
      <ul class="project-links">
        <!-- Github -->
        <li :class="{ disabled: project.links[0].url == '' }">
          <!-- Disabled -->
          <a v-if="project.links[0].url == ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>{{ $t("projects.comingSoon") }}</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <!-- Not disabled -->
          <a v-else :href="project.links[0].url" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Github</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <!-- External link -->
        <li :class="{ disabled: project.links[1].url == '' }">
          <!-- Disabled -->
          <a v-if="project.links[1].url == ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <title>{{ $t("projects.comingSoon") }}</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <!-- Not disabled -->
          <a v-else :href="project.links[1].url" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <title>{{ $t("projects.externalLink") }}</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      smallestScreenActive: false, // active when screend under 768px
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 768) {
        this.smallestScreenActive = true;
      } else {
        this.smallestScreenActive = false;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";

.project {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 120px;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif; // [TODO] check fonts

  &:last-of-type {
    margin-bottom: 0;
  }

  // Image
  .project-image {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    overflow: hidden;
    width: 60%;
    aspect-ratio: calc(1920 / 1080);
    margin: 0;
    border-radius: 5px;
    box-shadow: -3px 3px 10px rgba($color: black, $alpha: 0.5);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      transition: all ease-in-out 0.5s;
      background-color: rgba($color: black, $alpha: 0.3);
      // cursor: pointer;
    }

    &:hover {
      &::after {
        background-color: rgba($color: black, $alpha: 0);
      }
    }

    img {
      display: block;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  // Content
  .project-content {
    z-index: 3;
    width: 50%;
    text-align: left;

    .project-overline {
      margin: 10px 0;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      font-size: 14px;
      color: $highlight;
    }

    .project-title {
      transition: color ease-in-out 0.3s;
      margin-bottom: 25px;
      // cursor: pointer;
      font-size: clamp(24px, 5vw, 28px);
      // color: $lightest-text;
      color: $highlight;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      @include text-shadow;
      text-align: right;

      // &:hover {
      //   color: $highlight;
      // }
    }

    .project-description {
      padding: 25px;
      background-color: rgba($color: $secundary-bg, $alpha: 0.6);
      // background: $secundary-bg;
      
      background: linear-gradient(90deg, rgba($secundary-bg, 0.7) 0%, rgba($secundary-bg, 0.5) 30%, rgba($secundary-bg, 0.3) 100%);
      color: $text;
      // box-shadow: 0 10px 30px -15px rgba($color: black, $alpha: 0.5);
      border-radius: 5px;
      font-size: 17px;
      line-height: 24px;
      white-space: pre-wrap; // to read json break lines
    }

    .project-technologies {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin: 25px 0 10px 0;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      color: $light-text;
      flex-wrap: wrap;
      line-height: .5;
      padding: 8px 0;

      li {
        margin-bottom: 5px;
        @include text-shadow;
      }
    }

    .project-links {
      z-index: 99;
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
      color: $light-text;

      li {
        transition: all ease-in-out 0.3s;
        padding: 10px;

        &.disabled {
          color: rgba($color: $light-text, $alpha: 0.3);
          // cursor: default !important;

          a {
            // pointer-events: none;
          }
        }

        &:not(.disabled):hover {
          transform: scale(1.1);
          color: $highlight;
          cursor: pointer;
        }

        a svg {
          min-width: 22px;
          max-width: 22px;
          aspect-ratio: 1;

          &.github {
            min-width: 17px;
            max-width: 17px;
          }
        }
      }
    }
  }

  // Reverse allignment
  &:nth-of-type(2n) {
    justify-content: flex-start;

    .project-image {
      left: auto;
      right: 0;
      box-shadow: 3px 3px 10px rgba($color: black, $alpha: 0.5);
    }

    .project-content {
      text-align: left;

      .project-title {
        text-align: left;
      }

      .project-description {
        background: linear-gradient(90deg, rgba($secundary-bg, 0.3) 0%, rgba($secundary-bg, 0.5) 70%, rgba($secundary-bg, 0.7) 100%);
      }

      .project-technologies {
        justify-content: flex-start;
      }

      .project-links {
        justify-content: flex-start;
      }
    }
  }
}

// *** MEDIA QUERIES ***

@media screen and (max-width: 1200px) {
  .project {
    margin-bottom: 75px;
  }
}

@media screen and (max-width: 1080px) {
  .project {
    margin-bottom: 50px;

    .project-content {
      width: 65%;
    }
  }
}

// @media screen and (max-width: 768px) {
//   .project {

//   }
// }

// Smallest version
@media screen and (max-width: 768px) {
  .project {
    z-index: 2;
    display: block;
    background-size: cover;
    background-position: center;
    padding: 40px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      display: block;
      background-color: rgba($color: $secundary-bg, $alpha: 0.9);
    }

    .project-image {
      display: none;
    }

    .project-content {
      z-index: 3;
      width: 100%;
      text-align: left;

      .project-title {
        text-align: left !important;
      }

      .project-description {
        box-shadow: none;
        padding: 0;
        background-color: transparent;
      }

      .project-technologies {
        justify-content: flex-start;
      }

      .project-links {
        justify-content: flex-start;
      }
    }
  }
}
</style>