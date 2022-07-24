<template>
  <section class="labels-filter flex">
    <button class="labels-control prev" @click.stop="$emit('prev')">
      &#60;
    </button>
    <section v-if="labels" class="labels-list">
    <div class="cards-container" v-for="(label,idx) in labels" :key="idx">
      {{label.name}}
    </div>
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
import { labelService } from '../services/label-service.js'
export default {
  name: "label-filter",
  props: {
    labels: Array,
  },
  components: {
  },
  data() {
    return {}
  },
  methods: {},

  created() {
    labelService.query()
  },
  unmounted() {},
}
</script>
