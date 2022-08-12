<template>
  <header id="header">
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo">
        <a href="/#">S</a>
      </div>
      <!-- Nav links -->
      <div class="nav-list">
        <ol>
          <li class="disabled">
            <a href="/#about">{{ $t("nav.about") }}</a>
          </li>
          <li class="disabled">
            <a href="/#experience">{{ $t("nav.experience") }}</a>
          </li>
          <li>
            <a href="/#projects">{{ $t("nav.projects") }}</a>
          </li>
          <li>
            <a href="/#contacts">{{ $t("nav.contact") }}</a>
          </li>
          <!-- <li :class="{'dark-mode-toggle': true, 'active': darkModeIsActive}">
            <button @click="toggleDarkMode()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><title>Dark mode</title><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/></svg></button>
          </li> -->
          <li class="language-switcher">
            <LanguageSwitcher/>
          </li>
        </ol>
      </div>
      <!-- Dropdown -->
      <div class="dropdown">
        <button class="dropdown-btn" @click="toggleDropdown()">
          <div
            :class="[dropdownIsOpen ? 'open' : '', 'dropdown-btn__hamburger']"
          ></div>
        </button>
        <aside :class="[dropdownIsOpen ? 'open' : '', 'sidebar']">
          <ol>
            <li>
              <a href="/">{{ $t("nav.home") }}</a>
            </li>
            <li class="disabled">
              <a href="#about">{{ $t("nav.about") }}</a>
            </li>
            <li class="disabled">
              <a href="#experience">{{ $t("nav.experience") }}</a>
            </li>
            <li>
              <a href="#projects">{{ $t("nav.projects") }}</a>
            </li>
            <li>
              <a href="#contact">{{ $t("nav.contact") }}</a>
            </li>
          </ol>
        </aside>
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: "MainHeader",
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      dropdownIsOpen: false,
      darkModeIsActive: true
    };
  },
  methods: {
    toggleDropdown: function () {
      this.dropdownIsOpen = !this.dropdownIsOpen
    },
    toggleDarkMode: function () {
      this.darkModeIsActive = !this.darkModeIsActive

    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";
// @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

// [TODO] animazione navbar, trasparenza

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 50px;
  height: 80px;
  background-color: $primary-bg;
  display: flex;
  align-items: center;
  z-index: 99;
  // border-bottom: 1px solid white;
  box-shadow: 0px 2px 5px rgba($color: black, $alpha: 0.6);

  .navbar {
    width: 100%;
    color: $lightest-text;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      aspect-ratio: 1;
      // border: 1px solid $lightest-text;
      position: relative;

      font-size: 40px;
      // font-family: 'Bungee', cursive;
      font-family: "Audiowide", cursive;
      transition: all ease-in-out .3s;
      line-height: 1;
      @include text-shadow;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        // border: 1px solid $highlight;
        color: $highlight;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;

      ol {
        display: contents;

        li {
          margin: 0 3px;
          font-size: 15px;

          &.language-switcher{
            margin: 0 3px 0 6px;
          }

          a {
            padding: 10px;

            &::before {
              content: "0" counter(list-item) ".";
              margin-right: 5px;
              color: $highlight;
            }

            &:hover {
              color: $highlight;
            }
          }

          &.disabled {
            cursor: default;
            text-decoration: line-through;
            pointer-events: none;
            opacity: 0.5;
          }

          &.dark-mode-toggle {
            margin-right: 8px;
            transition: all ease-in-out .3s;

            &.active {

              button {
                color: $highlight;
              }
            }

            &:not(.active) {
              transform: rotate(180deg);
            }

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              background: transparent;
              padding: 5px;
              cursor: pointer;
              transition: all ease-in-out .3s;
              color: $primary-bg;

              svg {
                min-width: 18px;
                aspect-ratio: 1;
              }

              &:hover {
                transform: scale(1.1);
              }

              &::before {
                display: none;
              }
            }
          }
        }
      }
    }

    .dropdown {
      display: none;

      .dropdown-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        aspect-ratio: 1;
        transition: all 0.5s ease-in-out;
        background: none;
        border: none;
        cursor: pointer;

        .dropdown-btn__hamburger {
          @include hamburger-line;

          &::before,
          &::after {
            content: "";
            position: absolute;
            @include hamburger-line;
          }

          &::before {
            transform: translate(-50%, -10px);
          }

          &::after {
            transform: translate(-50%, 10px);
          }

          // Dropdown hamburger animation
          &.open {
            transform: translateX(-50%);
            background: transparent;
            box-shadow: none;

            &:before {
              transform: rotate(45deg);
            }

            &:after {
              transform: rotate(-45deg);
            }
          }
        }
      }

      .sidebar {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        width: min(75vw, 400px);
        min-height: 100vh;
        background-color: $secundary-bg;
        z-index: -1;
        align-items: center;

        &.open {
          display: flex;
        }

        ol {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;

          li {
            font-size: 18px;
            display: list-item;
            counter-increment: item;

            &::before {
              font-size: 16px;
              content: "0" counter(item) ".";
              margin-right: 5px;
              color: $highlight;
            }

            a {
              display: inline-block;
              width: 100%;
              padding: 3px 20px 20px;

              &:hover {
                color: $highlight;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #header {
    .navbar {
      .nav-list {
        display: none;
      }

      .dropdown {
        display: block;
      }
    }
  }
}
</style>