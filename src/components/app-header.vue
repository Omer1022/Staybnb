<template>
  <section class="header">
    <router-link :to="'/'" class="link">
      <div class="logo flex">
        <img class="logo-img" src="../styles/icons/air-logo.png" />
        <h1 class="logo-text">Staybnb</h1>
      </div>
    </router-link>
    <stay-filter class="filter-header" @setFilter="setFilter"  @opemLargeModal="openLarge(isOpen)"/>
    <section class="user-actions flex align-items space-between">
      <div class="host">
        <router-link :to="'/'" class="host-header link">Become a Host</router-link>
      </div>
      <!-- <button class="btn ">
        <img src="/footer-imgs/lan.png" alt="" />
      </button> -->
      <section class="user-info flex">
        <button class="menu-btn btn">
          <img class="menu-img" src="../../public/footer-imgs/menu.png" alt="" />
        </button>
        <button class="user-btn btn">
          <img class="user-img" src="../../public/footer-imgs/user.png" alt="" />
        </button>
      </section>
    </section>

  </section>
  <section class="search-modal">
    <div class="open-modal" > 
  <div :class="{ 'large-search-modal': isLargeOpen }">
    <main-filter-large class="large-search"/>
  </div>
  </div>
    <!-- <pre>mor revah mor revah</pre> -->
  </section>
   
  
</template>
<script>
import stayFilter from "./stay-filter.vue"
import mainFilterLarge from "./main-filter-large.cmp.vue"
export default {
  props: [],
  template: ``,
  components: {
    stayFilter,
    mainFilterLarge,
  },
  data() {
    return {
      isLargeOpen:false,
    }
  },
  methods: {
    openLarge(isOpen){
      this.isLargeOpen=!this.isLargeOpen
      console.log("from header",isOpen)

    }
  },
  computed: {},
  created() { },
  unmounted() { },
}
</script>
