<template>
  <div class="search">
    <button @click="searchPokes(searchText)">Search</button>
    <input type="text" v-model="searchText" placeholder="Search pokémon, Move, Ability etc.." />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  
} from 'vue'

export default defineComponent({
  name: "TheSearch",
  emits: ['searchText'],
  setup(props, context) {

    const searchText = ref(null)
    const searchPokes = (response) => {
      context.emit('searchText', response)
    }

    return {
      searchText,
      searchPokes
    }
  }
})
</script>

<style lang="scss" scoped>

</style>