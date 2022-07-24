<template>
<transition>
  <main-filter-small @openLarge="openLargeFilter" v-show="defaultDisplay"></main-filter-small>
</transition>
<!-- <transition>
  <main-filter-large v-show="!defaultDisplay" ></main-filter-large>
</transition> -->

</template>
<script>
import mainFilterSmall from "./main-filter-small.cmp.vue";
import mainFilterLarge from "./main-filter-large.cmp.vue";

export default {
  components: {
    mainFilterSmall,
    mainFilterLarge
  },

props: [],
data() {
return {
  defaultDisplay:true
};
},
created() {},
methods: {
  openLargeFilter(){
    // this.defaultDisplay = false
  }
},
computed: {},
unmounted() {},
};
</script>

