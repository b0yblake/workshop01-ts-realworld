<template>
  <div class="wrap">
    <main class="main">
      <slot />
    </main>
  </div>
  <TheFooter />
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: `LayoutDefault`,
})
</script>

<style lang="scss" scoped>
.wrap {
  .main {

  }
}
</style>