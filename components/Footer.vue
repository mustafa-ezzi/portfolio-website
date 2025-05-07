<template>
    <footer id="footer" class="footer">
      <!-- <div class="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="icon-button"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" width="24" height="24" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          class="icon-button"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" width="24" height="24" />
        </a>
      </div> -->
      <p class="footer-text">
        &copy; {{ new Date().getFullYear() }} <span class="name-glow">Mustafa Ezzi</span>. All rights reserved.
      </p>
    </footer>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue'
  </script>
  
  <style scoped>
  .footer {
    background-color: #0f2027;
    color: #e0e0e0;
    padding: 2rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-links {
    display: flex;
    gap: 16px;
    margin-bottom: 1rem;
  }
  
  .icon-button {
    background-color: #1abc9c;
    padding: 10px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, background-color 0.3s ease;
    color: #ffffff;
  }
  
  .icon-button:hover {
    transform: scale(1.1);
    background-color: #16a085;
  }
  
  .footer-text {
    font-size: 0.875rem;
    color: #aaa;
  }
  
  .name-glow {
    color: #1abc9c;
    font-weight: bold;
    text-shadow: 0 0 5px #1abc9c, 0 0 10px #1abc9c;
  }
  </style>
  