<template>
  <nav class="columns">
    <!--todo - vue-repeat this-->
    <a class="column mdi mdi-36px mdi-access-point">
      <div>Foo</div>
    </a>
    <a class="column mdi mdi-36px mdi-account">
      <div>Bar</div>
    </a>
    <a class="column mdi mdi-36px mdi-airplane">
      <div>Baz</div>
    </a>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'QuickLinks',
};
</script>

<style scoped lang="less">
  a {
    text-align: center;
  }
</style>
