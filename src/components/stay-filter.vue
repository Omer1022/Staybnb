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

  <form class="header-filter flex">
    <div class="destination-input btn-container">
      <button  @click.stop="clickedButton">
        <label>
          <div class="button-title">Where</div>
          <input
            v-model="filter.destination"
            name="destination-input"
            type="text"
            placeholder="Search detonations"
          />
        </label>
      </button>
    </div>
    <span>|</span>
    <div class="check-in-container  btn-container flex">
        <button  @click.stop="clickedButton">
          <div class="button-title">Check in</div>
          {{ checkInDate }}
        </button>
    </div>
    <span>|</span>
    <div class="check-out-container  btn-container flex">
      <button @click.stop="clickedButton">
        <div class="button-title">Check out</div>
          {{ checkOutDate }}
        </button>
    </div>

    <span>|</span>

    <div class="guest-container  btn-container flex">
      <button  @click.stop="clickedButton">
        <div class="button-title">Who</div>
          <span class="guests-sum">{{ totalGuests }}</span>
          <div @click.stop="runSearch" class="filter-search">
            <img src="../styles/icons/search_white.png" alt="" />Search
          </div>
        </button>
       
          <div v-if="isGuestModalShown" class="guests-modal">
            <num-input
              @updateItemsNum="updateAdults"
              title="Adults"
              subtitle="Ages 13 or over"
            />
            <num-input
              @updateItemsNum="updateKids"
              title="Children"
              subtitle="Ages 2-12"
            />
            <num-input
              @updateItemsNum="updateInfants"
              title="Infants"
              subtitle="under 2"
            />
          </div>
  
    </div>
  </form>
            <div v-if="isCalendarShown" class="calendar-modal">
              <calender-spread
                @dateChange="dateUpdate"
                is-expanded
              ></calender-spread>
            </div>
</template>
<script>
// import Popper from "vue3-popper";
import numInput from "./num-input.vue";
import calenderSpread from "./calender-spread.vue";
// import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

export default {
  props: {},
  components: {
    numInput,
    calenderSpread,
  },
  data() {
    return {
      filter: {
        destination: "",
        numOfBeds: 0,
      },
      date: {
        start: null,
        end: null,
      },

      guests: {
        adults: 0,
        kids: 0,
        infants: 0,
        total: 0,
      },
      isCalendarShown: false
      ,
      isGuestModalShown: false
    };
  },
  methods: {
    clickedButton(){
      console.log('trilili')
    },
    runSearch() {
      console.log("searching");
    },
    sumGuests() {
      this.guests.total =
        this.guests.adults + this.guests.kids + this.guests.infants;
    },
    updateAdults(num) {
      console.log(num);
      this.guests.adults = num;
      this.sumGuests();
    },
    updateKids(num) {
      this.guests.kids = num;
      this.sumGuests();
    },
    updateInfants(num) {
      this.guests.infants = num;
      this.sumGuests();
    },
    dateUpdate(date) {
      this.date = date;
      console.log("yes!");
      console.log("yes", this.date);
      console.log("start", this.date.start);
      console.log("end", this.date.end);
    },
  },
  actions: {},
  computed: {
    checkInDate() {
    return this.date.start? this.date.start.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    }) : "Add dates"},
  
    checkOutDate() {
      return this.date.end? this.date.end.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    }) : "Add dates"},
    totalGuests() {
      switch(this.guests.total){
        case 0: 
          return 'Add guests'
          break
        case 1:
          return '1 guest'
          break
        default: 
          return `${this.guests.total} guests`
      } 
    }, },
  
  created() {},
  unmounted() {},
};
</script>
<style>
.hidden {
  visibility: hidden;
}
</style>
