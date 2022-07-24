<template>
  <section class="stay-previews" v-if="stay">
    <div @click="$router.push(`/${stay._id}`)" class="stay-preview-card">
      <div class="card-img">
        <el-carousel arrow="hover" trigger="click">
          <el-carousel-item v-for="img in stay.imgUrls" >
          <img :src="`../../img/${img}`">
            <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          </el-carousel-item>
        </el-carousel>
        <!-- <carouse-app class="preview-img" :slides="stay.imgUrls"
        /> -->
        <!-- <carousel-cmp class="preview-img" :slides="stay.imgUrls"
        /> -->
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
    </div>
  </section>
</template>
<script>
import carouseApp from "./carousel/carouse-app.vue";
import CarouseApp from "./carousel/carouse-app.vue";
import CarouselCmp from "./carousel.cmp.vue";

export default {
  props: {
    stay: Object,
  },
  components: {
    carouseApp,
    CarouselCmp
  },
  data() {
    return {
    };
  },
  methods: {
    LikeStay() {
      console.log("likedddd");
    },
  },
  computed: {},
  created() { },
  unmounted() { },
};
</script>
