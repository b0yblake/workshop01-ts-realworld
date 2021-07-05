<template>
  <div class="theme">
    <h2 class="theme__title">Set theme</h2>

    <div class="theme__action">
      <button type="button" class="theme__btn">Dark</button>
      <button type="button" class="theme__btn">Light</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'

export default defineComponent({
  name: "DialogTheme",
  setup(props, context) {

    return {

    }
  }
})
</script>

<style lang="scss" scoped>
</style>