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
      <button>
        <label>
          <div> Where</div>
          <input v-model="filter.destination" name="destination-input" type="text" placeholder="Search detinations">
        </label>
      </button>
    </div>
    <span>|</span>

    <div class="date-picker">
      <div class="block">
        <Popper>
            <div class="dates-btn-warper">
              <button >
                <div>check in</div>{{ checkInDate }}
              </button>
            </div>
            <template #content>
              <div class="calendar-modal">
                <calender-spread></calender-spread>
              </div>
            </template>
          </Popper>
        <Popper>
            <div class="dates-btn-warper">
              <button >
                <div>check out</div>{{ checkOutDate }}
              </button>
            </div>
            <template #content>
              <div class="calendar-modal">
                <calender-spread></calender-spread>
              </div>
            </template>
          </Popper>
      
      </div>
    </div>
    <span>|</span>
    <div class="gusets-input flex">
      <Popper>
        <div class="gusets-btn-warper">
          <button class="gusets-input"><label>
              <div>Who</div>
            </label>Add gusets</button>
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
import Popper from "vue3-popper";
import numInput from "./num-input.vue"
import calenderSpread from "./calender-spread.vue";
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

export default {
  props: {},
  components: {
    Popper,
    numInput,
    calenderSpread

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
      value: []
    };
  },
  methods: {},
  actions: {},
  computed: {
    checkInDate() {
      return  'Add dates'
    },
    checkOutDate() {
      return  'Add dates'
    }
  },
  created() { },
  unmounted() { },
};
</script>
<style>
.hidden {
  visibility: hidden;
}
</style>


