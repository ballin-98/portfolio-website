<template>
  <div class="projects-page-container" id="project-page">
    <div class="project-tag-container">
      <Tag
        v-for="tag in computedTagsToDisplay"
        :key="tag.title"
        :title="tag.title"
        :show-tag="tag.showTag"
        @click="updateTagVisibility(tag.title)"
      ></Tag>
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
import { projectList } from "@/projectData";
import { Ref, computed, ref } from "vue";
import type { projectCardData } from "@/projectData";
import Tag from "@/components/Tag.vue";

type TagDto = {
  title: string;
  showTag: boolean;
};

const allTags: TagDto[] = [
  { title: "React", showTag: true },
  { title: "Vue", showTag: true },
  { title: "C#", showTag: true },
  { title: "DOTNET CORE", showTag: true },
  { title: "Web Development", showTag: true },
  { title: "Backend Development", showTag: true },
  { title: "Design", showTag: true },
  { title: "API Development", showTag: true },
  { title: "Mobile Development", showTag: true },
  { title: "JavaSript", showTag: true },
  { title: "TypeScript", showTag: true },
  { title: "HTML", showTag: true },
  { title: "Python", showTag: true },
  { title: "Selenium", showTag: true },
  { title: "C", showTag: true },
  { title: "Critical Thinking", showTag: true },
  { title: "Stress Testing", showTag: true },
  { title: "API", showTag: true },
  { title: "E2E Testing", showTag: true },
  { title: "SQL", showTag: true },
  { title: "Responsive Web Design", showTag: true },
  { title: "DevOps", showTag: true },
];

const tagsToDisplay: Ref<TagDto[]> = ref(allTags);
const computedTagsToDisplay = computed(() => tagsToDisplay.value);

// Function to update the 'showTag' property for a specific tag
const updateTagVisibility = (tagTitle: string) => {
  const tagIndex = tagsToDisplay.value.findIndex(
    (tag) => tag.title === tagTitle
  );
  console.log("here, ", tagIndex);
  if (tagIndex !== -1) {
    tagsToDisplay.value[tagIndex].showTag =
      !tagsToDisplay.value[tagIndex].showTag;
    console.log("updateds");
  }
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
