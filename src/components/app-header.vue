<template>
  <main class="header">
    <router-link :to="'/'" class="link">
      <div class="logo align-center flex">
        <img src="../styles/icons/logo.png" />
        <h1 class="logo-text">Staybnb</h1>
      </div>
    </router-link>
    <stay-filter class="filter-header" @setFilter="setFilter" />
    <section class="user-actions">
      <div>
        <router-link :to="'/'" class="host-header link">Become a Host</router-link>
       <button class=" btn drop-dwon menu">
         <img src="../../public/footer-imgs/menu.png" alt="">
        </button>
        <img class="user-img" src="../../public/footer-imgs/user.png" alt="">
      </div>
    </section>
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
