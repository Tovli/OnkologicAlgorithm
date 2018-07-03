<template>
  <main>
    <figure class="image is-2by1">
      <img src="../../public/img/banner/doctor-1149149_960_720.jpg"/>
    </figure>
    <div>
      here comes the tiles
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
