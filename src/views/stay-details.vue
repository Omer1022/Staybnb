<template>
  <section class="stay-details" v-if="stay">
    <div class="stay-info">
      <h2>Name: {{ stay.name }}</h2>
      <h3>Price: {{ stay.price }}$</h3>
    </div>
    <div class="stay-amenities">
      <h3>Amenities:</h3>
      <ul>
        <li v-for="(amenities, idx) in stay.amenities" :key="idx">
          {{ amenities }}
        </li>
      </ul>
    </div>
    <p>Summary: {{ stay.summary }}</p>
    <p>Type: {{ stay.type }}</p>
    <div class="stay-reviews">
      <h3>Reviews:</h3>
      <ol>
        <li v-for="(review, idx) in stay.reviews" :key="idx">
          {{ review }}
        </li>
      </ol>
    </div>
    <router-link to="/stay">Back</router-link>
    <button @click="removeStay">Delete</button>
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
