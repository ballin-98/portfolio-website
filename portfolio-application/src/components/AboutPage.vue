<template>
  <div class="container" id="about-page">
    <div class="left-container">
      <img src="/assets/alex.jpeg" alt="Your Image" />
    </div>
    <div class="right-container">
      <div class="header">ABOUT</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const description = `I'm a Computer Science graduate from the University of Alberta with over four years of professional experience in web development. Based in Edmonton, Canada, I specialize in crafting sophisticated solutions and optimizing applications. My expertise lies in futuristic web development and design, focusing on next-level websites and web applications. I bring a proven track record of creative problem-solving and a dedication to user-centric solutions. I look forward to contributing my skills and experience to elevate your projects.`;
</script>

<style scoped>
.container {
  display: flex;
  height: 90vh; /* 100% of the viewport height */
  font-family: "Roboto Mono", monospace;
}

.left-container {
  flex: 1; /* Take up the remaining space */
  overflow: hidden; /* Ensure child elements don't overflow */
}

.left-container img {
  width: 100%; /* Make the image fill the entire width of the container */
  height: 100%; /* Make the image fill the entire height of the container */
  object-fit: cover; /* Ensure the image covers the entire container without stretching */
}

.right-container {
  display: flex;
  flex: 1; /* Take up the remaining space */
  /* background-color: #889eb3; Placeholder background color for the right container */
  background-color: #deb992;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center; /* Center the content vertically */

  color: #fff; /* White text color */
  width: calc(100% - 40px); /* Corrected syntax */
  font-size: 40px;
  height: 80px; /* Set a fixed height for the header */
  padding-left: 20px; /* Add left padding */
}

.description {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  border: 2px solid #1c978f;
  border-radius: 5px;
  background-color: #deb992; /* Red background color */
  color: #1d8881; /* White text color */
  width: calc(100%-40px);
  padding: 20px; /* Add padding for better visual appearance */
  margin: 20px;
  font-size: 20px;
  font-weight: 1000;
}
</style>
