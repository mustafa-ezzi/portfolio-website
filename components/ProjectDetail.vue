<template>
  <section class="project-detail">
    <div class="glow-blob"></div>
    <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>

    <div class="container">
      <nav class="detail-nav">
        <button @click="$emit('back')" class="back-btn" aria-label="Go back">
          <div class="btn-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <span class="back-text">Back to Gallery</span>
        </button>
      </nav>

      <div class="detail-grid">
        <div class="image-column">
          <div class="image-card">
            <img :src="project.href" :alt="project.title" class="main-img" />
            <div class="glass-overlay"></div>
          </div>
          
          <div class="stats-grid">
            <div class="stat-box">
              <span class="stat-label">Category</span>
              <span class="stat-value">{{ project.type }}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Role</span>
              <span class="stat-value">Full Stack Dev</span>
            </div>
          </div>
        </div>

        <div class="info-column">
          <div class="sticky-info">
            <div class="project-header">
              <div class="meta-info">
                <span class="id-badge">#{{ project.id.slice(0,3).toUpperCase() }}</span>
                <span class="separator"></span>
                <span class="year-text">2026</span>
              </div>
              <h1 class="title">{{ project.title }}</h1>
            </div>
            
            <div class="content-section">
              <h3 class="section-label">Overview</h3>
              <p class="description">{{ project.description }}</p>
            </div>

            <div class="content-section">
              <h3 class="section-label">Infrastructure</h3>
              <div class="tech-wrap">
                <span v-for="tech in project.tags" :key="tech" class="tech-card">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="cta-section">
              <a v-if="project.link" :href="project.link" target="_blank" class="launch-btn">
                <span>View Live Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <div v-else class="locked-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Enterprise Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="detail-footer">
        <div class="footer-line"></div>
        <div class="next-up-container">
          
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['project', 'allProjects'])
const emit = defineEmits(['back', 'switch-project'])

const scrollPercent = ref(0)
const updateScroll = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollPercent.value = (winScroll / height) * 100
}

onMounted(() => window.addEventListener('scroll', updateScroll))
onUnmounted(() => window.removeEventListener('scroll', updateScroll))

const handleNext = () => {
  const currentIndex = props.allProjects.findIndex(p => p.id === props.project.id)
  const nextIndex = (currentIndex + 1) % props.allProjects.length
  emit('switch-project', props.allProjects[nextIndex])
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* FIX 1: Root protection against horizontal scrolling */
.project-detail {
  min-height: 100vh;
  background: #ffffff;
  padding: 20px 0 60px;
  position: relative;
  color: #0f172a;
  overflow-x: hidden; /* Prevents X-axis scroll */
}

.scroll-progress {
  position: fixed;
  top: 0; left: 0;
  height: 4px;
  background: linear-gradient(to right, #00bfa6, #2dd4bf);
  z-index: 1000;
}

.glow-blob {
  position: absolute;
  top: -5%; right: -10%;
  width: 40vw; height: 40vw;
  background: radial-gradient(circle, rgba(0, 191, 166, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Nav */
.detail-nav { margin-bottom: 40px; }
.back-btn {
  display: flex; align-items: center; gap: 12px;
  background: none; border: none; cursor: pointer;
  color: #64748b; font-weight: 700;
  text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px;
}
.btn-circle {
  width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid #e2e8f0; display: flex;
  align-items: center; justify-content: center;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.back-btn:hover .btn-circle {
  background: #0f172a; color: #fff; transform: translateX(-4px);
}

/* Grid Layout */
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Image Side */
.image-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  position: relative;
}
.main-img { width: 100%; height: auto; display: block; }
.glass-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(15,23,42,0.05), transparent);
}

.stats-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 20px; margin-top: 25px;
}
.stat-box {
  padding: 15px; border-radius: 12px;
  background: #f8fafc; border: 1px solid #f1f5f9;
}
.stat-label { display: block; font-size: 0.65rem; text-transform: uppercase; color: #94a3b8; font-weight: 800; }
.stat-value { font-weight: 700; color: #1e293b; font-size: 0.85rem; }

/* Info Side */
.sticky-info { position: sticky; top: 40px; }
.meta-info { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.id-badge { font-family: monospace; color: #00bfa6; font-weight: 700; }
.separator { width: 30px; height: 1px; background: #cbd5e1; }
.year-text { font-size: 0.8rem; color: #94a3b8; font-weight: 600; }

/* FIX 2: Responsive Title font sizes to prevent X-scroll */
.title {
  font-size: clamp(2.5rem, 5vw, 4rem); 
  font-weight: 800; letter-spacing: -2px; line-height: 1;
  margin-bottom: 30px;
}

.section-label { font-size: 0.75rem; text-transform: uppercase; color: #0f172a; font-weight: 900; margin-bottom: 10px; }
.content-section { margin-bottom: 30px; }
.description { font-size: 1.05rem; line-height: 1.6; color: #475569; }

.tech-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
.tech-card {
  padding: 6px 14px; background: #0f172a; color: #fff;
  border-radius: 6px; font-size: 0.8rem; font-weight: 600;
}

.launch-btn {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  background: #00bfa6; color: white; padding: 16px 24px;
  border-radius: 12px; text-decoration: none; font-weight: 700; transition: 0.3s;
}
.launch-btn:hover { background: #0f172a; transform: translateY(-2px); }

.locked-btn {
  display: flex; align-items: center; gap: 10px;
  color: #94a3b8; font-weight: 600; font-size: 0.9rem;
}

/* Footer Case Study link */
.detail-footer { margin-top: 60px; padding-bottom: 40px; }
.footer-line { height: 1px; background: #f1f5f9; margin-bottom: 30px; }
.next-up-container { text-align: center; }
.next-hint { font-size: 0.75rem; text-transform: uppercase; color: #94a3b8; font-weight: 800; margin-bottom: 5px; }
.next-project-btn {
  background: none; border: none; cursor: pointer;
  font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; color: #0f172a;
  display: inline-flex; align-items: center; gap: 15px; transition: 0.3s;
}
.next-project-btn:hover { color: #00bfa6; transform: translateY(-5px); }

/* RESPONSIVE BREAKPOINTS */
@media (max-width: 968px) {
  .detail-grid { grid-template-columns: 1fr; gap: 40px; }
  .sticky-info { position: static; }
  .image-column { order: 2; }
  .info-column { order: 1; }
  .title { margin-bottom: 20px; }
}

@media (max-width: 480px) {
  .container { padding: 0 15px; }
  .back-text { display: none; } /* Hide text on small mobile, keep icon */
  .stats-grid { grid-template-columns: 1fr; }
  .next-project-btn { font-size: 1.5rem; }
  .arrow-icon { width: 24px; height: 24px; }
}
</style>