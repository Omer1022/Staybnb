<template>
  <main class="header">
    <router-link :to="'/'" class="link">
      <div class="logo align-center flex">
        <img src="../styles/icons/logo.png" />
        <h1 class="logo-text">Staybnb</h1>
      </div>
    </router-link>
    <stay-filter class="filter-header" @setFilter="setFilter" />
    <router-link :to="'/'" class="host-header link">Become a Host</router-link>
  </main>
</template>
<script>
import stayFilter from "./stay-filter.vue";
export default {
  props: [],
  template: ``,
  components: {
    stayFilter,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
