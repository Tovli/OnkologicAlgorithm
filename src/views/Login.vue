<template>
  <main class="login">
    <h2 class="heading">login</h2>
    <section>
      <b-field v-bind:label="nameLabel"
                     type="is-success"
               message="This username is available">
        <b-input value="johnsilver" maxlength="30" size="is-large"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password"
                 size="is-large"
                 password-reveal>
        </b-input>
      </b-field>
      <button type="button"
      v-on:click="onLogin" class="button is-large is-pulled-right">
      login</button>
      <i class="is-clearfix"></i>
    </section>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      name: 'John Silver',
    };
  },
  methods: {
    onLogin() {
      switch (this.type) {
        case 'Doctor':
          
          break;
      case 'Patient':
      
      break;
        default:
          break;
      }
    },
  },
  props: ['type'],
  computed: {
    nameLabel() : string {
      return `${this.type} login`;
    },
  },
});
</script>

<style lang="less" scoped>
.login {
  padding: 2rem 6rem;

  section {
    margin-top: 2rem;

    input[type="submit"] {
      margin-top: 1rem;
    }
  }
}
</style>
