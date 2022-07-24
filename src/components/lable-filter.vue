<template>
  <section class="labels-filter flex">
    <button class="labels-control prev" @click.stop="$emit('prev')">
      &#60;
    </button>
    <section v-if="labels" class="label-list">
      <lu class="labels-card" v-for="label in labels">
        <li>
        <h1>labelS</h1>
        </li>
      </lu>
    </section>
    <!-- <div class="lable-container">here comes lables</div> -->

    <button class="labels-control next" @click.stop="$emit('next')">
      &#62;
    </button>
    <button class="labels-filter-btn btn flex" @click.stop="$emit('filters')">
      <img
        src="../../public/lable-img/filter-icon.png"
        alt=""
        class="filter-img"
      />Filters
    </button>
  </section>
</template>

<script>
export default {
  name: "lable-filter",
  props: {
    labels: Array,
  },
  components: {},
  data() {
    return {
        labels:null,
    }
  },
  methods: {},

  created() {
  },
  unmounted() {},
}
</script>
