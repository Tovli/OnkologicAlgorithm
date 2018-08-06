<template>
  <div class="tile is-ancestor">
    <div v-for="tile in tiles" v-bind:key="tile.title" class="tile is-parent">
      <div class="tile is-child box">
        <h3>{{tile.title}}</h3>
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
          title: 'Amazing',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
        },
        {
          title: 'Wonderful',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!',
        },
        {
          title: 'Great',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">

  .tile {
    height: 250px;
    h3{
      margin-bottom: 1em;
    }
  }
</style>
