<template>
  <div class="card__wrap" :class="color">
    <div class="title__top">
      <div class="title__info">
        <h2 class="title__text">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
} from 'vue'
import { PokeInterface } from '@/@types/PokeTypes.interface'

export default defineComponent({
  name: "CategoryTag",
  props: {
    title: {
      type: String as PropType<PokeInterface>,
      default: "Pokemon tag"
    },
    color: {
      type: String as PropType<PokeInterface>,
      default: ""
    }
  },
  setup(props, context) {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>