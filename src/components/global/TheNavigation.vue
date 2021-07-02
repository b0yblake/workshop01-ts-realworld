<template>
  <nav class="navigation__top">
    <div class="navigation__main">
      <slot name="main_navbar"></slot>
    </div>
  </nav>
</template>

<script>
import {
  ref,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "TheNavigation",
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss" scoped>
</style>