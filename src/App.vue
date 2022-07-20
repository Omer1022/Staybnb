<template>
  <div id="app" class="main-layout">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {};
  },
  methods: {},

  created() {},
  unmounted() {},
};
</script>
