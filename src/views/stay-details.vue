<template>
  <section class="stay-details" v-if="stay">
    <div class="stay-info">
      <h2 class="stay-name">{{ stay.name }}</h2>
      <section class="short-info flex">
        <section class="flex">
          <h5 class="reviews-rating">★ 4.7 ·</h5>
          <h5 class="reviews-number">{{ stay.reviews.length }} reviews</h5>
          ·
          <h5 class="location">
            {{ stay.loc.city }},
            {{ stay.loc.country }}
          </h5>
        </section>
        <section class="flex">
          <div class="share-container">
            <button class="info-btn">
              <img class="share-icon" src="../styles/icons/share-icon.svg" alt="" />
              <h5 class="share-btn">Share</h5>
            </button>
          </div>
          <div class="save-container">
            <button class="info-btn">
              <span class="save-icon">♡</span>
              <h5 class="save-btn">Save</h5>
            </button>
          </div>
        </section>
      </section>
      <section class="details-gallery grid">
        <img v-bind:src="`../../img/${imgUrl}`" v-for="(imgUrl, idx) in stay.imgUrls" :key="idx" class="img-gallery" />
      </section>
    </div>
    <section class="stay-display flex">
      <div class="stay-info">
        <section class="host-summary flex align-center space-between">
          <div>
            <h2 class="host-name">
              {{ stay.type }} Hosted by {{ stay.host.fullname }}
            </h2>
            <p class="host-details">{{ stay.numOfBeds }} bedroom</p>
          </div>
          <img class="host-img" v-bind:src="`${stay.host.imgUrl}`" />
        </section>
        <h2 class="stay-summary">About this place</h2>
        <p class="summary">{{ stay.summary }}</p>
        <div class="stay-amenities">
          <h2 class="amenities-header">What this place offers</h2>
          <ul class="amenities-list flex">
            <li class="amenitie-container flex" v-for="(amenities, idx) in stay.amenities" :key="idx">
              {{ amenities }}
            </li>
          </ul>
        </div>
      </div>
      <div class="stay-order">
        <div class="order-modal-container">
          <div class="order-modal flex">
            <div class="mini-modal-container">
              <div class="order-form-header flex">
                <div>
                  <span class="stay-details-price bold">${{ stay.price }}</span>night
                </div>
                <div class="reviews-preview flex">
                  <div class="star-preview">
                    <span class="star-icon">★</span>
                  </div>
                  <span class="review-avg">4.7</span> ·
                  <span class="total-reviews">3 Reviews</span>
                </div>
              </div>
            </div>
            <form class="order-form">
              <section class="dates-pick">
                
    <Popper class="btn-container">
      <button>
        <div class="button-title">check in</div>{{ checkInDate }}
      </button>
      <template #content>
        <div class="calendar-modal">
          <calender-spread @dateChange="dateUpdate" is-expanded></calender-spread>
        </div>
      </template>
    </Popper>
   <div class="popper-check-out">
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
</div> 
              </section>
              <!-- <label class="check-in">CHECK-IN|</label>
              <label class="check-out">CHECK-OUT</label> -->
              <div class="guest-input">
                <Popper>
               
                  <button class="btn-container">
                    <div class="button-title">Guests</div><span class="guests-sum">{{ sumGusets }}</span>
                  </button>

                  <template #content>
                    <div class="detials-gusets-modal">
                      <num-input @updateItemsNum="updateAdults" title="Adults" subtitle="Ages 13 or over" />
                      <num-input @updateItemsNum="updateKids" title="Children" subtitle="Ages 2-12" />
                      <num-input @updateItemsNum="updateInfants" title="Infants" subtitle="under 2" />
                    </div>
                  </template>
                </Popper>
                <!-- <label
                  >Guests
                  <div class="guest-btn">
                    <span class="expand-more"></span>
                  </div>
                  <input
                    placeholder="1 Guest"
                    disabled="disabled"
                    class="input-guest"
                  /> -->
                <!-- </label> -->
              </div>
              <button class="reserve-btn">
                <span>Reserve</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="stay-reviews">
      <h2>★ 4.7 · {{ stay.reviews.length }} Reviews</h2>
      <div class="review-stats grid">
        <div class="review-ctg flex space-between">
          <label>Cleanliness</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale"></div>
            </div>
            <span class="score">4.7</span>
          </div>
        </div>
        <div class="review-ctg flex space-between">
          <label>Communication</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale"></div>
            </div>
            <span class="score">4.4</span>
          </div>
        </div>
        <div class="review-ctg flex space-between">
          <label>Check-in</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale"></div>
            </div>
            <span class="score">4.5</span>
          </div>
        </div>
        <div class="review-ctg flex space-between">
          <label>Accuracy</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale"></div>
              <div class="scale"></div>
            </div>
            <span class="score">4.2</span>
          </div>
        </div>
        <div class="review-ctg flex space-between">
          <label>Location</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
            </div>
            <span class="score">5.0</span>
          </div>
        </div>
        <div class="review-ctg flex space-between">
          <label>Value</label>
          <div class="flex">
            <div class="gray-scale flex">
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale black"></div>
              <div class="scale"></div>
            </div>
            <span class="score">4.8</span>
          </div>
        </div>
      </div>
      <div class="review-list">
        <ul class="reviews-list-container clean-list">
          <li v-for="(review, idx) in stay.reviews" :key="idx" class="review-preview clean-list">
            <section class="review-details">
              <div class="review-details-header flex">
                <img v-bind:src="`${review.by.imgUrl}`" class="review-img" />
                <div class="review-preview-details">
                  <h4 class="review-name">{{ review.by.fullname }}</h4>
                  <h5 class="review-time">{{ review.at }}</h5>
                </div>
              </div>
              <span class="review-txt">{{ review.txt }}</span>
            </section>
          </li>
        </ul>
      </div>
    </div>
    <!-- <router-link to="/">Back</router-link> -->
    <!-- <button @click="removeStay">Delete</button> -->
  </section>
</template>
<script>
import { stayService } from "../services/stay-service";
import Popper from "vue3-popper";
import numInput from "../components/num-input.vue"
import calenderSpread from "../components/calender-spread.vue";
import 'v-calendar/dist/style.css'

export default {
  props: [],
  template: ``,
  components: {
    Popper,
    numInput,
    calenderSpread
  },
  data() {
    return {
      stay: null,
    };
  },
  methods: {
    removeStay() {
      this.$store
        .dispatch({ type: "removeStay", stayId: this.stay._id })
        .then(() => {
          this.$router.push("/stay");
        });
    },
  },
  computed: {},
  created() {
    const { stayId } = this.$route.params;
    stayService.getById(stayId).then((currStay) => {
      this.stay = currStay;
    });
  },
  unmounted() { },
};
</script>
