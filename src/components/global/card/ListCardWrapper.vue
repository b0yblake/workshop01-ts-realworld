<template>
  <div class="title__top">
    <h2 class="title__main">Pokedex</h2>

    <!-- search Area -->
    <TheSearch @searchText="handleSearchText" />
  </div>
  
  <!-- list card summary -->
  <section class="card__list">
    <ul class="card__list-wrap">
      <li class="item green" v-for="(poke, index) in pokedexInit.data" :key="index">
        <!-- <CardItem :pokedex="poke" /> -->
      </li>
    </ul>

    pokedexInit: {{ pokedexInit.data }}
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
import { pokeInit } from "@/services"
import { PokeInterface } from '@/@types/PokeTypes.interface'
// import { PokeTypes } from '@/@types/PokeTypes.interface'


export default defineComponent({
  name: "ListCardWrapper",
  setup() {

    let pokedex = reactive<{ data: PokeInterface }>({ data: {} });
    let pokedexInit = reactive<{ data: PokeInterface }>({ data: {} });
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

    const pokeInitResponse = async (): Promise<void> => {
      const response = await pokeInit()
      pokedexInit.data = response

    };

    onMounted(() => {
      pokeInitResponse()

      console.log("pokedexInit: ", pokedexInit)
    })

    return {
      pokedex,
      pokedexInit,
      searchText,
      handleSearchText,
      pokeSearchResponse,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>