// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Mustafa Moiz — Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Mustafa Moiz is a Full-Stack Developer building high-performance, scalable web applications with Vue, Nuxt, React, Django, and modern cloud architecture.'
        },
        { name: 'author', content: 'Mustafa Moiz' },
        { name: 'theme-color', content: '#00bfa6' },
        { name: 'keywords', content: 'Full-Stack Developer, Vue, Nuxt, React, Django, Web Developer, Portfolio' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Mustafa Moiz — Full-Stack Developer' },
        {
          property: 'og:description',
          content:
            'Crafting digital experiences. Full-Stack Developer specializing in scalable, high-performance web applications.'
        },
        { property: 'og:image', content: '/github.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mustafa Moiz — Full-Stack Developer' },
        {
          name: 'twitter:description',
          content: 'Full-Stack Developer crafting scalable, high-performance web applications.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  }
})
