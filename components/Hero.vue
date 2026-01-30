<template>
  <section id="hero" class="hero" @mousemove="updateCursor" @mouseleave="hideCursor">
    <div class="grid-pattern"></div>
    <div class="cursor-glow" :style="glowStyle"></div>
    
    <div class="hero-content">
      <div class="badge fade-in">Available for new opportunities</div>
      
      <h1 class="headline">
        <span class="text-reveal">Hi, I'm <span class="gradient-name">Mustafa Moiz</span></span>
        <br />
        <span class="subtitle">Crafting digital experiences.</span>
      </h1>
      
      <p class="intro-text">
        I’m a <strong>Full-Stack Developer</strong> specializing in building 
        high-performance web applications with React, Node.js, and modern cloud architecture.
      </p>

      <div class="button-group">
        <a @click="scrollToProject" class="filled-button">
          View Projects
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
        <button class="outlined-button" @click="scrollToAbout">About Me</button>
      </div>
    </div>

    <div class="scroll-indicator">
      <span class="line"></span>
      <span class="text">SCROLL</span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const isVisible = ref(0)

const glowStyle = computed(() => ({
  transform: `translate3d(calc(${mouseX.value}px - 50%), calc(${mouseY.value}px - 50%), 0)`,
  opacity: isVisible.value
}))

const updateCursor = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  isVisible.value = 1
}

const hideCursor = () => {
  isVisible.value = 0
}

const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
const scrollToProject = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.hero {
  font-family: 'Inter', sans-serif;
  position: relative;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
}

/* Subgrid pattern for a tech look */
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  opacity: 0.5;
}

.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 191, 166, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  transition: opacity 0.5s ease;
  will-change: transform;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(0, 191, 166, 0.1);
  color: #00bfa6;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05rem;
}

.headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #111827;
  letter-spacing: -0.02em;
}

.gradient-name {
  background: linear-gradient(135deg, #00bfa6, #0070ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #6b7280;
  font-weight: 700;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 2rem 0;
  color: #4b5563;
  max-width: 580px;
}

.button-group {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.filled-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #111827;
  color: white;
  padding: 16px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.filled-button:hover {
  background: #00bfa6;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 191, 166, 0.3);
}

.outlined-button {
  background: transparent;
  color: #111827;
  padding: 16px 28px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.outlined-button:hover {
  background: #f9fafb;
  border-color: #111827;
}

/* Animations */
.hero-content > * {
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}

.hero-content > *:nth-child(1) { animation-delay: 0.1s; }
.hero-content > *:nth-child(2) { animation-delay: 0.2s; }
.hero-content > *:nth-child(3) { animation-delay: 0.3s; }
.hero-content > *:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.scroll-indicator .text {
  writing-mode: vertical-lr;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: #9ca3af;
}

.scroll-indicator .line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #00bfa6, transparent);
}

@media (max-width: 768px) {
  .hero { padding: 0 5%; }
  .button-group { flex-direction: column; align-items: stretch; }
  .scroll-indicator { display: none; }
}
</style>