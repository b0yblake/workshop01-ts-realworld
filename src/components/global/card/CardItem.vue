<template>
  <div class="card__wrap">
    <div class="title__top">
      <div class="title__info">
        <h2 class="title__text">{{ pokedex.data?.forms?.[0].name }}</h2>
        <ul class="chip__list">

          <li class="chip" v-for="(type, index) in pokedex.data.types" :key="index">
            {{ type.type.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="thumbnail">
      <figure>
        <img :src="pokedex.data?.sprites?.front_default" alt="  ">
      </figure>
    </div>
  </div>

  <!-- pokedex: {{ pokedex }} -->

</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
} from 'vue'
import { PokeInterface } from '@/@types/PokeTypes.interface'

export default defineComponent({
  name: "CardItem",
  props: {
    pokedex: {
      type: Object as PropType<PokeInterface>,
      required: true,
      default: {}
    }
  },
  setup(props, context) {

    // console.log("data in card item: ", props.pokedex)

    return {

    }
  }
})
</script>

<style lang="scss" scoped>

</style>