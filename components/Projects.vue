<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">A showcase of my recent work and digital experiences</p>

      <swiper
        :modules="[Navigation, Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }"
        navigation
        class="project-swiper"
      >
        <swiper-slide v-for="(project, index) in projects" :key="index">
          <div class="project-card" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
            <div class="image-wrapper">
              <img
                :src="project.href"
                :alt="project.title"
                class="project-image"
              />
              <div class="image-overlay" :class="{ active: hoveredIndex === index }">
                <a v-if="project.link" :href="project.link" class="view-project" target="_blank" rel="noopener">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-footer">
                <span class="project-type">{{ project.type || 'Web Application' }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ptp from '@/assets/ptp.png'
import sooicy from '@/assets/sooicy.png'
import invoice from '@/assets/invoice.png'

import auction from "../assets/auction.png"
import erp from "../assets/erp.png"
import trisite from "../assets/trisite.png"
import QJ from "../assets/qj.png"
import { ref, onMounted } from 'vue'
import SwiperCore from 'swiper'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

SwiperCore.use([Navigation, Autoplay, Pagination])

const hoveredIndex = ref(null)

const projects = [
  {
    title: "Invoice Management System",
description: "A full-featured invoice and quotation management system built with React and Node.js. Streamlines creation, tracking, and management of quotations and invoices, providing a smooth and efficient workflow for businesses.",
    type: "Invoice System",
    href: invoice,
  },
  {
    title: "SooIcy",
    description: "A fully custom digital platform for an ice-cream parlour featuring a sleek React frontend and Python backend. Delivers smooth product browsing, order flow, and a full admin panel.",
    type: "E-Commerce",
    href: sooicy,
  },
  {
    title: "Predict the Pick",
    description: "Real-time sports app with live scores, player stats, and personalized notifications. Built with Vue.js, Nuxt.js, and Firebase for seamless data synchronization.",
    link: "https://predictpick.web.app",
    type: "Sports App",
    href: ptp,
  },
  {
    title: "Auction Pro",
    description: "Cricket tournament auction app streamlining player auctions with Vue.js and Django. Designed for efficiency and an interactive user experience.",
    link: "https://www.worldofqj.com/",
    type: "Auction Platform",
    href: auction
  },
  {
    title: "ERP System",
    description: "Comprehensive business management platform built with Angular and Python. Optimized for large datasets with advanced caching and pagination.",
    type: "Enterprise",
    href: erp
  },
  {
    title: "Trisite Solutions",
    description: "Modern, responsive agency website built with Nuxt.js and Tailwind CSS. Fast, dynamic, and fully responsive across all devices.",
    link: "https://www.trisitesolutions.com/",
    type: "Corporate Site",
    href: trisite
  },
  {
    title: "QJ Challenges",
    description: "Interactive quiz app built with React.js and Django. Test knowledge across various categories while tracking progress and achievements.",
    type: "Education",
    href: QJ
  },
]
</script>

<style scoped>
.projects-section {
  background: #f8f9fa;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #00bfa6, transparent);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 4rem;
  font-weight: 400;
}

.project-swiper {
  padding-bottom: 4rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 191, 166, 0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 191, 166, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay.active {
  opacity: 1;
}

.view-project {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: white;
  color: #00bfa6;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.view-project:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.view-project svg {
  transition: transform 0.3s ease;
}

.view-project:hover svg {
  transform: translate(2px, -2px);
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.project-type {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #00bfa6, #00d4b8);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Swiper Navigation Customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 18px;
  font-weight: 900;
  color: #00bfa6;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #00bfa6;
  transform: scale(1.1);
}

:deep(.swiper-button-next:hover::after),
:deep(.swiper-button-prev:hover::after) {
  color: white;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #ccc;
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: #00bfa6;
  width: 28px;
  border-radius: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  
  .image-wrapper {
    height: 220px;
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .project-description {
    font-size: 0.9rem;
    -webkit-line-clamp: 3;
  }
}
</style>