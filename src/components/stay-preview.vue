<template>
  <section class="stay-previews" v-if="stay">
    <div class="stay-preview-card">
      <router-link :to="'/' + stay._id" class="link">
        <div class="card-img">
          <img class="preview-img" src="../../img/010.jpeg" alt="" />
        </div>
        <div class="card-details">
          <h2 class="stay-name">{{ stay.name }}</h2>
          <p class="stay-price">{{ stay.price }}$ Night</p>
          <p class="stay-type">{{ stay.type }}</p>
        </div>
      </router-link>
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
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
};
</script>
