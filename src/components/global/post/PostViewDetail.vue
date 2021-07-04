<template>
  <div class="post-page__wrap">

    <!-- navigation -->
    <TheNavigation>
      <template #main_navbar>
        <button type="button" class="btn_back" @click="onCloseDialogPage">
          <fa icon="arrow-left" class="ico"></fa>
        </button>
      </template>
    </TheNavigation>
    
    <div class="post__area">
      <div class="post__hero">
        <img :src="thumb" alt="" />
      </div>
      <div class="post__content">
        <h2>{{ postName }}</h2>
        post view detail
      </div>
      
    </div>

    
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ComputedRef,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import thumb from '@/assets/images/pokemon-detective-pikachu-2840-backdrop.jpg'
import useDialogState from '@/composables/state'

export default defineComponent({
  name: "PostViewDetail",
  setup() {
    const route = useRoute()
    const router = useRouter()

    const postName = computed(() => route.params.postName) as ComputedRef<string>

    const { isToggleDialog } = useDialogState
    const onCloseDialogPage = () => {
      isToggleDialog(false)

      // router.push('/post')
    }
    return {
      postName,
      onCloseDialogPage,
      thumb,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>