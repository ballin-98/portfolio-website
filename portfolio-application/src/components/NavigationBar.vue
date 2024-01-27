<template>
  <div class="nav-bar-container">
    <div class="left-container">
      <a @click="doSomething">
        <div class="left-container-link">ABOUT</div>
      </a>
      <a href="#project-page">
        <div class="left-container-link">PROJECTS</div>
      </a>
    </div>
    <div class="center-container">
      <div class="logo">Alex Bali</div>
    </div>
    <div class="right-container">
      <div class="image-container">
        <a target="_blank" href="https://www.linkedin.com/in/alex-bali/">
          <img src="/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="image-container">
        <a target="_blank" href="https://github.com/ballin-98">
          <img src="/assets/github.svg" alt="" />
        </a>
      </div>
      <div class="image-container">
        <a href="mailto:your-alexbali189@gmail.com">
          <img src="/assets/mail.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const doSomething = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style scoped>
.nav-bar-container {
  background-color: #ff2e63;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto Mono", monospace;
}

.left-container {
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center;
}
.left-container a {
  text-decoration: none;
}

.left-container-link {
  font-size: 24px;
  color: rgb(0, 0, 0);
  padding: 10px;
  margin: 0px 5px;
}

.left-container-link:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Add a subtle box-shadow effect */
  cursor: pointer;
}

.center-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  color: rgb(0, 0, 0);
  margin: auto;
  border: 1px solid rgb(0, 0, 0);
}

.logo {
  margin: auto;
  font-size: 28px;
  font-weight: 600;
}

.right-container {
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center; /* Center vertically */
  justify-content: flex-end;
}

.image-container {
  height: 50%;
  display: flex;
  align-items: center; /* Center vertically */
  padding: 10px;
  margin: 0px 5px;
}

.image-container img {
  height: 32px;
}
.image-container a {
  font-style: none;
}

.image-container:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Add a subtle box-shadow effect */
}

/* Styles for small screens */
@media only screen and (max-width: 800px) {
  .center-container {
    display: none;
  }
  .left-container {
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center;
  }

  .left-container-link {
    font-size: 20px;
    color: white;
  }

  .left-container-link:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Add a subtle box-shadow effect */
    cursor: pointer;
  }
  .right-container {
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center; /* Center vertically */
    justify-content: flex-end;
  }

  .image-container {
    height: 50%;
    display: flex;
    align-items: center; /* Center vertically */
  }
  @media only screen and (max-width: 400px) {
    .center-container {
      display: none;
    }
    .left-container {
      display: flex;
      flex-direction: row;
      width: 100px;
      align-items: center;
    }

    .left-container-link {
      font-size: 14px;
      color: white;
    }
    .right-container {
      display: flex;
      flex-direction: row;
      width: 100px;
      align-items: center; /* Center vertically */
      justify-content: flex-end;
    }

    .image-container {
      height: 50%;
      display: flex;
      align-items: center; /* Center vertically */
    }
    .image-container img {
      height: 24px;
    }
  }
}
</style>
