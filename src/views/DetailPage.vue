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
            <a href="#none" class="whistlist">
              <fa icon="cog" class="ico"></fa>
            </a>
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
  ref,
} from 'vue'
import LayoutDefault from '@/templates/layouts/LayoutDefault.vue'

export default defineComponent({
  name: "DetailPage",
  components: {
    LayoutDefault
  },
  setup(props, context) {

    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>