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
      <strong>Type Defenses</strong>
      <p>The effect</p>
    </template>
  </TabPaneWrapper>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'

export default defineComponent({
  name: "TabBaseStats",
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>