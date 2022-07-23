<template>
  <div id="app" class="layout">
    <app-header class="header-layout "/>
    <router-view class="body-layout main-layout"/>
    <app-footer class="footer-layout"/>
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
