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
    const { currentThemeStyle, setCurrentTheme } = useDialogThemeState
    const setTheme = (theme: string) => {
      setCurrentTheme(theme)
      setAttrDom(theme)
    }
    const isCurrentTheme = computed(() => {
      // if(currentThemeStyle.value === 'light')

    })

    onMounted(() => {
      setAttrDom(currentThemeStyle.value)
      setTheme(currentThemeStyle.value)
    })

    return {
      setTheme,

    }
  }
})
</script>

<style lang="scss" scoped>
</style>