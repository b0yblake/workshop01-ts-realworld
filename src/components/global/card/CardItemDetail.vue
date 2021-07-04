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


    <div class="detail__area">
      
      <div class="detail__tab">
        <div class="hero_thumb">
          <figure>
            <img :src="stateRawPokedex.data?.sprites?.front_default" alt="{{ stateRawPokedex.data?.forms?.[0].name }}" />
          </figure>
        </div>

        <div class="detail__tab-nav">
          <ul class="tab-nav">
            <li class="tab-nav__item active">
              <button type="button" class="">About</button>
            </li>
            <li class="tab-nav__item">
              <button type="button" class="">Base Stats</button>
            </li>
            <li class="tab-nav__item">
              <button type="button" class="">Evolutions</button>
            </li>
            <li class="tab-nav__item">
              <button type="button" class="">Moves</button>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane">
              <TabPaneWrapper>
                <template #generation>
                  <div class="generation__box">
                    <strong>Pokemon is generation 1</strong>
                  </div>
                </template> 

                <template #tab-pane-main>
                  <div class="order-list">
                    <dl>
                      <dt>Species</dt>
                      <dd>Seed</dd>
                      <dt>Height</dt>
                      <dd>2,3.6" (0.70 cm)</dd>
                      <dt>Weight</dt>
                      <dd>15.2 Ibs (6.9kg)</dd>
                      <dt>Abilities</dt>
                      <dd>Overgrow, Chiorophyl</dd>
                    </dl>
                  </div>
                  <strong>Breeding</strong>
                  <div class="order-list">
                    <dl>
                      <dt>Gender</dt>
                      <dd>87.5% - 12.5%</dd>
                      <dt>Egg Groups</dt>
                      <dd>Monster</dd>
                      <dt>Egg Cycle</dt>
                      <dd>Grass</dd>
                    </dl>
                  </div>
                </template>
              </TabPaneWrapper>
            </div>
          </div>
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