<template>
  <section class="stay-previews" v-if="stay">
    <div class="stay-preview-card">
      <!-- <router-link :to="'/' + stay._id" class="link"> -->
        <div @click="$router.push(`/${stay._id}`)">
          <div class="card-img">
            <img class="preview-img" src="../../img/010.jpeg" alt="" />
            <button class="btn like-btn" @click.stop="LikeStay()">
              <img src="../../public/footer-imgs/like.png" alt="" />
            </button>
          </div>
          <div class="card-details">
            <h3 class="stay-name">{{ stay.loc.city }}, {{stay.loc.country}}</h3>
            <p class="stay-price">{{ stay.price }}$ Night</p>
            <p class="stay-type">{{ stay.type }}</p>
          </div>
        </div>
      <!-- </router-link> -->
      <div class="actions">
        <router-link :to="'/edit/' + stay._id" class="link">Edit</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    stay: Object,
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
