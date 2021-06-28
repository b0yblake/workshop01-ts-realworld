<template>
  <div class="card__wrap">
    <div class="title__top">
      <div class="title__info">
        <h2 class="title__text">Charmander</h2>
        <ul class="classify">
          <li class="item">Green</li>
          <li class="item">Posion</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "CardItem",
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  &__wrap {
    border-radius: 10px;
    padding: 15px 0;
  }
}
</style>