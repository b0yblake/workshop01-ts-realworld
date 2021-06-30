<template>
  <div class="title__top">
    <h2 class="title__main">What are<br> you looking for?</h2>

    <!-- search Area -->
    <TheSearch @searchText="handleSearchText" />
  </div>
  
  <section class="card__list" v-show="searchText">
    <ul class="card__list-wrap">
      <li class="item green">
        <CardItem :pokedex="pokedex" />
      </li>
    </ul>
  </section>

  <section class="card__list category-card__list">
    <ul class="card__list-wrap">
      <li class="item green">
        <CategoryTag :title="'Pokémon'" :color="'green'" />
      </li>
      <li class="item green">
        <CategoryTag :title="'Items'" :color="'red'" />
      </li>
      <li class="item green">
        <CategoryTag :title="'Moves'" :color="'blue'" />
      </li>
      <li class="item green">
        <CategoryTag :title="'Types'" :color="'yellow'" />
      </li>
      <li class="item green">
        <CategoryTag :title="'Favorites'" :color="'violet'" />
      </li>
    </ul>
  </section>

</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onMounted,
} from 'vue'
import { pokeSearch } from "@/services"
import { PokeInterface } from '@/@types/PokeTypes.interface'
// import { pokeInit } from "@/services"
// import { PokeTypes } from '@/@types/PokeTypes.interface'


export default defineComponent({
  name: "ListCardWrapper",
  setup() {

    let pokedex = reactive<{ data: PokeInterface }>({ data: {} });
    // let pokedexInit = reactive<{ data: PokeInterface }>({ data: {} });
    let searchText = ref(null);

    const handleSearchText = (res: string) => {
      searchText.value = res.toLowerCase()

      //Fire search each time click button
      pokeSearchResponse( searchText.value)
    }

    const pokeSearchResponse = async (search: string): Promise<void> => {
      const response = await pokeSearch(search)
      pokedex.data = response
      // console.log("data: ", pokedex)
    };

    // const pokeInitResponse = async (): Promise<void> => {
    //   const response = await pokeInit()
    //   pokedexInit.data = response

    // };
    // onMounted(() => {
    //   pokeInitResponse()
    // })

    return {
      pokedex,
      searchText,
      handleSearchText,
      pokeSearchResponse,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>