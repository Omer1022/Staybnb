<template>
  <section class="stay-preview" v-if="stay">
    <div class="stay-details">
      <h2 class="stay-name">Name: {{ stay.name }}</h2>
      <p class="stay-price">Price: {{ stay.price }}$</p>
      <p class="stay-type">type: {{ stay.type }}</p>
    </div>
    <div class="actions">
      <router-link :to="'/stay/' + stay._id">Details</router-link>
      <router-link :to="'/stay/edit/' + stay._id">Edit</router-link>
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
