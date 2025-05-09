<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="image-wrapper" :class="{ 'fade-in-left': imageVisible }">
        <img src="/github.jpg" alt="Profile" class="profile-image" />
      </div>
      <div class="about-content" :class="{ 'fade-in-right': contentVisible }">
        <h2 class="about-title"> About Me</h2>
        <p class="about-text">
          I'm a <strong>Full-Stack Developer</strong> who thrives on clean UI, scalable systems, and a pixel-perfect finish.
          Whether it’s building reactive UIs or designing modular backends, I enjoy solving real-world problems with tech.
        </p>
        <p class="about-text">
          ✨ <strong>Languages:</strong> JavaScript, TypeScript, Python, Go
        </p>
        <p class="about-text">
          🧰 <strong>Frameworks & Tools:</strong> Vue, Nuxt,Angular, React, TailwindCSS, Django, WordPress, Bubble.io
        </p>
        <p class="about-text">
          📈 Passionate about system design, low-code platforms, and creating intuitive web experiences.
        </p>
        <a href="/CV.pdf" download   @click.prevent="downloadCV" class="download-button">
  📥 Download CV
</a>
      </div>
      <div v-if="snackbarVisible" class="snackbar">
      📄 CV downloaded successfully!
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const imageVisible = ref(false)
const contentVisible = ref(false)
const snackbarVisible = ref(false)

const downloadCV = () => {
  // Trigger browser download
  const link = document.createElement('a')
  link.href = '/CV.pdf'
  link.download = 'Mustafa_Moiz_CV.pdf'
  link.click()

  // Show snackbar
  snackbarVisible.value = true

  // Auto-hide after 3 seconds
  setTimeout(() => {
    snackbarVisible.value = false
  }, 3000)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageVisible.value = true
          contentVisible.value = true
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = document.getElementById('about')
  if (section) observer.observe(section)
})

</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary, #b2fefa);
  color: var(--color-bg, #0a1e2d);
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  animation: fadeSlideUp 0.4s ease-out;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.about-section {
  background-color: var(--color-bg, #121c24);
  padding: 100px 20px;
  color: var(--color-text-light, #ffffff);
  display: flex;
  justify-content: center;
}

.about-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1100px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  flex: 1 1 280px;
  text-align: center;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1.5s ease-out;
}

.profile-image {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary, #00bfa6);
  box-shadow: 0 12px 24px rgba(0, 191, 166, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.08);
}

.about-content {
  flex: 2;
  opacity: 0;
  transform: translateX(50px);
  transition: all 1.5s ease-out;
}

.about-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 25px;
  color: var(--color-primary, #00bfa6);
  background: -webkit-linear-gradient(#00bfa6, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.75;
  margin-bottom: 16px;
  color: var(--color-muted, #cbd5e1);
}

.resume-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  border: 2px solid var(--color-primary, #00bfa6);
  color: var(--color-primary, #00bfa6);
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.4s ease;
}

.resume-button:hover {
  background: var(--color-accent, #ffbfa3);
  border-color: var(--color-accent, #ffbfa3);
  color: var(--color-bg, #121c24);
}

/* Animation classes */
.fade-in-left {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.fade-in-right {
  opacity: 1 !important;
  transform: translateX(0) !important;
}
.download-button {
  display: inline-block;
  padding: 12px 24px;
  background: var(--color-primary, #b2fefa);
  color: var(--color-bg, #0a1e2d);
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.download-button:hover {
  background: var(--color-accent, #f1c40f);
  color: var(--color-bg, #0a1e2d);
  transform: translateY(-2px);
}


/* Mobile styles */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }

  .about-content {
    padding-top: 30px;
  }
}

</style>
