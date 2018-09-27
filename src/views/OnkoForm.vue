<template>
  <main class="patient-form">
    <h2 class="heading">patient form</h2>
    <section>
      <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <b-field label='Patient Id'>
        <b-input v-bind:value="getUserId" disabled size="is-large"></b-input>
      </b-field>
      <b-field label='Acidity (pH)'>
        <b-input v-bind:value="acidity" size="is-large"></b-input>
      </b-field>
      <b-field label='Blood volume'>
        <b-input v-bind:value="bloodVolume" size="is-large"></b-input>
      </b-field>
      <b-field label='CD4 cell count'>
        <b-input v-bind:value="c4" size="is-large"></b-input>
      </b-field>
      <b-field label='Creatinine'>
        <b-input v-bind:value="creatinine" size="is-large"></b-input>
      </b-field>
      <b-field label='Glucose'>
        <b-input v-bind:value="glucose" size="is-large"></b-input>
      </b-field>
      <b-field label='Triglycerides'>
        <b-input v-bind:value="triglycerides" size="is-large"></b-input>
      </b-field>
      <button v-on:click="onSubmitForm"
              class="submit button is-large is-pulled-right">Submit Form</button>
      <i class="is-clearfix"></i>
      <b>{{formSubmitResult}}</b>
    </section>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import { random } from '../services/math';

export default Vue.extend({
  data() {
    return {
      acidity: '',
      bloodVolume: '',
      c4: '',
      creatinine: '',
      glucose: '',
      triglycerides: '',
      isLoading: false,
      isFullPage: true,
      formSubmitResult: '',
    };
  },
  methods: {
    onSubmitForm() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.formSubmitResult = `Result is ${random()}`;
      }, 4 * 1000);
    },
  },
  props: ['userId'],
  computed: {
    getUserId(): string {
      return this.userId;
    },
  },
});
</script>
<style lang="less">
.patient-form {
  padding: 2rem 6rem;

  section {
    margin-top: 2rem;

    .submit {
      margin-top: 1rem;
    }
  }
}
</style>
