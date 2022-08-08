<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in $i18n.availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";

.locale-changer {
  background-color: transparent;
  border: none;

  select {
    background-color: transparent;
    border: none;
    color: $lightest-text;
    text-transform: uppercase;
    //appearance: none; // per nascondere l'icona della freccina
  }
}
</style>