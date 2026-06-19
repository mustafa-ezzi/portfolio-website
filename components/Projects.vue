<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="header-content">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A showcase of my recent work and digital experiences</p>
      </div>

      <swiper
        :modules="[Navigation, Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 25 },
          1200: { slidesPerView: 3, spaceBetween: 35 }
        }"
        navigation
        class="project-swiper"
      >
        <swiper-slide v-for="(project, index) in projects" :key="index">
          <div class="project-card">
            <div class="image-container">
              <img :src="project.href" :alt="project.title" class="project-image" />
             <div class="overlay-glass">
  <div class="button-stack">
    <button @click="$emit('view-details', project)" class="action-btn detail-btn">
      Case Study
    </button>
    
    <a v-if="project.link" :href="project.link" class="action-btn demo-btn" target="_blank">
      Live Demo
    </a>
  </div>
</div>
            </div>
            
            <div class="project-body">
              <div class="type-tag">{{ project.type || 'Web Application' }}</div>
              <h3 class="project-name">{{ project.title }}</h3>
              <p class="project-info">{{ project.description }}</p>
              
              <div class="tech-stack">
                <span v-for="tech in project.tags" :key="tech" class="tech-pill">{{ tech }}</span>
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
import { Navigation, Autoplay, Pagination } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ptp from '@/assets/ptp.png'
import sooicy from '@/assets/sooicy.png'
import invoice from '@/assets/invoice.png'
import auction from "../assets/auction.png"
import coreledger from "../assets/coreledger.png"
import trisite from "../assets/trisite.png"
import QJ from "../assets/qj.png"
import CyberShield from "../assets/cybersheild.png"

defineEmits(['view-details'])
const projects = [
  {
    id: "cybershield",
    title: "CyberShield",
    description: "CyberShield is a comprehensive security awareness and training platform designed to educate individuals and organizations about modern cyber threats. It uses realistic scam simulations, interactive scenarios, and guided learning modules to help users recognize phishing attempts, social engineering attacks, and online fraud, ultimately building stronger cyber safety habits.",
    link: "https://cybershield-rotary.vercel.app/",
    type: "Educational Awareness (Rotary)",
    href: CyberShield,
    tags: ["React", "Tailwind"]
  },
  {
    id: "invoice",
    title: "Invoice Management System",
    description: "A full-featured SaaS-based invoice and quotation management system that simplifies the creation, tracking, and organization of financial documents. The platform enables businesses to manage clients, generate invoices and quotes, monitor payment statuses, and maintain accurate financial records with a clean, scalable, and user-friendly interface.",
    type: "SaaS Product",
    href: invoice,
    tags: ["React", "Node.js", "PostgreSQL", "MongoDB"]
  },
  {
    id: "sooicy",
    title: "SooIcy",
    description: "A modern digital platform built for an ice-cream parlour, featuring an engaging customer-facing interface and a powerful admin dashboard. Customers can explore products and place orders seamlessly, while administrators can manage inventory, track orders, and oversee daily operations efficiently.",
    type: "E-Commerce",
    href: sooicy,
    tags: ["React", "Python", "Tailwind"]
  },
  {
    id: "predictpick",
    title: "Predict the Pick",
    description: "A real-time sports prediction and analytics app delivering live match scores, detailed player statistics, and instant updates. The application leverages Firebase for real-time synchronization and personalized notifications, ensuring users stay engaged with up-to-date insights and game predictions.",
    link: "https://predictpick.web.app",
    type: "Sports App",
    href: ptp,
    tags: ["Vue 3", "Nuxt", "Firebase"]
  },
  {
    id: "auctionpro",
    title: "Auction Pro",
    description: "A feature-rich cricket tournament auction platform designed to manage live player auctions efficiently. Built with Vue.js and Django, it enables organizers to handle player listings, team budgets, real-time bidding, and auction flows while providing an interactive and engaging experience for participants.",
    link: "https://www.worldofqj.com/",
    type: "Auction Platform",
    href: auction,
    tags: ["Vue 3", "Nuxt", "Django"]
  },
  {
    id: "coreledger",
    title: "CoreLedger ERP",
    description: "A trading and manufacturing ERP that unifies inventory, purchasing, sales, banking, and double-entry accounting in one platform. It supports multi-company dimensions, automatic balanced journal posting from invoices and payments, and financial reports including balance sheet, ledgers, and COA completeness. Built for real operational scale with raw materials, finished goods, production workflows, and role-based staff access.",
    type: "Enterprise ERP",
    link: "https://coreledger.up.railway.app/",

    href: coreledger,
    tags: ["React", "Django", "PostgreSQL", "JWT"]
  },
  {
    id: "trisite",
    title: "Trisite Solutions",
    description: "A modern and fully responsive corporate website developed for a digital agency. The site emphasizes performance, clean design, and accessibility, showcasing services, projects, and company identity while delivering a fast and seamless experience across all screen sizes.",
    link: "https://www.trisitesolutions.com/",
    type: "Corporate Site",
    href: trisite,
    tags: ["React", "Next"]
  },
  {
    id: "qjchallenges",
    title: "QJ Challenges",
    description: "An interactive educational quiz platform that allows users to test their knowledge across multiple categories. The application tracks user progress, scores, and achievements, creating an engaging learning experience through dynamic quizzes, real-time feedback, and performance analytics.",
    type: "Education",
    href: QJ,
    tags: ["Vue 3", "Nuxt", "Django"]
  }
]


</script>

<style scoped>
.projects-section {
  background: #ffffff;
  padding: 100px 0;
  position: relative;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -1px;
}

.section-subtitle {
  color: #64748b;
  font-size: 1.1rem;
  margin-top: 10px;
}

.project-swiper {
  padding: 20px 0 60px;
}

.project-card {
  background: #fff;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f1f5f9;
  box-shadow: 0 10px 30px -15px rgba(0,0,0,0.05);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px -15px rgba(0, 191, 166, 0.2);
  border-color: rgba(0, 191, 166, 0.2);
}

/* Image Container Styling */
.image-container {
  position: relative;
  height: 240px;
  margin: 12px;
  border-radius: 16px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.overlay-glass {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .overlay-glass {
  opacity: 1;
}

.action-btn {
  background: #fff;
  color: #0f172a;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.project-card:hover .action-btn {
  transform: translateY(0);
}

.private-label {
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  background: rgba(255,255,255,0.2);
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

/* Content Area */
.project-body {
  padding: 12px 24px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.type-tag {
  color: #00bfa6;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.project-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.project-info {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-stack {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-pill {
  background: #f8fafc;
  color: #64748b;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #e2e8f0;
}

/* Swiper Customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  color: #0f172a;
}

:deep(.swiper-pagination-bullet-active) {
  background: #00bfa6;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .image-container { height: 200px; }
}
/* Add this inside your <style scoped> */
.button-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 0 20px;
  align-items: center;
}

.detail-btn {
  background: #00bfa6 !important;
  color: white !important;
  border: none;
  cursor: pointer;
  width: auto;
  min-width: 160px;
  justify-content: center;
}

.demo-btn {
  background: white !important;
  color: #0f172a !important;
  width: auto;
  min-width: 160px;
  justify-content: center;
}

/* Ensure the button looks like the previous link */
.action-btn {
  /* ... keep existing styles ... */
  border: none;
  cursor: pointer;
}
</style>