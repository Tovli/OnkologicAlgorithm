<template>
  <!--<div id="app" dir="rtl">-->
  <div id="app">
    <Top/>
    <div class="body-content">
      <Header/>
      <Nav/>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script lang="ts">
import Top from '@/components/Top.vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      // someKey: 'SomeValue',
    };
  },
  components: {
    Top,
    Header,
    Nav,
  },
};
</script>

<style lang="less">
  #app {
    padding: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    .body-content {
      padding: 30px;

      .router-view {
        margin-top: 30px;
      }
    }
  }
</style>
