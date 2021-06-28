<template>
  <nav class="navigation__top">
    <div class="navigation__main">
      <button type="button" class="btn_back">Action back</button>
      <a href="#none" class="whistlist">Heart</a>
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
.navigation {
  &__top {
    padding: 30px 16px;
  }
  &__main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
}
</style>