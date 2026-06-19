<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg-glow"></div>

    <div class="contact-container">
      <div class="contact-card">
        <div class="contact-header">
          <span class="pre-title">Ready to start a project?</span>
          <h2 class="contact-title">Get In Touch</h2>
          <p class="contact-description">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <div class="contact-methods">
          <a href="mailto:mustafaezzi143@gmail.com" class="method-card">
            <div class="method-icon email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div class="method-info">
              <span class="method-label">Email Me</span>
              <span class="method-value">mustafaezzi143@gmail.com</span>
            </div>
          </a>

          <a href="tel:+923363399445" class="method-card">
            <div class="method-icon phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="method-info">
              <span class="method-label">Call/WhatsApp</span>
              <span class="method-value">+92 336 3399445</span>
            </div>
          </a>
        </div>

        <div class="social-links">
          <p>Or find me on social media</p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/mustafa-moiz-5a0466273/" class="social-btn">LinkedIn</a>
            <a href="https://github.com/mustafa-ezzi" class="social-btn">GitHub</a>
            <!-- <a href="#" class="social-btn">Twitter</a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  padding: 120px 0 40px;
  background-color: #0f172a;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 191, 166, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.contact-container {
  max-width: 800px;
  width: 90%;
  z-index: 2;
}

.contact-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 60px 40px;
  text-align: center;
}

.pre-title {
  color: #00bfa6;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 15px 0 25px;
}

.contact-description {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 50px;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.method-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  text-align: left;
}

.method-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #00bfa6;
  transform: translateY(-5px);
}

.method-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 191, 166, 0.1);
  color: #00bfa6;
}

.method-label {
  display: block;
  font-size: 0.8rem;
  color: #64748b;
  text-transform: uppercase;
  font-weight: 700;
}

.method-value {
  font-size: 1rem;
  font-weight: 600;
  word-break: break-all;
}

.social-links p {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-btn {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.social-btn:hover {
  color: #00bfa6;
}

@media (max-width: 768px) {
  .contact-card { padding: 40px 20px; }
  .contact-title { font-size: 2.2rem; }
  .contact-methods { grid-template-columns: 1fr; }
}
</style>