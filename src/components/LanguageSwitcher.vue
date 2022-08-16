<template>
  <!-- <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in $i18n.availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div> -->
  <div class="locale-changer">
    <div class="drodown-btn" @click="toggleDropdown">
      {{ $i18n.locale }}
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <ul id="myDropdown" class="dropdown-content">
      <li @click="setLangEN">EN</li>
      <li @click="setLangIT">IT</li>
    </ul>
  </div>
</template>

<script>
import i18n from '../i18n'

export default {
  // data() {
  //   return {
  //     dropdownIsActive: false
  //   }
  // },
  methods: {
    toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show")
    },
    setLangIT() {
      i18n.locale = 'it'
    },
    setLangEN() {
      i18n.locale = 'en'
    },
  },
  mounted() {
    window.onclick = function(event) {
    if (!event.target.matches('.drodown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";



/* The container <div> - needed to position the dropdown content */
.locale-changer {
  position: relative;
  display: inline-block;

  .drodown-btn {
    background-color: transparent;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    color: $lightest-text;
    padding: 5px 10px;
    font-size: 15px;
    text-transform: uppercase;
    // border: 1px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    // position: relative;

    .fa-chevron-down {
      font-size: 12px;
    }

    &:hover,
    &:focus {
      color: $highlight;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: $tertiary-bg;
    right: 5%;
    width: 90%;
    z-index: 3;
    border: 1px solid $secundary-bg;
    box-shadow: 3px 3px 10px rgba($color: black, $alpha: 0.5);

    &.show {
      display:block;
    }

    li {
      // background-color: $secundary-bg;
      color: $lightest-text;
      padding: 5px 10px;
      text-decoration: none;
      display: block;
      cursor: pointer;

      &:hover {
        background-color: rgba($color: $highlight, $alpha: 0.5);
      }
    }
  }
}
</style>