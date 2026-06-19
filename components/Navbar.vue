<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="brand" @click="closeMenu">
        <span class="brand-mark">MM</span>
        <span class="brand-name">Mustafa Moiz</span>
      </a>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="nav-cta" @click="closeMenu">Hire Me</a>
      </nav>

      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'code-quiz', label: 'Playground' },
  { id: 'contact', label: 'Contact' }
]

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 24

  const offset = window.innerHeight * 0.35
  let current = activeSection.value
  for (const link of links) {
    const el = document.getElementById(link.id)
    if (el && el.getBoundingClientRect().top <= offset) {
      current = link.id
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 30px rgba(15, 23, 42, 0.04);
}

.nav-inner {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #00bfa6, #0070ff);
  color: #fff;
  font-size: 1rem;
  letter-spacing: -0.5px;
  box-shadow: 0 6px 16px rgba(0, 191, 166, 0.3);
}

.brand-name {
  color: var(--color-heading);
  font-size: 1.05rem;
  letter-spacing: -0.02em;
}

/* Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  position: relative;
  padding: 8px 14px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-text);
  border-radius: 8px;
  transition: color 0.25s ease, background 0.25s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 2px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-link:hover {
  color: var(--color-heading);
}

.nav-link.active {
  color: var(--color-accent);
}

.nav-link.active::after {
  transform: scaleX(1);
}

.nav-cta {
  margin-left: 8px;
  padding: 10px 20px;
  background: var(--color-heading);
  color: #fff;
  font-size: 0.92rem;
  font-weight: 700;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-cta:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 191, 166, 0.3);
}

/* Mobile toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  cursor: pointer;
  padding: 0 11px;
}

.nav-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--color-heading);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 860px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 16px 24px 24px;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    padding: 14px 12px;
    font-size: 1rem;
    border-bottom: 1px solid #f1f5f9;
    border-radius: 0;
  }

  .nav-link::after {
    display: none;
  }

  .nav-cta {
    margin: 12px 0 0;
    text-align: center;
  }
}

@media (max-width: 420px) {
  .brand-name {
    display: none;
  }
}
</style>
