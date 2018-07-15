<template>
  <div class="tile is-ancestor">
    <div v-for="tile in tiles" class="tile is-parent">
      <div class="tile is-child box">
        {{ tile.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tiles',
  data() {
    return {
      tiles: [
        {
          text: 'The magical tile element!',
        },
        {
          text: 'The magical tile element!',
        },
        {
          text: 'The magical tile element!',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">

  .tile {
    height: 250px;
  }
</style>
