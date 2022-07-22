<template>
  <section class="stay-previews" v-if="stay">
    <div @click="$router.push(`/${stay._id}`)" class="stay-preview-card">
      <div class="card-img">
        <carouse-app class="preview-img" :slides="stay.imgUrls"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        />
        <!-- v-if="hover" :class="{'carousel-hover': hover}" -->
        <!-- {{hover not work}} -->
        <button class="btn like-btn" @click.stop="LikeStay()">
          <img src="../styles/icons/save-icon.svg" alt="" />
        </button>
      </div>
      <div>
        <div class="card-details">
          <div class="stay-header">
            <span class="star-rate">★4.3</span>
            <p class="stay-name-preview bold">
              {{ stay.loc.city }}, {{ stay.loc.country }}
            </p>
          </div>
          <p class="stay-type-preview">{{ stay.type }}</p>
          <p class="stay-price-preview">
            <span class="bold">${{ stay.price }} </span> night
          </p>
        </div>
      </div>
      <!-- <div class="actions">
        <router-link :to="'/edit/' + stay._id" class="link">Edit</router-link>
      </div> -->
    </div>
  </section>
</template>
<script>
import carouseApp from "./carousel/carouse-app.vue";
import CarouseApp from "./carousel/carouse-app.vue";

export default {
  props: {
    stay: Object,
  },
  components: {
    carouseApp,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    LikeStay() {
      console.log("likedddd");
    },
  },
  computed: {},
  created() {},
  unmounted() {},
};
</script>
