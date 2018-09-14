<template>
<section>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <b-field label='Patient Id'>
        <b-input v-bind:value="getUserId" rounded disabled> </b-input>
    </b-field>
    <b-field label='Acidity (pH)'>
        <b-input v-bind:value="acidity" rounded> </b-input>
    </b-field>
    <b-field label='Blood volume'>
        <b-input v-bind:value="bloodVolume" rounded> </b-input>
    </b-field>
    <b-field label='CD4 cell count'>
        <b-input v-bind:value="c4" rounded> </b-input>
    </b-field>
    <b-field label='Creatinine'>
        <b-input v-bind:value="creatinine" rounded> </b-input>
    </b-field>
    <b-field label='Glucose'>
        <b-input v-bind:value="glucose" rounded> </b-input>
    </b-field>
    <b-field label='Triglycerides'>
        <b-input v-bind:value="triglycerides" rounded> </b-input>
    </b-field>
    <button v-on:click="onSubmitForm" class="button is-large is-pull-left">Submit Form</button>
    <b> {{formSubmitResult}}</b>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';

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
        this.formSubmitResult = 'Result is 39.5';
      }, 4 * 1000);
    },
  },
  props: ['userId'],
  computed: {
    getUserId() : string {
      return this.userId;
    },
  },
});
</script>
<style lang="less">

</style>
