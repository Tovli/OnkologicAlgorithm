<template>
  <div class="top">
    <router-link to="/">Home</router-link> |
    <router-link to="/patient-login">Patient Login</router-link> |
    <router-link to="/doctor-login">Doctor Login</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Top',
};
</script>

<style scoped lang="less">
.top {
  a {
    font-weight: bold;
  }
}
</style>
