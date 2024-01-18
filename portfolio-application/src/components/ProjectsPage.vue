<template>
  <div class="projects-page-container" id="project-page">
    <div class="project-tag-container">
      <Tag
        v-for="tag in tagsToDisplay"
        :key="tag.title"
        :title="tag.title"
        @close="removeTag"
      ></Tag>
      <Dropdown></Dropdown>
    </div>
    <div class="projects-container">
      <div
        class="arrow-button"
        :class="{ hidden: disableLeft }"
        @click="getPreviousCards"
      >
        <img src="/assets/chevron_left.svg" alt="" />
      </div>
      <transition name="fade" mode="out-in"></transition>
      <ProjectCard
        v-for="project in visibleCards"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      ></ProjectCard>
      <transition />
      <div
        class="arrow-button"
        :class="{ hidden: disableRight }"
        @click="getNextCards"
      >
        <img src="/assets/chevron_right.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// imports
import ProjectCard from "@/components/ProjectCard.vue";
import Dropdown from "./Dropdown.vue";
import { projectList } from "@/projectData";
import { Ref, computed, ref } from "vue";
import type { projectCardData } from "@/projectData";
import Tag from "@/components/Tag.vue";

type TagDto = {
  title: string;
};

const allTags: TagDto[] = [
  { title: "React" },
  { title: "Vue" },
  { title: "C#" },
  { title: "DOTNET CORE" },
  { title: "Web Development" },
  { title: "Backend Development" },
  { title: "Design" },
  { title: "API Development" },
  { title: "Mobile Development" },
  { title: "JavaSript" },
  { title: "TypeScript" },
  { title: "HTML" },
  { title: "Python" },
  { title: "Selenium" },
  { title: "C" },
  { title: "Critical Thinking" },
  { title: "Stress Testing" },
  { title: "API" },
  { title: "E2E Testing" },
  { title: "SQL" },
  { title: "Responsive Web Design" },
  { title: "DevOps" },
];

const tagsToDisplay: Ref<TagDto[]> = ref(allTags);

const removeTag = (tagToRemove: string) => {
  tagsToDisplay.value = tagsToDisplay.value.filter((tag) => {
    return tag.title !== tagToRemove;
  });
};

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
  flex-direction: column;
}

.project-tag-container {
  width: calc(100% - 40px);
  height: auto;
  background: black;
  display: flex;
  flex-direction: row-reverse; /* Reverse the order of the flex container */
  justify-content: flex-end; /* Align content to the end (right side) */
  align-items: center;
  flex-wrap: wrap;
  /* padding: 20px; */
  border: 2px solid red;
}

.arrow-button {
  width: 100px;
  font-size: 24px;
  /* border: 1px solid black; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  padding: 0px 5px;
}

.arrow-button img {
  height: 40px;
}

.arrow-button img {
  height: 40px;
  transition: box-shadow 0.1s ease;
}

.arrow-button img:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.projects-container {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid white; */
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
