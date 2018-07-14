<template>
  <header class="columns">
    <router-link to="/" class="logo column">
      <h1 class="heading">ipsum</h1>
      <h3 class="tagline">the best hospital, ever</h3>
    </router-link>
    <div class="column search-box">
      <Search/>
    </div>
    <div class="column quick-links-box">
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 0;
      height: 6rem;
      margin-bottom: 0;
      padding: 0 0 0 7rem;
      background: transparent url("../../public/img/medical-logo.png") no-repeat;
      background-size: 6rem 6rem;

      .tagline {
        white-space: nowrap;
      }
    }

    .search-box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
