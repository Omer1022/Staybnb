<template>
  <section class="stay-previews " v-if="stay">
    <div class="stay-preview-card">
      <div
        class="card-img"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <carouse-app class="preview-img" :slides="stay.imgUrls" />
        <button class="btn like-btn" @click.stop="LikeStay()">
          <img src="../../public/footer-imgs/like.png" alt="" />
        </button>
      </div>
      <div @click="$router.push(`/${stay._id}`)">
        <div class="card-details">
          <div class="stay-header">
            <p class="stay-rate">
              <img src="../../public/footer-imgs/star.png" /> 4.3
            </p>
            <p class="stay-name">{{ stay.loc.city }}, {{ stay.loc.country }}</p>
          </div>
          <p class="stay-price"><span>${{ stay.price }} </span> Night</p>
          <p class="stay-type">{{ stay.type }}</p>
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
    CarouseApp,
  },
  data() {
    return {};
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
