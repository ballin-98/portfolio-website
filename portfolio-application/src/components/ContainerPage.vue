<template>
  <div class="page-container">
    <AboutPage></AboutPage>
    <ProjectsPage></ProjectsPage>
  </div>
</template>

<script setup lang="ts">
import ProjectsPage from "@/components/ProjectsPage.vue";
import AboutPage from "@/components/AboutPage.vue";
</script>

<style scoped>
.page-container {
  height: 100%;
}
</style>
