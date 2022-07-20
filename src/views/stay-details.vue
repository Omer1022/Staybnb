<template>
  <section class="stay-details" v-if="stay">
    <div class="stay-info">
      <h2>{{ stay.name }}</h2>
      <h5>
        {{ stay.reviews.length }} reviews · {{ stay.loc.address }},
        {{ stay.loc.city }}, {{ stay.loc.country }}
      </h5>
      <section class="details-gallery grid">
        <li
          v-for="(imgUrl, idx) in stay.imgUrls"
          :key="idx"
          class="gallery-list"
        >
          <img v-bind:src="`../../img/${imgUrl}`" />
        </li>
      </section>
      <h3>{{ stay.type }} Hosted by {{ stay.host.fullname }}</h3>
      <p class="host-details">{{ stay.numOfBeds }} bedroom</p>
      <p class="summary">{{ stay.summary }}</p>
    </div>
    <div class="stay-amenities">
      <h3>What this place offers</h3>
      <ul>
        <li v-for="(amenities, idx) in stay.amenities" :key="idx">
          {{ amenities }}
        </li>
      </ul>
    </div>
    <div class="stay-reviews">
      <h3>Reviews:</h3>
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
