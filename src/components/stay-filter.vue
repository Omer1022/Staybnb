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
      <button>
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

    <div class="check-in-container flex">
      <Popper class="btn-container">
        <button>
          <div class="button-title">Check in</div>
          {{ checkInDate }}
        </button>
        <template #content>
          <div class="calendar-modal">
            <calender-spread
              @dateChange="dateUpdate"
              is-expanded
            ></calender-spread>
          </div>
        </template>
      </Popper>
    </div>

    <span>|</span>

    <div class="check-out-container flex">
      <Popper class="btn-container">
     
        <button>
          <div class="button-title">Check out</div>
          {{ checkOutDate }}
        </button>
     
        <template #content>
          <div class="calendar-modal">
            <calender-spread
              @dateChange="dateUpdate"
              is-expanded
            ></calender-spread>
          </div>
        </template>
      </Popper>
    </div>

    <span>|</span>

    <div class="guest-container flex">
      <Popper class="btn-container">
        <button class="btn-container">
          <div class="button-title">Who</div>
          <span class="guests-sum">{{ totalGuests }}</span>
          <button @click.stop="runSearch" class="filter-search btn-container">
            <img src="../styles/icons/search_white.png" alt="" />
          </button>
        </button>
        <template #content>
          <div class="guests-modal">
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
        </template>
      </Popper>
    </div>
  </form>
</template>
<script>
import Popper from "vue3-popper";
import numInput from "./num-input.vue";
import calenderSpread from "./calender-spread.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

export default {
  props: {},
  components: {
    Popper,
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
    };
  },
  methods: {
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
      return this.guests.total > 0 ? this.guests.total : "Add guests";
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
