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
















<!-- <template>
  
</template>
<script>

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script> -->
