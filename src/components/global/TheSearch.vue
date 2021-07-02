<template>
  <form @submit.prevent="searchPokes(searchText)">
    <div class="search">
      <button type="submit">
        <fa :icon="['fab', 'searchengin']" class="ico" /> <!-- fab types -->
      </button>
      <input
        type="text"
        v-model="searchText"
        placeholder="Search pokémon, Move, Ability etc.."
      />
      <button type="button" class="btn_voice">
        <fa icon="microphone" class="ico"></fa> <!-- fas (default) types -->
      </button>
    </div>
  </form>
  
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