<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|<router-link to="/login">Login</router-link>
    </div>
    <Header/>
    <Nav/>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';


export default Vue.extend({
  data() {
    return {
      // someKey: 'SomeValue',
    };
  },
  components:{
    Header,
    Nav,
  },
});
</script>
