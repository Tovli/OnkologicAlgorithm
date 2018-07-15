<template>
  <div class="search">
    <b-field>
      <b-input placeholder="Search..."
               type="search"
               size="is-medium"
               v-bind:expanded="true">
      </b-input>
      <p class="control">
        <button class="button is-medium">
          <i class="mdi mdi-magnify mdi-18px"></i>
        </button>
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
    flex-grow: 1;
    margin: 0 2rem;

    button {
      color: @secondary-complement-color !important;
      background-color: @primary-color;
    }
  }

  /*@media (max-width: 1088px) {*/
  /*}*/

  @media (max-width: 768px) {
    .search {
      padding: 2rem 0;
    }
  }
</style>
