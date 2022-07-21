<template>
  <carousel :slides="slides" controls indicators></carousel>
</template>

<script>
import Carousel from "./carousel.vue";
export default {
   props: {
    slides: Array,
  },
  components: { Carousel },
};
</script>









