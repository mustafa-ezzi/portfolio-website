<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="image-wrapper" :class="{ 'reveal': isVisible }">
        <div class="image-inner">
          <img src="/github.jpg" alt="Mustafa Moiz Profile" class="profile-image" />
          <div class="experience-badge">
            <span class="years">4+</span>
            <span class="label">Years Exp.</span>
          </div>
        </div>
      </div>

      <div class="about-content" :class="{ 'reveal': isVisible }">
        <h2 class="about-title">About Me</h2>
        
        <p class="about-description">
          I'm a <strong>Full-Stack Developer</strong> who thrives at the intersection of clean design and scalable systems. 
          I don't just write code; I build digital products that solve real problems.
        </p>

        <div class="skill-groups">
          <div class="skill-category">
            <h4><span class="icon"></span> Languages</h4>
            <div class="chips">
              <span v-for="lang in ['JavaScript', 'TypeScript', 'Python', 'Go']" :key="lang" class="chip">
                {{ lang }}
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h4><span class="icon"></span> Tech Stack</h4>
            <div class="chips">
              <span v-for="tech in ['Vue', 'Nuxt', 'Angular', 'React', 'Tailwind', 'Django', 'WordPress', 'Bubble.io']" :key="tech" class="chip outline">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="cta-wrapper">
          <a href="/CV.pdf" download @click.prevent="downloadCV" class="download-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download CV
          </a>
        </div>
      </div>

      <Transition name="slide-fade">
        <div v-if="snackbarVisible" class="snackbar">
          <span class="check-icon">✓</span> CV Downloaded Successfully
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const snackbarVisible = ref(false)

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/CV.pdf'
  link.download = 'Mustafa_Moiz_CV.pdf'
  link.click()

  snackbarVisible.value = true
  setTimeout(() => { snackbarVisible.value = false }, 3000)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.2 })

  const section = document.getElementById('about')
  if (section) observer.observe(section)
})
</script>

<style scoped>
.about-section {
  background-color: #0f172a; /* Deep Slate */
  padding: 120px 10%;
  color: #f8fafc;
  overflow: hidden;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: center;
}

/* Image Styling */
.image-inner {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.profile-image {
  width: 320px;
  height: 320px;
  border-radius: 24px;
  object-fit: cover;
  filter: grayscale(20%);
  transition: all 0.5s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-inner::after {
  content: "";
  position: absolute;
  inset: -15px;
  border: 2px solid #00bfa6;
  border-radius: 30px;
  z-index: -1;
  opacity: 0.3;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: #00bfa6;
  color: #0f172a;
  padding: 15px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 191, 166, 0.4);
}

.experience-badge .years { font-size: 1.5rem; font-weight: 800; line-height: 1; }
.experience-badge .label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }

/* Content Styling */
.about-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #00bfa6, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-description {
  font-size: 1.15rem;
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.skill-category {
  margin-bottom: 2rem;
}

.skill-category h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 8px 16px;
  background: rgba(0, 191, 166, 0.1);
  color: #00bfa6;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(0, 191, 166, 0.2);
  transition: all 0.3s ease;
}

.chip.outline {
  background: transparent;
  color: #e2e8f0;
  border-color: rgba(226, 232, 240, 0.2);
}

.chip:hover {
  background: #00bfa6;
  color: #0f172a;
  transform: translateY(-3px);
}

/* Download Button */
.download-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  padding: 16px 32px;
  background: #00bfa6;
  color: #0f172a;
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.download-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 191, 166, 0.2);
}

/* Snackbar */
.snackbar {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  border: 1px solid #00bfa6;
  padding: 16px 32px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  z-index: 1000;
}

/* Entrance Animations */
.image-wrapper, .about-content {
  opacity: 0;
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.image-wrapper { transform: translateX(-60px); }
.about-content { transform: translateX(60px); }

.reveal {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

/* Transitions */
.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.4s ease; }
.slide-fade-enter-from { opacity: 0; transform: translate(-50%, 20px); }

@media (max-width: 968px) {
  .about-container { grid-template-columns: 1fr; gap: 60px; }
  .about-title { font-size: 2.2rem; }
  .profile-image { width: 280px; height: 280px; }
}
</style>