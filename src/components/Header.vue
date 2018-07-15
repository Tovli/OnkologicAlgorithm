<template>
  <header class="level">
    <router-link to="/" class="logo level-left">
      <h1 class="heading">ipsum</h1>
      <h3 class="tagline">best hospital, ever</h3>
    </router-link>
    <div class="level-item search-box">
      <Search/>
    </div>
    <div class="level-right quick-links-box">
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
    padding: 0 0 1rem;

    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 0;
      height: 5rem;
      margin-bottom: 0;
      padding: 0 0 0 6rem;
      background: transparent url("../../public/img/medical-logo.png") no-repeat;
      background-size: 5rem 5rem;

      .heading,
      .tagline {
        width: 100%;
      }

      .tagline {
        font-size: 1.2rem;
        white-space: nowrap;
        color: #999;
      }
    }
  }
</style>
