<template>
  <component :is="layout" :key="language">
    <router-view />
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components: {
    MainLayout,
    AuthLayout,
  },
  data: () => ({
    languages: ['ru-RU', 'en-US'],
  }),
  computed: {
    layout() {
      if (this.$route.meta.layout === '') {
        document.body.setAttribute('layout', 'main')
        return 'main-layout'
      }
      document.body.setAttribute('layout', this.$route.meta.layout)
      return this.$route.meta.layout + '-layout'
    },
    language() {
      return this.$store.getters.language
    },
  },
  mounted() {
    if (!this.languages.includes(localStorage.getItem('lang'))) {
      localStorage.setItem(
        'lang',
        navigator.language === 'ru' ? 'ru-RU' : 'en-US'
      )
    }
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'device')
    }
    if (localStorage.getItem('theme') === 'device') {
      const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)')
      if (deviceTheme.matches) {
        document.body.setAttribute('theme', 'dark')
      } else {
        document.body.setAttribute('theme', 'light')
      }
    } else {
      document.body.setAttribute('theme', localStorage.getItem('theme'))
    }
  },
}
</script>

<style lang="scss">
.no-scroll {
  overflow: hidden;
  user-select: none;
}
.link-in-text {
  text-decoration: underline;
  color: $blue;
}
</style>
