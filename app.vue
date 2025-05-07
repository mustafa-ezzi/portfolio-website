<template>
  <div class="bg-white text-dark font-sans">
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Mustafa Moiz | Developer',
  meta: [
    { name: 'description', content: 'This is my personal developer portfolio.' }
  ]
})
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
