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

    <Popper class="btn-container">
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
    <Popper class="btn-container">
      <button>
        <div class="button-title">check out</div>{{ checkOutDate }}
      </button>

      <template #content>
        <div class="calendar-modal">
          <calender-spread @dateChange="dateUpdate" is-expanded></calender-spread>
        </div>
      </template>
    </Popper>


    <span>|</span>
    <div class="flex btn-container">
      <Popper btn-container>
        <button class="btn-container">
          <div class="button-title">Who</div><span class="guests-sum">{{ sumGusets }}</span>
          <button @click.stop="runSerach" class="large-filter-search btn-container"><img
              src="../styles/icons/search_white.png" alt="">Search</button>
        </button>

        <template #content>
          <div class="gusets-modal">
            <num-input @updateItemsNum="updateAdults" title="Adults" subtitle="Ages 13 or over" />
            <num-input @updateItemsNum="updateKids" title="Children" subtitle="Ages 2-12" />
            <num-input @updateItemsNum="updateInfants" title="Infants" subtitle="under 2" />
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
       start:null,
       end:null
      },
      checkinDisplayed: false,
      checkOutDisplayed: false,
      gustes: {
        adults: 0,
        kids: 0,
        infants: 0,
        total: 0
      }
    }
  },
  methods: {
    runSerach() {
      console.log("searching")
    },
    sumGustes() {
      this.gustes.total = this.gustes.adults + this.gustes.kids + this.gustes.infants
    },
    updateAdults(num) {
      console.log(num)
      this.gustes.adults = num
      this.sumGustes()
    },
    updateKids(num) {
      this.gustes.kids = num
      this.sumGustes()
    },
    updateInfants(num) {
      this.gustes.infants = num
      this.sumGustes()
    },
    dateUpdate(date){
      this.date = date
      console.log('yes!')
      console.log('yes',this.date)
      console.log('start', this.date.start)
      console.log('end', this.date.end)
    }
  },
  actions: {},
  computed: {
    checkInDate() {
      return this.date.start ||'Add dates'
    },
    checkOutDate() {
      return this.date.end || 'Add dates'
    },
     sumGusets() {
      return (this.gustes.total > 0) ? this.gustes.total : "Add guests"
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


