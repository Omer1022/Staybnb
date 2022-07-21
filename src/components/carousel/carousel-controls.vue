<template>
<div>
  <button class="carousel-control left" @click="$emit('prev')">&#60;</button>
  <button class="carousel-control right" @click="$emit('next')">&#62;</button>
</div>
</template>

<script>
export default {
  emits: ["prev", "next"], 
};
</script>
