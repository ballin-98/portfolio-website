<template>
  <div class="dropdown">
    <button @click="toggleDropdown">Toggle Dropdown</button>
    <ul v-if="isOpen" @click="handleItemClick">
      <li v-for="(item, index) in dropdownItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isOpen = false;
const dropdownItems = ["Item 1", "Item 2", "Item 3"];
const toggleDropdown = () => {
  isOpen = !isOpen;
};
const handleItemClick = (e: event) => {
  // Handle item click here
  const selectedItem = e.target.textContent;
  console.log(`Selected item: ${selectedItem}`);

  // Close the dropdown after selecting an item
  isOpen = false;
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
}

ul li {
  padding: 8px 16px;
  cursor: pointer;
}

ul li:hover {
  background-color: #f2f2f2;
}

.dropdown button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
