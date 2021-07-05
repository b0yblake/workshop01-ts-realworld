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
        <h2>Pokemon Rumble Rush Arrives Soon</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h2>Pokemon Rumble Rush Arrives Soon</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
.btn_back {
  .ico {
    color: #000;
  }
}
</style>