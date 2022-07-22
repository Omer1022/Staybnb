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
    <div class="destination-input btn-container">
      <button>
        <label>
          <div class="button-title"> Where</div>
          <input v-model="filter.destination" name="destination-input" type="text" placeholder="Search detinations">
        </label>
      </button>
    </div>
    <span>|</span>

    <Popper class="popper-btn btn-container">
      <button>
        <div class="button-title">check in</div>{{ checkInDate }}
      </button>

      <template #content>
        <div class="calendar-modal">
          <calender-spread is-expanded></calender-spread>
        </div>
      </template>
    </Popper>
    <span>|</span>
    <Popper>

      <button>
        <div class="button-title">check out</div>{{ checkOutDate }}
      </button>

      <template #content>
        <div class="calendar-modal">
          <calender-spread is-expanded></calender-spread>
        </div>
      </template>
    </Popper>


    <span>|</span>
    <div class="gusets-input flex btn-container">
      <Popper btn-container>
        <div class="gusets-btn-warper btn-container">
          <button class="gusets-input"><label>
              <div class="button-title">Who</div>
            </label>Add gusets
             <button @click.stop="runSerach" class="large-filter-search btn-container"><img src="../styles/icons/search_white.png" alt="">Search</button>
             </button>

        </div>
        <template #content>
          <div class="gusets-modal">
            <num-input></num-input>
            <num-input></num-input>

          </div>
        </template>
      </Popper>

    </div>

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
  methods: {
    runSerach(){
      console.log("searching")
    }
  },
  actions: {},
  computed: {
    checkInDate() {
      return 'Add dates'
    },
    checkOutDate() {
      return 'Add dates'
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


