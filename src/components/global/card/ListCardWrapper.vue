<template>
  <div class="title__top">
    <h2 class="title__main">What Pokémon<br> are you looking for?</h2>

    <!-- Search Area -->
    <TheSearch @searchText="handleSearchText" />
  </div>
  
  <!-- Search Result Area -->
  <section class="card__list" v-show="searchText">
    <ul class="card__list-wrap">
      <li class="item green">
        <CardItem :pokedex="pokedex" />
      </li>
    </ul>
  </section>

  <!-- Categories area -->
  <section class="card__list category-card__list">
    <h2 class="blind">Categories pokemon</h2>
    <ul class="card__list-wrap">
      <li class="item">
        <CategoryTag :title="'Pokémon'" :color="'green'" />
      </li>
      <li class="item">
        <CategoryTag :title="'Items'" :color="'red'" />
      </li>
      <li class="item">
        <CategoryTag :title="'Moves'" :color="'blue'" />
      </li>
      <li class="item">
        <CategoryTag :title="'Types'" :color="'yellow'" />
      </li>
      <li class="item">
        <CategoryTag :title="'Favorites'" :color="'violet'" />
      </li>
    </ul>
  </section>

  <!-- search Area -->
  <section class="article__container">
    <div class="article__header">
      <h2 class="">Pokémon News</h2>
      <router-link to="/post/all">View All</router-link>
    </div>
    <div class="article__content">
      <ul class="article__list">
        <li class="article__item">
          <router-link to="/#">
          <div class="article__item-wrap">
            <div class="details">
              <h3 class="">Pokemon Rumble Rush Arrives Soon</h3>
              <span class="duration">15 May 2021</span>
            </div>
            <div class="thumb">
              <div class="thumb-overlay">
                <img :src="thumb" alt="" />
              </div>
            </div>
          </div>
          </router-link>
        </li>
        <li class="article__item">
          <router-link to="/#">
          <div class="article__item-wrap">
            <div class="details">
              <h3 class="">Detective Pikachu</h3>
              <span class="duration">15 May 2021</span>
            </div>
            <div class="thumb">
              <div class="thumb-overlay">
                <img :src="thumb2" alt="" />
              </div>
            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
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
import thumb from '@/assets/images/pokemon-detective-pikachu-2840-backdrop.jpg'
import thumb2 from '@/assets/images/4628259_cover_pikachu-1.jpg'

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
      thumb,
      thumb2,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>