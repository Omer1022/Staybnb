<template>
<main-filter-small v-if="defaultDisplay"></main-filter-small>
<main-filter-large v-else></main-filter-large>

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
  defaultDisplay:false
};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};
</script>

