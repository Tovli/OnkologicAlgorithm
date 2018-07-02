<template>
  <main>
    <figure class="image is-3by1">
         <img src="../assets/logo.png" />
    </figure>
  </main>
        <div>
          here comes the tiles
        </div>
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
