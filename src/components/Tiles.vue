<template>
  <div class="tile is-parent">
    <div class="tile">
      The magical tile element!
    </div>
    <div class="tile">
      The magical tile element!
    </div>
    <div class="tile">
      The magical tile element!
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tiles',
};
</script>

<style scoped lang="less">

  .tile.is-parent {
    > .tile {
      height: 250px;
      margin: 2em;
      background: aquamarine none no-repeat;
      background-size: 100%;
      &:nth-child(1) {
        background-image: url("../../public/img/banner/doctor-2722943_960_720.jpg");
      }
      &:nth-child(2) {
        background-image: url("../../public/img/banner/doctor-1149149_960_720.jpg");
      }
      &:nth-child(3) {
        background-image: url("../../public/img/banner/doctor-1461878769jQS.jpg");
      }
    }
  }
</style>
