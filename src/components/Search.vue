<template>
  <div class="search">
    <b-field>
      <b-input placeholder="Search..."
               type="search"
               size="is-large"
               expanded="true"
               icon="magnify">
      </b-input>
      <p class="control">
        <button class="button is-large">Search</button>
      </p>
    </b-field>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Search',
};
</script>

<style scoped lang="less">
  @import "../assets/theme";

  .search {
    width: 100%;
    margin: 0 4rem;

    button {
      color: @secondary-complement-color !important;
      background-color: @primary-color;
    }
  }
</style>
