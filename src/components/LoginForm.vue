<template>
<section>
    <b-field label="Name" grouped>
        <b-input>
        </b-input>
    </b-field>
    <b-field label="Password" grouped>
        <b-input type="password">
        </b-input>
    </b-field>
</section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginForm",
  props: {
    // msg: String,
  }
});
</script>
<style lang="less">
@import "../assets/theme";
</style>
