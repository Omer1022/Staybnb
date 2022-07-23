<template>
      <div class="header-search">
    <button @click="openSearch">Anywhere</button>
    <span>|</span>
    <button @click="openSearch">Any week</button>
    <span>|</span>
    <button
      class="search-header flex space-between add-btn"
      @click="openSearch"
    >
      add guests
      <span class="filter-search-icon">
        <img src="../styles/icons/search_white.png" alt="" />
      </span>
    </button>
  </div>
</template>
<script>
export default {

    props: {},
    data() {
    return {};
    },
    created() {},
    methods: {
        openSearch(){
            console.log('opening large search')
        }
    },
    computed: {},
    unmounted() {},
    components: {}
    };

</script>
