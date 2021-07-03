<template>
  
  <LayoutDefault>

    <!-- Call out default slot -->
    <template #default>
      <div class="wrapper">
        
         <!-- navigation -->
        <TheNavigation>
          <template #main_navbar>
            <!-- <button type="button" class="btn_back">
              <fa icon="chevron-left" class="ico"></fa>
            </button> -->
            <button type="button" class="btn_settings">
              <fa icon="cog" class="ico"></fa>
            </button>
          </template>
        </TheNavigation>

        <!-- main content -->
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

</style>
