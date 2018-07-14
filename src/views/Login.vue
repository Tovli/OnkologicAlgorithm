<template>
  <main class="login">
    <h2 class="heading">login</h2>
    <section>
      <b-field label="Username"
               type="is-success"
               message="This username is available">
        <b-input value="johnsilver" maxlength="30" size="is-large"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password"
                 value="iwantmytreasure"
                 size="is-large"
                 password-reveal>
        </b-input>
      </b-field>
      <input type="submit" value="submit" class="button is-large is-pulled-right"/>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>

<style lang="less" scoped>
  .login {
    padding: 2rem 6rem;

    section {
      margin-top: 2rem;

      input[type=submit] {
        margin-top: 1rem;
      }
    }
  }
</style>
