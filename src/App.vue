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

<!--this should not be scoped-->
<style lang="less">
  @import "./assets/baseline";
  @import "./assets/theme";

  #app {
    padding: 10px;

    .body-content {
      padding: 30px;

      .router-view {
        margin-top: 30px;
      }
    }
  }
</style>
