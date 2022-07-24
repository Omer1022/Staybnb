<template>
  <section class="labels-filter flex">

      <button class="labels-control prev" @click.stop="$emit('prev')">&#60;</button>
      
      <div class="lable-container">here comes lables</div>

      <button class="labels-control next" @click.stop="$emit('next')">&#62;</button>
    <button class="labels-filter-btn btn flex" @click.stop="$emit('filters')">
    <img src="../../public/lable-img/filter-icon.png" alt="" class="filter-img">Filters
    </button>
  </section>
</template>

<script>
export default {
  name: "lable-filter",
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {},

  created() {},
  unmounted() {},
};
</script>
