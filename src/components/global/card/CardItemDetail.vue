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
            <li
              v-for='(tab, index) in tabs'
              :key="`${tab}_${index}`"
              :class="['tab-nav__item', { active: currentTab === tab}]"
            >
              <button
                type="button"
                class=""
                @click='currentTab = tab'
              >
                {{ tab }}
              </button>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane">
              <keep-alive>
                <component :is="currentTabComponent"></component>
              </keep-alive>
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
  watchEffect,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useDialogState from '@/composables/state'

// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md
export default defineComponent({
  name: "CardItemDetail",
  components: {
    TabPhraseAbout: defineAsyncComponent(() => import("@/components/global/tabs/TabPhraseAbout.vue")),
    TabBaseStats: defineAsyncComponent(() => import("@/components/global/tabs/TabBaseStats.vue"))
  },
  setup(props, context) {
    const route = useRoute()
    const router = useRouter()

    const tabs = ref(["TabPhraseAbout", "TabBaseStats", "TabEvolutions", "TabMoves"])
    const currentTab = ref("TabPhraseAbout")
    const pokeName = computed(() => route.params.pokeName) as ComputedRef<string>

    const { isToggleDialog, stateRawPokedex } = useDialogState
    const onCloseDialogPage = () => {
      isToggleDialog(false)
      router.push('/')
    }

    const currentTabComponent = computed(() => `${currentTab.value}`)

    return {
      pokeName,
      onCloseDialogPage,
      stateRawPokedex,
      tabs,
      currentTab,
      currentTabComponent,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>