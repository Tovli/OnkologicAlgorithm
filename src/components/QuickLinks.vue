<template>
  <nav class="tile is-horizontal">
    <a v-for="link in links"
       v-bind:key="link.label"
       v-bind:class="'mdi-' + link.icon"
       class="tile mdi mdi-36px quick-link mdi-outline">
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
          icon: 'briefcase-outline',
        },
        {
          label: 'Baz Baz',
          icon: 'plus-outline',
        },
        {
          label: 'Wat',
          icon: 'earth',
        },
        {
          label: 'Wow',
          icon: 'heart-outline',
        },
        {
          label: 'Bar',
          icon: 'email-outline',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">

  .quick-link {
    display: inline-block;
    font-size: .85rem;
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
