<template>
  <header class="level">
    <router-link to="/" class="logo level-left columns">
      <img src="../../public/img/medical-logo.png" class="column"/>
      <div class="column">
        <h1 class="heading">ipsum</h1>
        <h3>the best hospital, ever</h3>
      </div>
    </router-link>
    <div class="level-item">
      <Search/>
    </div>
    <div class="level-right">
      <QuickLinks/>
    </div>
  </header>
</template>

<script lang="ts">
import Search from '@/components/Search.vue';
import QuickLinks from '@/components/QuickLinks.vue';

export default {
  name: 'Header',
  components: {
    Search,
    QuickLinks,
  },
};
</script>

<style scoped lang="less">
  header {
    padding: 0 2rem;
    .logo {
      margin-bottom: 0;

      img {
        flex-grow: 0;
        width: 7rem;
        height: 7rem;
      }
    }
  }
</style>
