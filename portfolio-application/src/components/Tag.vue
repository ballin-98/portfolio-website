<template>
  <div class="tag-container">
    <div class="tag-text">{{ props.title }}</div>
    <div class="tag-close-button">X</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Tag",
  },
});
</script>

<style scoped>
.tag-container {
  width: auto; /* Adjusted to accommodate variable content */
  height: 20px;
  padding: 4px 12px; /* Increased padding for a more tag-like appearance */
  margin: 4px;
  color: #424141;
  border-radius: 6px; /* Increased border radius for a rounded look */
  border: 2px solid #9e9e9e;
  background-color: #c9c9c9;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Added box-shadow transition */
  display: inline-flex; /* Changed to inline-flex for better tag-like alignment */
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added box shadow for a lifted appearance */
}

.tag-container:hover {
  background-color: #b0b0b0; /* Darker shade on hover */
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Increased box shadow on hover */
}
</style>
