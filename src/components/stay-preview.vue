<template>
  <section class="stay-previews" v-if="stay">
    <div class="stay-preview-card">
      <!-- <div class="card-img"> -->
        <img class="preview-img" src="../../img/010.jpeg" alt="" />
      <!-- </div> -->
      <div class="card-details">
        <h2 class="stay-name">Name: {{ stay.name }}</h2>
        <p class="stay-price">Price: {{ stay.price }}$</p>
        <p class="stay-type">Type: {{ stay.type }}</p>
      </div>
    <div class="actions">
      <router-link :to="'/' + stay._id">Details</router-link>
      <router-link :to="'/edit/' + stay._id">Edit</router-link>
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
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
