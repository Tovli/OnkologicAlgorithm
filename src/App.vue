<template>
  <div id="app">
    <Top/>
    <Header/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Top from '@/components/Top.vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';


export default Vue.extend({
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
});
</script>

<style lang="less">
  #app {
    padding: 30px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #top {
    span {
      font-weight: bold;
      color: #2c3e50;
      cursor: pointer;
    }
  }
</style>
