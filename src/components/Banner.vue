<template>
  <carousel v-bind:per-page="1" class="banner">
    <slide>
      slide 1 text content
    </slide>
    <slide>
      slide 2 text content
    </slide>
    <slide>
      slide 3 text content
    </slide>
  </carousel>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Banner',
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped lang="less">

  .VueCarousel-wrapper {
    .VueCarousel-slide {
      height: 400px;
      padding: 2em;
      font-size: 2rem;
      text-align: left;
      background: aquamarine none no-repeat;
      background-size: 100%;

      &:nth-child(1) {
        text-align: right;
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
