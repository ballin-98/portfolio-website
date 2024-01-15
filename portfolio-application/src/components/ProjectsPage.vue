<template>
  <div class="projects-page-container" id="project-page">
    <div class="projects-container">
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style scoped>
.projects-page-container {
  height: 100%;
  background: rgb(166, 170, 166);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
}

.projects-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
