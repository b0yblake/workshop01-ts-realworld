<template>
  <div :class="$style.wrap">
    <main :class="$style.main">
      <slot/>
    </main>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>

<style lang="scss" module>

</style>