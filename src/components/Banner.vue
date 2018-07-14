<template>
  <carousel v-bind:per-page="1" class="banner">
    <slide v-for="slide in slides"
           v-bind:key="slide.text"
           v-bind:style="slideStyle(slide)">
      {{ slide.text }}
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
  data() {
    return {
      slides: [
        {
          text: 'slide 1 text content',
          imageUrl: 'img/banner/doctor-2722943_960_720.jpg',
          textPos: 'right',
        },
        {
          text: 'slide 2 text content',
          imageUrl: 'img/banner/doctor-1149149_960_720.jpg',
        },
        {
          text: 'slide 3 text content, slide 3 text content',
          imageUrl: 'img/banner/doctor-1461878769jQS.jpg',
        },
      ],
    };
  },
  methods: {
    slideStyle({ imageUrl = '', textPos = 'left' }) {
      return {
        textAlign: textPos,
        backgroundImage: `url("${imageUrl}")`,
      };
    },
  },
};
</script>

<style scoped lang="less">

.VueCarousel-wrapper {
  .VueCarousel-slide {
    height: 400px;
    padding: 2em;
    font-size: 2rem;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}

@media (max-width: 600px) {

  .VueCarousel-wrapper {
    .VueCarousel-slide {
      height: 200px;
      font-size: 1.6rem;
    }
  }
}
</style>
