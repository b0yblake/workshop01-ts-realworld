<template>
  <div class="search">
    <button @click="searchPokes(searchText)">Search</button>
    <input
      type="text"
      v-model="searchText"
      placeholder="Search pokémon, Move, Ability etc.."
      @keydown.enter.prevent="handleEnter(searchText)"
    />
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
    const handleEnter = (response) => {
      context.emit('searchText', response)
    }

    return {
      searchText,
      searchPokes,
      handleEnter
    }
  }
})
</script>

<style lang="scss" scoped>

</style>