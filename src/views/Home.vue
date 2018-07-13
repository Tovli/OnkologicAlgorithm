<template>
  <main>
    <Banner/>
    <Tiles/>
  </main>
</template>

<script lang="ts">
import Banner from '@/components/Banner.vue';
import Tiles from '@/components/Tiles.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Tiles,
  },
};
</script>

<style scoped lang="less">
</style>
