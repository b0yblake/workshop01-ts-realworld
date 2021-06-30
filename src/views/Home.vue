<template>
  <div class="wrapper">
    
    <TheNavigation />

    <ListCardWrapper />
  </div>
</template>

<script>
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "Home",
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 50px auto;
  max-width: 640px;
  min-width: 640px;
  height: auto;
  border-radius: 30px;
  box-shadow: 8px 10px 30px #f3f3f3;
}
</style>
