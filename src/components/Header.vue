<template>
  <header class="level">
    <div class="logo level-left"></div>
    <div class="level-item">
      Search
    </div>
    <div class="level-right">
      Quick Links
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
  header {
    > * {
      height: 100px;
    }
    .logo {
      width: 200px;
      background: transparent url("../../public/img/The_Ottawa_Hospital_Logo.jpg") no-repeat;
      background-size: 100%;
    }
  }
</style>
