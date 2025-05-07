<template>
  <section id="projects" class="projects-section">
    <div class="wave-top"></div>
    <h2 class="section-title">PROJECTS</h2>

    <swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 4000 }"
      :breakpoints="{
        768: { slidesPerView: 1.1 },
        1024: { slidesPerView: 2 }
      }"
      navigation
      class="project-swiper"
    >
      <swiper-slide v-for="(project, index) in projects" :key="index">
        <div class="project-card">
          <img
            :src="project.href"
            :alt="project.title"
            class="project-image"
            :style="imageStyles[index]"
            @mousemove="handleMouseMove($event, index)"
            @mouseleave="resetTilt(index)"
          />
          <div class="project-text">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a v-if="project.link" :href="project.link" class="live-button" target="_blank" rel="noopener">
              See Live
            </a>
          </div>
        </div>
      </swiper-slide>

      <!-- Navigation Arrows -->
      <!-- <div class="swiper-button-prev custom-nav">&lt;</div> -->
      <!-- <div class="swiper-button-next custom-nav">&gt;</div> -->
    </swiper>
  </section>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import ptp from '@/assets/ptp.png'
import auction from "../assets/auction.png"
import erp from "../assets/erp.png"
import trisite from "../assets/trisite.png"
import QJ from "../assets/qj.png"
import { ref } from 'vue'
import SwiperCore from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'

SwiperCore.use([Navigation, Autoplay])

const imageStyles = ref([])

const handleMouseMove = (e, index) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * 10

  imageStyles.value[index] = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
    transition: 'transform 0.1s ease-out',
  }
}

const resetTilt = (index) => {
  imageStyles.value[index] = {
    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.5s ease',
  }
}

// Ensure default styles for all images
onMounted(() => {
  imageStyles.value = projects.map(() => ({
    transform: 'rotateX(0deg) rotateY(0deg)',
  }))
})
const projects = [
  {
    title: "Predict the Pick",
    description:
      " Predict the Pick app provides real-time game updates, player stats, team standings, and news highlights.             It features live score tracking, personalized notifications, and a seamless user experience. The frontend is             built using Vue.js with Nuxt.js for SSR, while Firebase powers the backend and             database for real-time data synchronization.",
    link: "https://predictpick.web.app",
    href: ptp,
  },
  {
    title: "Auction Pro",
    description:
      "The Cricket Tournament Auction App is designed to streamline player auctions with efficiency and ease.             Built using Vue.js and Vuetify for an interactive front-end, it delivers a seamless user experience. Django             powers the robust back-end,             ensuring secure and efficient data handling. This app is tailored for cricket enthusiasts, simplifying the             auction process from start to finish.",
    link: "https://www.worldofqj.com/",
    href: auction
  },
  {
    title: "ERP System",
    description:
      " Built with Angular on the front-end and Python on the back-end, this ERP system streamlines business             operations into a cohesive platform.             Smooth data synchronization was ensured through efficient APIs and robust error handling. Performance for             large datasets was optimized             using advanced caching and pagination, delivering a scalable solution that enhances productivity and user             satisfaction.    ",
    href: erp
  },
  {
    title: "Trisite Solutions",
    description:
      "Trisite Solutions is a modern, responsive website built to showcase a digital services agency and its range             of offerings. Developed using Nuxt.js for optimal performance and seamless routing, the site delivers a fast             and dynamic user experience. The UI is crafted with Tailwind CSS, providing a clean, minimal, and fully             responsive design across all screen sizes. ",
    link: "https://www.trisitesolutions.com/",
    href: trisite
  },
  {
    title: "QJ Challenges",
    description:
      "  QJ Challenges is an interactive quiz app designed to test and enhance your knowledge across various             categories.             Built with React.js for a dynamic user experience and Django for a robust back-end, it ensures seamless             performance.             Users can engage in challenging quizzes tailored to their interests and track their progress.             The app combines learning with fun, making it an exciting platform for self-improvement.     ",
    href: QJ
  },
]
</script>

<style scoped>
.projects-section {
  background: linear-gradient(to bottom, #fdfbfb, #ebedee);
  padding: 5rem 5%;
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  color: #221c3b;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}


.project-card:hover .project-image {
  transform: rotateY(10deg) rotateX(5deg) scale(1.02);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.project-swiper {
  padding-bottom: 3rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  perspective: 1000px;
  padding: 2rem;
}

.project-card:hover {
  transform: translateY(-8px);
}

.project-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 191, 166, 0.25);
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
}

.project-text h3 {
  font-size: 1.6rem;
  color: #221c3b;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.project-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
}

.custom-nav {
  color: #00bfa6;
  font-size: 2rem;
  font-weight: bold;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: background 0.3s ease;
}

.swiper-button-next.custom-nav {
  right: 10px;
}

.swiper-button-prev.custom-nav {
  left: 10px;
}

.custom-nav:hover {
  background: #00bfa6;
  color: white;
}

.live-button {
  display: inline-block;
  padding: 10px 16px;
  font-weight: bold;
  background: #00bfa6;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.live-button:hover {
  background: #009c88;
}

.wave-top {
  position: absolute;
  top: -60px;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, #00bfa6 50%, transparent 50%);
  z-index: 1;
}
</style>
