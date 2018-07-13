<template>
  <header class="columns">
    <div class="column is-one-third">
      First column
    </div>
    <div class="column">
      Second column
    </div>
    <div class="column is-one-fifth">
      Third column
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
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
