<template>
  <div class="theme">
    <h2 class="theme__title">Set theme</h2>


    <div class="theme__action">
      <button
        type="button"
        @click="setTheme('dark')"
        :class="['theme__btn']"
      >
        Dark
      </button>

      <button
        type="button"
        @click="setTheme('light')"
        :class="['theme__btn']"
      >
        Light
      </button>
    </div>

    <button type="button" class="btn_close" @click="onCloseDialogTheme">
      <fa icon="times" class="ico"></fa>
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
} from 'vue'
import useDialogThemeState from '@/composables/themeState'
import { setAttrDom } from '@/helpers/addAttrsDom'

export default defineComponent({
  name: "DialogTheme",
  setup() {
    const { currentThemeStyle, setCurrentTheme, setStateDialogTheme } = useDialogThemeState
    const setTheme = (theme: string) => {
      setCurrentTheme(theme)
      setAttrDom(theme)
    }
    const onCloseDialogTheme = () => {
      setStateDialogTheme(false)
    }
    // const isCurrentTheme = computed(() => {
    //   if(currentThemeStyle.value === 'light') return true
    // })

    onMounted(() => {
      setAttrDom(currentThemeStyle.value)
      setTheme(currentThemeStyle.value)
    })

    return {
      setTheme,
      onCloseDialogTheme
    }
  }
})
</script>

<style lang="scss" scoped>
.btn_close {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
}
</style>