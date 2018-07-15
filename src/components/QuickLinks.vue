<template>
  <nav class="tile is-horizontal">
    <a v-for="link in links"
       v-bind:key="link.label"
       v-bind:class="'mdi-' + link.icon"
       class="tile mdi mdi-24px quick-link">
      <div>{{ link.label }}</div>
    </a>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'QuickLinks',
  data() {
    return {
      links: [
        {
          label: 'Foo',
          icon: 'airplane',
        },
        {
          label: 'Bar',
          icon: 'elephant',
        },
        {
          label: 'Baz Baz',
          icon: 'cake',
        },
        {
          label: 'Wat',
          icon: 'earth',
        },
        {
          label: 'Wow',
          icon: 'heart',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">

  .quick-link {
    display: inline-block;
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }


  @media (max-width: 768px) {
    nav {
      display: flex;
    }
  }
</style>
