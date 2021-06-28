<template>
  <div class="title__top">
    <h2 class="title__main">Pokedex</h2>

    <!-- search Area -->
    <TheSearch />
  </div>
  
  <!-- list card summary -->
  <section class="card__list">
    <ul class="card__list-item">
      <li class="item green">
        <CardItem />
      </li>
    </ul>
  </section>


  

</template>

<script>
import {
  ref,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "ListCardWrapper",
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss">
.title {
  &__top {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    color: #fff;
  }
  &__main {
    color: #000;
  }
  &__text,
  &__main {
    font-size: 28px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__info {
    max-width: calc(100% - 65px);

    .classify {
      .item {
        display: inline-block;
        margin-top: 5px;
        padding: 5px 10px;
        border-radius: 18px;
        background-color: rgba(255, 255, 255, 0.35);

        &:not(:last-child) {
          margin-right: 5px;
        }
      }

    }
  }
}
.card {
  &__list {
    margin: 20px 0 100px;
    padding: 0 16px;
  }
}
</style>