<template>
  <div class="tag-container" :class="{ 'tag-closed': !props.showTag }">
    <div class="tag-text">{{ props.title }}</div>
    <div class="tag-close-button-container" @click="closeTag">
      <img
        :src="props.showTag ? '/assets/close.svg' : '/assets/add.svg'"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    default: "Tag",
  },
  showTag: {
    type: Boolean,
    default: true,
  },
});

const closeTag = () => {
  console.log("closing the tag: ", props.title);
  emit("close", props.title);
};
</script>

<style scoped>
.tag-container {
  width: auto;
  height: 16px;
  padding: 4px 8px 4px 12px; /* Adjusted right padding */
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  color: #424141;
  border-radius: 6px;
  border: 2px solid #9e9e9e;
  background-color: #c9c9c9;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.tag-container:hover {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.tag-text {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-right: 8px; /* Adjusted right margin */
}

.tag-close-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-close-button-container:hover {
  background: grey;
}

.tag-close-button-container img {
  height: 16px;
}

.tag-closed {
  opacity: 0.5;
}
</style>
