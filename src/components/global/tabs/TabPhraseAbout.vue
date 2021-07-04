<template>
  <TabPaneWrapper>
    <template #generation>
      <div class="generation__box">
        <strong>Pokemon is generation 1</strong>
      </div>
    </template> 

    <template #tab-pane-main>
      <div class="order-list">
        <dl>
          <dt>Species</dt>
          <dd>Seed</dd>
          <dt>Height</dt>
          <dd>2,3.6" (0.70 cm)</dd>
          <dt>Weight</dt>
          <dd>15.2 Ibs (6.9kg)</dd>
          <dt>Abilities</dt>
          <dd>Overgrow, Chiorophyl</dd>
        </dl>
      </div>
      <strong>Breeding</strong>
      <div class="order-list">
        <dl>
          <dt>Gender</dt>
          <dd>87.5% - 12.5%</dd>
          <dt>Egg Groups</dt>
          <dd>Monster</dd>
          <dt>Egg Cycle</dt>
          <dd>Grass</dd>
        </dl>
      </div>
      <strong>Input</strong>
      <input type="input">
    </template>
  </TabPaneWrapper>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'

export default defineComponent({
  name: "TabPhraseAbout",
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>