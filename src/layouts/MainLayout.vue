<template>
  <component v-if="isMobile" :is="headerMobileView" />
  <the-header v-else />
  <main :class="{ mobile: isMobile }">
    <router-view />
  </main>
  <transition name="footer-fade">
    <the-footer v-if="isMobile" v-show="footerShown" />
  </transition>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderMobileSmall from '@/components/TheHeaderMobileSmall.vue'
import TheHeaderMobileLarge from '@/components/TheHeaderMobileLarge.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheHeaderMobileSmall,
    TheHeaderMobileLarge,
    TheFooter,
  },
  data: () => ({
    isMobile: null,
  }),
  async mounted() {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
    if (!Object.keys(this.$store.getters.userData).lenght) {
      await this.$store.dispatch('getUserData')
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    headerMobileView() {
      if (this.$route.meta.largeheader) {
        return 'the-header-mobile-large'
      }
      return 'the-header-mobile-small'
    },
    footerShown() {
      if (this.$route.meta.largeheader) {
        return true
      }
    },
  },
  methods: {
    resizeHandler() {
      document.body.clientWidth < 1000
        ? (this.isMobile = true)
        : (this.isMobile = false)
    },
  },
}
</script>

<style lang="scss">
body[layout='main'] {
  font-family: SFProDisplay;
  font-size: $AppDefaultFontSize;
  background-color: $AppBackgroundColorLight;
  color: $AppTextColorDark;
  transition: background-color 0.3s ease, color 0.3s ease;

  &[theme='dark'] {
    background-color: #000;
    // background-color: $AppBackgroundColorDark;
    color: $AppTextColorLight;
  }
}

.mobile {
  padding: 0 rem(15) rem(70);
}

.footer-fade-enter-active,
.footer-fade-leave-active {
  transition: transform 0.2s ease-in-out;
}

.footer-fade-enter-from,
.footer-fade-leave-to {
  transform: translateY(100%);
}
</style>
