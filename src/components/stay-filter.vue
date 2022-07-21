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
      <label for="destination-input">Where</label>
      <input v-model="filter.destination" name="destination-input" type="text" placeholder="Search detinations">
    </div>
    <span>|</span>
    <div class="checkIn-input">
      <label for="checkIn-input">Check in</label>
      <button v-if="checkinDisplayed" :class="{ active: checkinDisplayed }"
        @click="checkinDisplayed = !checkinDisplayed">Add
        Dates </button>
      <flat-pickr class="checkIn-input-picker" v-else v-model="date.checkIn"></flat-pickr>
    </div>
    <span>|</span>
    <div class="checkOut-input">
      <label for="checkOut-input">Check out</label>
      <button v-if="checkOutDisplayed" :class="{ active: checkOutDisplayed }"
        @click="checkOutDisplayed = !checkOutDisplayed">Add
        Dates </button>
      <flat-pickr v-else v-model="date.checkOut"></flat-pickr>
    </div>
    <span>|</span>
    <div class="gusets-input flex">
 <Popper>
   <div class="gusets-btn-warper">
          <label for="gusets-input">Who</label>
          <button class="gusets-input">Add gusets</button>
        </div>
    <template #content>
      <div class="gusets-modal">
          <num-input></num-input>
          <ul>input</ul>
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
      checkinDisplayed: true,
      checkOutDisplayed: true,
    };
  },
  methods: {},
  actions: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
<style lang=""></style>


