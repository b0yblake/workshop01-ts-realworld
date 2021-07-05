<template>
  
  <LayoutDefault>

    <!-- Call out default slot -->
    <template #default>
      <div class="wrapper">
        
         <!-- navigation -->
        <TheNavigation>
          <template #main_navbar>
            <!-- <button type="button" class="btn_back">
              <fa icon="chevron-left" class="ico"></fa>
            </button> -->
            <button type="button" class="btn_settings" @click="openTheme(true)">
              <fa icon="cog" class="ico"></fa>
            </button>
          </template>
        </TheNavigation>

        <!-- main content -->
        <ListCardWrapper />

        <!-- Dialog page Area -->
        <teleport to="#layer">
          <div
            class="dialog"
            :class="{ show : stateDialogTheme }"
            
          >
            <DialogWrapper ref="targetClickOutSide">
              <template #default>
                <DialogTheme />
              </template>
            </DialogWrapper>
          </div>
        </teleport>
      </div>
    </template>

  </LayoutDefault>

</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  nextTick,
} from 'vue'
import LayoutDefault from '@/templates/layouts/LayoutDefault.vue'
import useDialogThemeState from '@/composables/themeState'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: "Home",
  components: {
    LayoutDefault
  },
  setup(props, context) {
    const { stateDialogTheme, setStateDialogTheme, setCurrentTheme } = useDialogThemeState
    const openTheme = (state: boolean) => {
      setStateDialogTheme(state)

      // nextTick(() => {
      //   document.querySelector("div.modal_content").style.setProperty('height', 'auto')
      // })

    }

    const targetClickOutSide = ref(null)
    onClickOutside(targetClickOutSide, (event) => {
      // console.log(event)
      setStateDialogTheme(false)
    })

    return {
      stateDialogTheme,
      openTheme,
      targetClickOutSide,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
