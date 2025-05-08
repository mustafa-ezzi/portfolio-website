<template>
  <section id="hero" class="hero" @mousemove="updateCursor" @mouseleave="hideCursor">
    <div class="cursor-glow" :style="glowStyle"></div>

    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="headline">
        Hi, I'm <span class="gradient-name">Mustafa Moiz</span><br />
        <span class="subtitle">Full-Stack Developer</span>
      </h1>
      <p class="intro-text">
        I build modern web apps that are fast, responsive, and scalable using Vue, Node.js & more.
      </p>
      <div class="button-group">
        <button class="outlined-button" @click="scrollToAbout">Know More</button>
        <a @click="scrollToProject" class="filled-button">View Projects</a>
      </div>
    </div>
  </section>
</template>

  
<script setup>
import { ref } from 'vue'

const glowStyle = ref({
  top: '-10px',
  left: '0px',
  opacity: 0
})

const updateCursor = (e) => {
  glowStyle.value = {
    top: `${e.clientY}px`,
    left: `${e.clientX}px`,
    opacity: 1
  }
}

const hideCursor = () => {
  glowStyle.value.opacity = 0
}

const scrollToAbout = () => {
  const about = document.getElementById("about")
  if (about) about.scrollIntoView({ behavior: "smooth" })
}
const scrollToProject = () => {
  const projects = document.getElementById("projects")
  if (projects) projects.scrollIntoView({ behavior: "smooth" })
}
</script>

  
  <style scoped>
  .hero {
    position: relative;
    height: 100vh;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(135deg, #ffffff, #f4f7f9);
    overflow: hidden;
  }
  .cursor-glow {
  position: fixed;
  pointer-events: none;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 191, 166, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: top 0.15s ease, left 0.15s ease, opacity 0.3s ease;
}
  .hero-overlay::before {
    content: "";
    position: absolute;
    /* top: -50px; */
    right: -50px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, #00bfa6 0%, transparent 70%);
    opacity: 0.15;
    border-radius: 50%;
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    animation: fadeInUp 1.2s ease-out;
    max-width: 700px;
  }
  
  .headline {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.3;
    color: #221c3b;
    margin-bottom: 1rem;
  }
  
  .gradient-name {
    background: linear-gradient(90deg, #00bfa6, #00a6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
  
  .subtitle {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-top: 0.5rem;
  }
  
  .intro-text {
    font-size: 1.1rem;
    margin: 1rem 0 2rem;
    color: #555;
    max-width: 500px;
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .outlined-button,
  .filled-button {
    padding: 12px 22px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
    display: inline-block;
  }
  
  .outlined-button {
    background: transparent;
    color: #00bfa6;
    border: 2px solid #00bfa6;
  }
  
  .outlined-button:hover {
    background-color: #00bfa6;
    color: white;
  }
  
  .filled-button {
    background: #00bfa6;
    color: white;
    border: 2px solid transparent;
  }
  
  .filled-button:hover {
    background: #00a98f;
  }
  
  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .headline {
      font-size: 2.4rem;
    }
  
    .subtitle {
      font-size: 1.5rem;
    }
  
    .intro-text {
      font-size: 1rem;
    }
  }
  </style>
  