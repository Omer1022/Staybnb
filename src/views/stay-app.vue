<template>
  <div class="stay-app">
    <app-header class="header-layout"/>

    <stay-list @removeStay="removeStay" :stays="stays" />

    <app-footer class="footer-layout footer-padding-layout"/>
  </div>


</template>

<script>
import stayList from "../components/stay-list.vue";
import carouseApp from "../components/carousel/carouse-app.vue";
import appHeader from "../components/app-header.vue";
import appFooter from "../components/app-footer.vue";

export default {
  template: ``,
  components: {
    stayList,
    carouseApp,
    appHeader,
    appFooter
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
