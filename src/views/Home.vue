<template>
  
  <LayoutDefault>

    <!-- Call out default slot -->
    <template #default>
      <div class="wrapper">
        <TheNavigation />
        <ListCardWrapper />
      </div>
    </template>

  </LayoutDefault>

</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import LayoutDefault from '@/templates/layouts/LayoutDefault.vue'

export default defineComponent({
  name: "Home",
  components: {
    LayoutDefault
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 50px auto;
  max-width: 640px;
  min-width: auto;
  height: auto;
  border-radius: 30px;
  box-shadow: 8px 10px 30px #f3f3f3;
  
}
</style>
