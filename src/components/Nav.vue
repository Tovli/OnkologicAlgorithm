<template>
  <nav class="navbar" role="navigation" aria-label="dropdown navigation">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        Docs
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item">
          Overview
        </a>
        <a class="navbar-item">
          Elements
        </a>
        <a class="navbar-item">
          Components
        </a>
        <hr class="navbar-divider">
        <div class="navbar-item">
          Version 0.7.1
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
  props: {
    // msg: String,
  },
};
</script>

<style scoped lang="less">
  @import "../assets/theme";

  nav {
    padding: 0 1rem;
    border: 1px solid @primary-color;
    background-color: @primary-color;
    border-radius: 5px;

    > .navbar-item > .navbar-link,
    > .navbar-item.has-dropdown:hover > .navbar-link,
    > .navbar-item.has-dropdown.is-active > .navbar-link {
      border: 0 none;
      font-weight: bold;
      color: @secondary-complement-color;
      background-color: @primary-color;

      &:after {
        border-color: @secondary-complement-color;
      }
    }
  }
</style>
