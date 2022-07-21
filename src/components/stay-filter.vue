<template>
  <!-- <div class="header-search">
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
  </div> -->

  <form class="large-header-filter flex">
    <div class="destination-input">
      <label>
        <div> Where</div>
        <input v-model="filter.destination" name="destination-input" type="text"
          placeholder="Search detinations">
      </label>
    </div>
    <span>|</span>
    <div class="date-picker">
    


    </div>
    <span>|</span>
    <div class="gusets-input flex">
      <Popper	>
        <div class="gusets-btn-warper">
          <label for="gusets-input">Who</label>
          <button class="gusets-input">Add gusets</button>
        </div>
        <template #content>
          <div class="gusets-modal">
            <num-input></num-input>
            <num-input></num-input>
          
          </div>
        </template>
      </Popper>

    </div>



    <button class="large-filter-search"><img src="../styles/icons/search_white.png" alt="">Search</button>

  </form>


</template>
<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Popper from "vue3-popper";
import numInput from "./num-input.vue"


export default {
  props: {},
  components: {
    flatPickr,
    Popper,
    numInput

  },
  data() {
    return {
      filter: {
        destination: "",
        numOfBeds: 0,
      },
      date: {
        checkIn: null,
        checkOut: null,
      },
      checkinDisplayed: false,
      checkOutDisplayed: false,
    };
  },
  methods: {},
  actions: {},
  computed: {},
  created() { },
  unmounted() { },
};
</script>
<style lang=""></style>


