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
.card {
  &__wrap {
    background-position: left;
    background-size: 150%;

    &.green {
      background-color: #5ebf62;
      background-image: url("@/assets/images/188989.png");
    }
    &.red {
      background-color: #f7776a;
      background-image: url("@/assets/images/188997.png");
    }
    &.blue {
      background-color: #57a9f3;
      background-image: url("@/assets/images/188993.png");
    }
    &.yellow {
      background-color: #ffce4b;
      background-image: url("@/assets/images/188987.png");
    }
    &.violet {
      background-color: #b862cf;
      background-image: url("@/assets/images/188995.png");
    }
    transition: background-size 0.5s ease-in-out;

    &:hover {
      background-position: left;
      background-size: 200%;
      transition: background-size 0.5s cubic-bezier(0,0,0,1);
    }
  }
}
</style>