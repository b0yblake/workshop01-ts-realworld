<template>
  <div class="dialog-page">

    <!-- navigation -->
    <TheNavigation>
      <template #main_navbar>
        <button type="button" class="btn_back">
          <fa icon="chevron-left" class="ico"></fa>
        </button>
        <a href="#none" class="whistlist">
          <fa icon="heart" class="ico"></fa>
        </a>
      </template>
    </TheNavigation>

    Poke Name: {{ pokeName }}
    
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  ref,
  computed,
  ComputedRef,
} from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: "DetailPage",
  setup() {
    const router = useRoute()
    const pokeName = computed(() => router.params.pokeName) as ComputedRef<string>

    return {
      pokeName
    }
  }
})
</script>

<style lang="scss" scoped>
</style>