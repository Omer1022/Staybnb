<template>
  <section class="stay-details" v-if="stay">
    <div class="stay-info">
      <h2>{{ stay.name }}</h2>
      <section class="short-info flex">
        <section class="flex">
          <h5 class="reviews-rating">★ 4.7</h5>
          ·
          <h5 class="reviews-number">{{ stay.reviews.length }} reviews</h5>
          ·
          <h5 class="location">
            {{ stay.loc.city }},
            {{ stay.loc.country }}
          </h5>
        </section>
        <section class="flex">
          <button class="info-btn">
            <span>Share</span>
          </button>
          <button class="info-btn">
            <span>Save</span>
          </button>
        </section>
      </section>
      <section class="details-gallery grid">
        <img
          v-bind:src="`../../img/${imgUrl}`"
          v-for="(imgUrl, idx) in stay.imgUrls"
          :key="idx"
          class="img-gallery"
        />
      </section>
    </div>
    <section class="stay-display flex">
      <div class="stay-info">
        <h3>{{ stay.type }} Hosted by {{ stay.host.fullname }}</h3>
        <p class="host-details">{{ stay.numOfBeds }} bedroom</p>
        <p class="summary">{{ stay.summary }}</p>
        <h3>What this place offers</h3>
        <div class="stay-amenities">
          <ul>
            <li v-for="(amenities, idx) in stay.amenities" :key="idx">
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
                <div><span class="bold">$500</span>Night</div>
                <div class="reviews-preview flex">
                  <div class="star-preview">
                    <span class="star-icon">★</span>
                  </div>
                  <span class="review-avg">4.7</span>
                  <span class="total-reviews">3 Reviews</span>
                </div>
              </div>
            </div>
            <form class="order-form">
              <section class="dates-pick"></section>
              <label class="check-in">CHECK-IN|</label>
              <label class="check-out">CHECK-OUT</label>
              <div class="guest-input">
                <label
                  >Guests
                  <div class="guest-btn">
                    <span class="expand-more"></span>
                  </div>
                  <input
                    placeholder="1 Guest"
                    disabled="disabled"
                    class="input-guest"
                  />
                </label>
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
      <h3>{{ stay.reviews.length }} Reviews</h3>
      <ol>
        <li v-for="(review, idx) in stay.reviews" :key="idx">
          {{ review }}
        </li>
      </ol>
    </div>
    <router-link to="/">Back</router-link>
    <!-- <button @click="removeStay">Delete</button> -->
  </section>
</template>
<script>
import { stayService } from "../services/stay-service";

export default {
  props: [],
  template: ``,
  components: {},
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
  unmounted() {},
};
</script>
