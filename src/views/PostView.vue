<template>
  <div class="detail-page__wrap">

    <!-- navigation -->
    <TheNavigation>
      <template #main_navbar>
        <button type="button" class="btn_back" @click="onCloseDialogPage">
          <fa icon="arrow-left" class="ico"></fa>
        </button>
        <a href="#none" class="btn_settings">
          <fa icon="cog" class="ico"></fa>
        </a>
      </template>
    </TheNavigation>
    
    <div class="detail__area">
      
    </div>


    
    
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md
export default defineComponent({
  name: "PostView",
  setup() {
    const router = useRouter()

    const onCloseDialogPage = () => {
      router.push('/')
    }
    return {
      onCloseDialogPage,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>