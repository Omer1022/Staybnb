<template>
  <div class="stay-app">
    <stay-list @removeStay="removeStay" :stays="stays" />
  </div>


</template>

<script>
import stayList from "../components/stay-list.vue";
import carouseApp from "../components/carousel/carouse-app.vue";
export default {
  template: ``,
  components: {
    stayList,
    carouseApp,
  },
  data() {
    return {};
  },
  methods: {
    removeStay(stayId) {
      this.$store.dispatch({ type: "removeStay", stayId });
    },
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.staysToDisplay;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays" }).then(() => {});
  },
  unmounted() {},
};
</script>
