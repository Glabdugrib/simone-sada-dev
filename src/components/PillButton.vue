<template>
  <li :class="['pill', active ? 'active' : '']" @click="toggleActive">{{ text }}</li>
</template>

<script>
import state from '../store'

export default {
  props: {
    text: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active

      if(this.active) {
        state.technologyFilter.push(this.text)
      } else {
        const index = state.technologyFilter.indexOf(this.text)
        state.technologyFilter.splice(index, 1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";

.pill {
  padding: 3px 11px;
  color: $light-text;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba($color: #000, $alpha: 0.05);
  border: 1px solid $light-text;
  cursor: pointer;
  transition: transform ease-in-out .2s;
  @include font_titles;

  &:hover {
    transform: scale(1.03);
  }

  &.active {
    color: white;
    border: 1px solid $highlight;
    background-color: rgba($color: $highlight, $alpha: 0.2);
  }
}
</style>