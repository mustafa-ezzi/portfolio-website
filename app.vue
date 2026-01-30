<template>
  <div class="bg-white text-dark font-sans">
    <div v-if="!selectedProject">
      <Hero />
      <About />
      <Projects @view-details="openProject" />
      <Contact />
      <GameSection />
    </div>

    <div v-else>
      <ProjectDetail :project="selectedProject" @back="closeProject" />
    </div>

    <Whatsapp />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Whatsapp from './components/Whatsapp.vue'
import ProjectDetail from './components/ProjectDetail.vue' // You'll create this

const selectedProject = ref(null)

const openProject = (project) => {
  selectedProject.value = project
  window.scrollTo(0, 0) // Scroll to top when opening
}

const closeProject = () => {
  selectedProject.value = null
  // Optional: Wait for DOM to render then scroll back to projects section
  setTimeout(() => {
    document.getElementById('projects')?.scrollIntoView()
  }, 10)
}
</script>