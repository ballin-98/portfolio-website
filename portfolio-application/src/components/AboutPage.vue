<template>
  <div class="container" id="about-page">
    <div class="left-container">
      <img src="/assets/alex.jpeg" alt="Your Image" />
    </div>
    <div class="right-container">
      <div class="header">ABOUT</div>
      <div class="one-word">
        {{}}
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const description = `Dynamic professional, recent graduate in Computer Science from the University of Alberta, 
  with a passion for optimizing applications and crafting sophisticated solutions Based in Edmonton, Canada, 
  I am an enthusiastic developer dedicated to bringing futuristic web development and design expertise. 
  Specializing in next-level websites and web applications  with a strong emphasis on creative problem-solving and user-centric solutions.`;

const words = ["Developer", "Problem Solver", "Fitness Enthusiast"];
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
  background-color: #889eb3; /* Placeholder background color for the right container */
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
  border: 2px solid #e74c3c; /* Red border */
  border-radius: 5px;
  background-color: #e74c3c; /* Red background color */
  color: #fff; /* White text color */
  width: calc(100%-40px);
  padding: 20px; /* Add padding for better visual appearance */
  margin: 20px;
  font-size: 20px;
}
</style>
