<template>
  <div class="top level-right">
    <router-link to="/patient-login">Patient Login</router-link>
    <router-link to="/doctor-login">Doctor Login</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Top',
};
</script>

<style scoped lang="less">
@import "../assets/theme";

.top {
  a {

    &:not(:last-child) {
      margin-right: .5rem;

      // add separator
      &:after {
        content: '|';
        position: relative;
        display: inline-block;
        left: .25rem;
        font-weight: bold;
      }

      // reset the hover color
      &:hover {
        &:after {
          color: @secondary-color;
        }
      }
    }
  }
}
</style>
