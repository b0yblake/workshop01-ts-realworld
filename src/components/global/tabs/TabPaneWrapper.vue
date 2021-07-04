<template>
  <div class="tab-pane__wrapper">
    <slot name="generation" />
    <slot name="tab-pane-main" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: "TabPaneWrapper",
  setup() {

    return {

    }
  }
})
</script>