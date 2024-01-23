<template>
  <div class="card-container">
    <div class="card-image-container">
      <img :src="props.image" alt="" />
      <div class="card-overlay">
        <div class="card-title">{{ props.title }}</div>
        <div class="card-description">{{ props.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Project",
  },
  description: {
    type: String,
    default: "A very detailed description",
  },
  image: {
    type: String,
    default: "/assets/project-image.jpg",
  },
});
</script>

<style scoped>
.card-container {
  height: 90%;
  width: 90%;
  position: relative;
  border-radius: 10%;
  overflow: hidden; /* Ensure the overlay doesn't spill out */
  transition: transform 0.1s;
  padding: 0px 30px;
}

.card-container:hover {
  transform: scale(1.1); /* Scale up by 10% on hover */
}

.card-image-container {
  height: 100%;
  display: block;
  position: relative;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: white;
  opacity: 0;
  border-radius: 10%;
}
.card-overlay:hover {
  opacity: 1;
  background-color: rgb(129, 124, 124, 0.8);
}
.card-title,
.card-description {
  margin: 0;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
}
</style>
