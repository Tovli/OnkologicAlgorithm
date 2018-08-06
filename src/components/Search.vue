<template>
  <div class="search">
    <b-field v-bind:message="searchMessage"
               >
      <b-input v-bind:class="isLoading" v-bind:disabled="isDisabled" placeholder="Search..."
               type="search"
               size="is-medium"
               v-bind:expanded="true">
      </b-input>
      <p class="control ">
        <button class="button is-medium" v-on:click="searchForValue">
          <i class="mdi mdi-magnify mdi-18px"></i>
        </button>
      </p>
    </b-field>
  </div>
</template>

<script lang="ts">

import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import { setTimeout } from 'timers';

@Component
export default class Search extends Vue {
  isSearching = false;
  showMessage = false;
  searchForValue() {
    console.log('enterng search');
    this.isSearching = true;
    setTimeout(() => {
      this.isSearching = false;
      this.showSearchMessage();
    }, 2000);
  }
  showSearchMessage() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }
  get isLoading() {
    return this.isSearching ? 'is-loading' : '';
  }
  get isDisabled() {
    return this.isSearching;
  }
  get searchMessage() {
    return this.showMessage ? 'The important value could not be found' : '';
  }
}
</script>

<style scoped lang="less">
@import "../assets/theme";

.search {
  flex-grow: 1;
  margin: 0 4rem;

  button {
    color: @secondary-complement-color !important;
    background-color: @primary-color;
  }
}

@media (max-width: 1088px) {
  .search {
    margin: 0 2rem;

    // a fix to the header overflow issue
    .control {
      width: 1em;
      margin-right: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .search {
    margin: 1rem 0;
  }
}
</style>
