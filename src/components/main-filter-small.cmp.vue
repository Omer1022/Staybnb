<template>
      <div class="header-search">
    <button value="destination" @click="openSearch('destination')">Anywhere</button>
    <span>|</span>
    <button  @click="openSearch('date')">Any week</button>
    <span>|</span>
    <button
      value="guests"
      class="search-header flex space-between add-btn"
      @click="openSearch('guests')"
    >
      add guests
      <button>
      <span class="filter-search-icon">
        <img src="../styles/icons/search_white.png" alt="" />
      </span>
      </button>
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
        openSearch(mode){
            this.$emit('openLarge', mode)
        }
    },
    computed: {},
    unmounted() {},
    components: {}
    };

</script>
