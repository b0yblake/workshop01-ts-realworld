<template>
  <main class="main">
    <slot />
  </main>
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
