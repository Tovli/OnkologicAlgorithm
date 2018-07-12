<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-third">
            First column
          </div>
          <div class="column">
            Second column
          </div>
          <div class="column is-one-fifth">
            Third column
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
