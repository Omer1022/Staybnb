<template>
  <section class="stay-previews" v-if="stay">
    <div class="stay-preview-card"   @click="$router.push(`/${stay._id}`)">
        <!-- <div @click="$router.push(`/${stay._id}`)">
            </div> -->
          <div class="card-img">
            <carouse-app class="preview-img"  :slides="stay.imgUrls"/>
            <button class="btn like-btn" @click.stop="LikeStay()">
              <img src="../../public/footer-imgs/like.png" alt="" />
            </button>
          </div>
          <div class="card-details">
            <h3 class="stay-name">{{ stay.loc.city }}, {{stay.loc.country}}</h3>
            <p class="stay-price">{{ stay.price }}$ Night</p>
            <p class="stay-type">{{ stay.type }}</p>
          </div>
      <!-- <div class="actions">
        <router-link :to="'/edit/' + stay._id" class="link">Edit</router-link>
      </div> -->
    </div>
  </section>

</template>
<script>
 
 import carouseApp from './carousel/carouse-app.vue'
import CarouseApp from './carousel/carouse-app.vue'

export default {
  props: {
    stay: Object,
  },
   components: {
    carouseApp,
    CarouseApp
},
  data() {
    return {}
  },
  methods: {
    LikeStay() {
      console.log("likedddd")
    },
  },
  computed: {},
  created() {},
  unmounted() {},
}
</script>
