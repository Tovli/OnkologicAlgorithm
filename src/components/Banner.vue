<template>
  <carousel v-bind:per-page="1"
            v-bind:speed="1500"
            v-bind:autoplay="true"
            v-bind:autoplayHoverPause="true"
            v-bind:autoplayTimeout="5000"
            class="banner">
    <slide v-for="slide in slides"
           v-bind:key="slide.text"
           v-bind:style="slideStyle(slide)"
           v-bind:data-content="slide.text">
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
          text: 'One of the three best hospitals you\'ve ever meet',
          imageUrl: 'img/banner/doctor-2722943_960_720.jpg',
          textPos: 'right',
        },
        {
          text: 'Come to us to have a surgery',
          imageUrl: 'img/banner/doctor-1149149_960_720.jpg',
        },
        {
          text: 'The best Doctors are waiting for you',
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
      position: relative;
      height: 400px;
      padding: 2em;
      font-size: 2rem;
      background-repeat: no-repeat;
      background-size: 100%;
      text-shadow: 1px 1px 2px #fff;
      background-position: 0 50%;
      // use before pseudo element as an opacity overlay
      &:before {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        background-color: #fff;
        opacity: 0;
        transition: opacity 600ms;
      }

      // use after as text container
      &:after {
        content: attr(data-content);
        position: relative;
        z-index: 1;
      }
    }

    .VueCarousel-slide.VueCarousel-slide-active {
      &:before {
        opacity: .3;
      }
    }
  }

  @media (max-width: 768px) {

    .VueCarousel-wrapper {
      .VueCarousel-slide {
        height: 200px;
        font-size: 1.6rem;
      }
    }
  }
</style>
