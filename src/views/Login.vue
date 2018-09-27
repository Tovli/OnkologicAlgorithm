<template>
  <main class="login">
    <h2 class="heading">login</h2>
    <section>
      <b-field v-bind:label="nameLabel"
               type="is-success"
               message="This username is available">
        <b-input :value="username" maxlength="30" size="is-large"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password"
                 size="is-large"
                 password-reveal>
        </b-input>
      </b-field>
      <router-link class="submit button is-large is-pulled-right"
                   :to="{ name: routerName, params: { userId }}" tag='button'>Login</router-link>
      <i class="is-clearfix"></i>
    </section>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      username: 'John Silver',
      userId: '123',
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
    nameLabel(): string {
      return `${this.type} login`;
    },
    routerName(): string {
      return this.type;
    },
  },
});
</script>

<style lang="less" scoped>
.login {
  padding: 2rem 6rem;

  section {
    margin-top: 2rem;

    .submit {
      margin-top: 1rem;
    }
  }
}
</style>
