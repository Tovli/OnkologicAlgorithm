<template>
  <header class="level">
    <router-link to="/" class="logo level-left columns">
      <img src="../../public/img/medical-logo.png" class="column"/>
      <div class="column">
        <h1 class="heading">ipsum</h1>
        <h2 class="tagline">the best hospital, ever</h2>
      </div>
    </router-link>
    <div class="level-item">
      Search
    </div>
    <div class="level-right">
      <QuickLinks/>
    </div>
  </header>
</template>

<script lang="ts">
import QuickLinks from '@/components/QuickLinks.vue';

export default {
  name: 'Header',
  components: {
    QuickLinks,
  },
};
</script>

<style scoped lang="less">
  header {
    padding: 0 2em;
    .logo {
      margin-bottom: 0;
      background-size: 100px 100px;

      img {
        flex-grow: 0;
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
