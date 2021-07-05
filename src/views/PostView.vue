<template>
  <LayoutDefault>

    <!-- Call out default slot -->
    <template #default>
      <div class="wrapper">
        
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

        <!-- Post Area -->
        <section class="article__container">
          <div class="article__header">
            <h2 class="">Pokémon News</h2>
          </div>
          <div class="article__content">
            <ul class="article__list">
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/pokemon-rumble-rush-arrives-soon" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
              <li class="article__item">
                <router-link to="/post/detective-pikachu" @click="onEnterDetailPage">
                <div class="article__item-wrap">
                  <div class="details">
                    <h3 class="">Detective Pikachu</h3>
                    <span class="duration">15 May 2021</span>
                  </div>
                  <div class="thumb">
                    <div class="thumb-overlay">
                      <img :src="thumb2" alt="" />
                    </div>
                  </div>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </section>

        <!-- Dialog page Area -->
        <div class="dialog dialog-page" :class="{ show : stateDialogPage }">
          <router-view></router-view>
        </div>
        
      </div>
    </template>

  </LayoutDefault>

</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useDialogState from '@/composables/state'

import LayoutDefault from '@/templates/layouts/LayoutDefault.vue'
import thumb from '@/assets/images/pokemon-detective-pikachu-2840-backdrop.jpg'
import thumb2 from '@/assets/images/4628259_cover_pikachu-1.jpg'

// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md
export default defineComponent({
  name: "PostView",
  components: {
    LayoutDefault
  },
  setup() {
    const router = useRouter()

    const { isToggleDialog, stateDialogPage } = useDialogState

    const onCloseDialogPage = () => {
      router.push('/')
    }

    const onEnterDetailPage = () => {
      isToggleDialog(true)
    }

    return {
      onCloseDialogPage,
      onEnterDetailPage,
      stateDialogPage,
      thumb,
      thumb2
    }
  }
})
</script>

<style lang="scss" scoped>
</style>