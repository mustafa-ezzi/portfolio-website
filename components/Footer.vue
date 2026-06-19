<template>
  <footer id="footer" class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#hero" class="brand">
            <span class="brand-mark">MM</span>
            <span class="brand-name">Mustafa Moiz</span>
          </a>
          <p class="brand-tagline">
            Full-Stack Developer crafting scalable, high-performance digital experiences.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <span class="nav-title">Explore</span>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#code-quiz">Playground</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="footer-social">
          <span class="nav-title">Connect</span>
          <div class="social-row">
            <a
              href="https://github.com/mustafa-ezzi"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.62 8.21 11.18.6.11.82-.25.82-.57v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.3-5.47-5.78 0-1.28.47-2.32 1.24-3.14-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.52 3.29-1.2 3.29-1.2.66 1.65.25 2.87.12 3.17.78.82 1.24 1.86 1.24 3.14 0 4.49-2.81 5.48-5.49 5.77.43.36.81 1.08.81 2.18v3.24c0 .32.21.69.82.57A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-moiz-5a0466273/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a
              href="mailto:mustafaezzi143@gmail.com"
              class="social-btn"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a
              href="https://wa.me/923363399445"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48a11.8 11.8 0 0 0-16.71 0 11.8 11.8 0 0 0-2.89 12.38L.33 23.48l7.83-1.93a11.79 11.79 0 0 0 5.63 1.44h.05c6.55 0 11.86-5.31 11.86-11.86a11.8 11.8 0 0 0-3.18-8.65zm-8.36 17.52a9.78 9.78 0 0 1-4.91-1.34l-.35-.21-4.65 1.15 1.24-4.52-.23-.37a9.79 9.79 0 0 1 1.6-12 9.76 9.76 0 0 1 13.83 0 9.76 9.76 0 0 1 0 13.83 9.76 9.76 0 0 1-6.53 2.46z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-text">
          &copy; {{ new Date().getFullYear() }} <span class="name-glow">Mustafa Moiz</span>. All rights reserved.
        </p>
        <p class="footer-built">Built with Nuxt &amp; Vue.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #0b1220;
  color: #cbd5e1;
  padding: 72px 24px 32px;
}

.footer-inner {
  max-width: var(--container);
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #00bfa6, #0070ff);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
}

.brand-name {
  color: #f8fafc;
  font-weight: 800;
  font-size: 1.1rem;
}

.brand-tagline {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 360px;
  margin: 0;
}

/* Nav columns */
.nav-title {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #64748b;
  font-weight: 700;
  margin-bottom: 18px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 500;
  width: fit-content;
  transition: color 0.25s ease, transform 0.25s ease;
}

.footer-nav a:hover {
  color: #00bfa6;
  transform: translateX(4px);
}

/* Social */
.social-row {
  display: flex;
  gap: 12px;
}

.social-btn {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-btn:hover {
  background: #00bfa6;
  border-color: #00bfa6;
  color: #0b1220;
  transform: translateY(-4px);
}

/* Bottom bar */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 28px;
}

.footer-text {
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0;
}

.name-glow {
  color: #00bfa6;
  font-weight: 700;
}

.footer-built {
  font-size: 0.85rem;
  color: #475569;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .footer-bottom {
    justify-content: center;
    text-align: center;
  }
}
</style>
