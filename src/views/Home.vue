<template>
  <main>
    <div class="tile is-parent">
      <div class="tile">
        The magical tile element!
        <!--<figure class="image is-2by1">-->
        <!--<img src="../../public/img/banner/doctor-1149149_960_720.jpg"/>-->
        <!--</figure>-->
      </div>
      <div class="tile">
        The magical tile element!
      </div>
      <div class="tile">
        The magical tile element!
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Header,
    Nav,
  },
});
</script>

<style scoped lang="less">
  main {
    .tile {
      &.is-parent {
        /*background-image: url("../../public/img/banner/doctor-1149149_960_720.jpg");*/
      }
      &:not(.is-parent) {
        height: 250px;
        margin: 2em;
        background: aquamarine url("../../public/img/banner/doctor-1149149_960_720.jpg") no-repeat;
        background-size: 100%;
      }
    }
  }
</style>
