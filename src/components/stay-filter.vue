<template>
  <div class="header-search">
    <button @click="openSearch">Anywhere</button>
    <span>|</span>
    <button @click="openSearch">Any week</button>
    <span>|</span>
    <button class="search-header flex space-between" @click="openSearch">
      add guests
      <span class="filter-search-icon">
        <img src="../styles/icons/search_icon.svg" alt="" />
      </span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

<!-- <template>
  <section class="filter">
    <input
      @input="setFilter"
      v-model="filterBy.txt"
      type="text"
      placeholder="Search by name"
    />
    <select @change="setFilter" v-model="filterBy.byAmenitie" multiple>
      <option value="">Select Amenitie</option>
      <option v-for="(amenitie, idx) in amenities" :value="amenitie" :key="idx">
        {{ amenitie }}
      </option>
    </select>
    <select @change="setFilter" v-model="filterBy.bySort">
      <option value="">Select sort</option>
      <option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx">
        {{ opt }}
      </option>
    </select>
  </section>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      filterBy: {
        txt: "",
        byAmenitie: [],
        bySort: "",
      },
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Internet",
        "Iron",
        "Washer",
      ],
      sortOptions: [
        "Name - Increasing",
        "Price - Increasing",
        "Type - Increasing",
        "Name - Decreasing",
        "Price - Decreasing",
        "Type - Decreasing",
      ],
    };
  },
  methods: {
    setFilter() {
      if (this.filterBy.byAmenitie[0] === "") this.filterBy.byAmenitie = [];
      console.log(this.filterBy.byAmenitie);
      this.$emit("setFilter", this.filterBy);
    },
  },
  computed: {},
  created() {},
};
</script> -->
