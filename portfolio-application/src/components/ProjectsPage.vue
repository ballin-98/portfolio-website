<template>
  <div class="projects-page-container" id="project-page">
    <div class="project-tag-container">
      <Tag
        v-for="tag in computedTagsToDisplay"
        :key="tag.title"
        :title="tag.title"
        :show-tag="tag.showTag"
        @click="handleTagVisibility(tag.title)"
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
import { TagDto } from "@/projectData";
import { allTags } from "@/data/tagData";

// refs
const tagsToDisplay: Ref<TagDto[]> = ref(allTags);
const computedTagsToDisplay = computed(() => tagsToDisplay.value);

// computed values
const tagClicked = computed(() => {
  return tagsToDisplay.value
    .slice(1, tagsToDisplay.value.length)
    .some((tag) => tag.showTag === false);
});

// function to update tag visibility
const handleTagVisibility = (tagTitle: string) => {
  const tagIndex = tagsToDisplay.value.findIndex(
    (tag) => tag.title === tagTitle
  );
  if (tagIndex === 0) {
    updateEveryTag();
  } else {
    tagsToDisplay.value[tagIndex].showTag =
      !tagsToDisplay.value[tagIndex].showTag;
    handleAllTagVisibility();
  }
};

// function to determine if the tag "All" should be displayed
const handleAllTagVisibility = () => {
  if (tagClicked.value) {
    tagsToDisplay.value[0].showTag = false;
  } else {
    tagsToDisplay.value[0].showTag = true;
  }
};

// function to update every tag if "All" tag was clicked
const updateEveryTag = () => {
  // we just need to know if it's visible or not and update based on that
  if (tagClicked.value) {
    // we know that all tags here is not active
    tagsToDisplay.value.forEach((tag) => {
      tag.showTag = true;
    });
  } else {
    tagsToDisplay.value.forEach((tag) => {
      tag.showTag = false;
    });
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
  height: 100px;
  display: flex;
  justify-content: flex-start; /* Align content to the end (right side) */
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid red;
}

.arrow-button {
  width: 100px;
  font-size: 24px;
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
  width: (100%-40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid purple;
  margin: 20px;
  /* gap: 20px; */
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
