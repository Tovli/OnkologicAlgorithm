<template>
  <main class="login">
    <h1 class="title">This is the login page</h1>
    <section>
      <b-field label="Username"
               type="is-success"
               message="This username is available">
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password"
                 value="iwantmytreasure"
                 password-reveal>
        </b-input>
      </b-field>
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
