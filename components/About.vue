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
        <a href="/cv.pdf" target="_blank" class="resume-button">📄 View Resume</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const imageVisible = ref(false)
const contentVisible = ref(false)

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
