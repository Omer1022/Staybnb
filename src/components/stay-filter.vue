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
  <!-- 
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
          <!-- <ul>input</ul> -->
          <!-- <ul>input</ul> -->
      </div>
<<<<<<< HEAD
  </form> -->
  <!-- <div class="add-modal">
=======
    </template>
  </Popper>
          <!--
     
>>>>>>> 0b48be71554aeb7b7d6730dc8446ce026196e618
          <div>
          <ul>input</ul>
          <ul>input</ul>
          <ul>input</ul> -->
    </div>

      

      <button class="large-filter-search"><img src="../styles/icons/search_white.png" alt="">Search</button>
   
  </form>


</template>
<script>
<<<<<<< HEAD
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
=======
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { defineComponent } from "vue";
import Popper from "vue3-popper";
import numInput from "./num-input.vue"

>>>>>>> 0b48be71554aeb7b7d6730dc8446ce026196e618

export default {
  props: {},
  components: {
    flatPickr,
<<<<<<< HEAD
=======
    Popper,
    numInput

>>>>>>> 0b48be71554aeb7b7d6730dc8446ce026196e618
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
<<<<<<< HEAD
=======
      modalActive: true,
>>>>>>> 0b48be71554aeb7b7d6730dc8446ce026196e618
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
