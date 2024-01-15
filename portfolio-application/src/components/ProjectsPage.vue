<template>
  <div class="projects-page-container" id="project-page">
    <div
      class="arrow-button"
      :class="{ hidden: disableLeft }"
      @click="getPreviousCards"
    >
      <img src="/assets/chevron_left.svg" alt="" />
    </div>
    <transition name="fade" mode="out-in"></transition>
    <div
      class="projects-container"
      v-for="project in visibleCards"
      :key="project.title"
    >
      <ProjectCard
        :title="project.title"
        :description="project.description"
        :image="project.image"
      ></ProjectCard>
    </div>
    <transition />
    <div
      class="arrow-button"
      :class="{ hidden: disableRight }"
      @click="getNextCards"
    >
      <img src="/assets/chevron_right.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
// imports
import ProjectCard from "@/components/ProjectCard.vue";
import { projectList } from "@/projectData";
import { Ref, computed, ref } from "vue";
import type { projectCardData } from "@/projectData";

// variables
const visibleCards: Ref<projectCardData[]> = ref(projectList.slice(0, 3));
const currentIndex = ref<number>(0);

const disableRight = computed(() => {
  return currentIndex.value + 3 == projectList.length ? true : false;
});

const disableLeft = computed(() => {
  return currentIndex.value == 0 ? true : false;
});

// functions
const getNextCards = () => {
  currentIndex.value += 1;
  visibleCards.value = projectList.slice(
    currentIndex.value,
    currentIndex.value + 3
  );
};

const getPreviousCards = () => {
  currentIndex.value -= 1;
  visibleCards.value = projectList.slice(
    currentIndex.value,
    currentIndex.value + 3
  );
};
// const getPreviousCard = () => {};
</script>

<style scoped>
.projects-page-container {
  height: 100%;
  background: rgb(166, 170, 166);
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-button {
  width: 100px;
  font-size: 24px;
  border: 1px solid black;
  cursor: pointer;
}

.projects-container {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hidden {
  pointer-events: none;
  opacity: 0.2;
}
</style>
