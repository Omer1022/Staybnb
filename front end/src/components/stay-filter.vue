<template>

  <main-filter-small @openLarge="openLargeFilter" v-if="defaultDisplay"></main-filter-small>
  <main-filter-large v-else :mode="filterMode" @runSearch="filterUpdate"></main-filter-large>

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
  defaultDisplay:true,
  filterMode: null
};
},
created() {},
methods: {
  openLargeFilter(mode){
    this.defaultDisplay = false
    this.filterMode = mode
  },
  filterUpdate(filterBy){
    console.log('filterBy- in the stay filer cmp', filterBy)
  }
},
computed: {},
unmounted() {},
};
</script>

