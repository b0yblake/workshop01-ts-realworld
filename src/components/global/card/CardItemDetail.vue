<template>
  <div class="detail-page__wrap">

    <!-- navigation -->
    <TheNavigation>
      <template #main_navbar>
        <button type="button" class="btn_back" @click="onCloseDialogPage">
          <fa icon="arrow-left" class="ico"></fa>
        </button>
        <a href="#none" class="whistlist">
          <fa icon="heart" class="ico"></fa>
        </a>
      </template>
    </TheNavigation>
    
    <div class="title__top">
      <div class="title__info">
        <h2 class="title__text">{{ pokeName }}</h2>
        <ul class="chip__list">
          <li class="chip" v-for="(type, index) in stateRawPokedex.data.types" :key="index">
            {{ type.type.name }}
          </li>
        </ul>
      </div>
      <strong class="ranking">#00{{ stateRawPokedex.data?.order }}</strong>
    </div>


    <div class="detail__content">
      
      <div class="detail__tabs">
        <div class="hero_thumb">
          <figure>
            <img :src="stateRawPokedex.data?.sprites?.front_default" alt="{{ stateRawPokedex.data?.forms?.[0].name }}" />
          </figure>
        </div>

        
        
      </div>
    </div>


    
    
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
import { useRoute, useRouter } from 'vue-router'
import useDialogState from '@/composables/state'

// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md
export default defineComponent({
  name: "CardItemDetail",
  setup() {
    const route = useRoute()
    const router = useRouter()

    const pokeName = computed(() => route.params.pokeName) as ComputedRef<string>

    const { isToggleDialog, stateRawPokedex } = useDialogState
    const onCloseDialogPage = () => {
      isToggleDialog(false)
      router.push('/')
    }
    return {
      pokeName,
      onCloseDialogPage,
      stateRawPokedex,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>