<template>
  <div class="settings">
    <component :is="layout" />
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import SettingsMainMobile from '@/components/SettingsMainMobile.vue'
import SettingsProfileMobile from '@/components/SettingsProfileMobile.vue'

export default {
  components: { BaseIcon, SettingsMainMobile, SettingsProfileMobile },
  computed: {
    layout() {
      if (this.$route.hash === '') {
        return 'settings-main-mobile'
      }
    },
  },
}
</script>

<style lang="scss">
.settings {
  &__chevron {
    margin-left: auto;
    opacity: 0.3;
  }

  body[theme='dark'] & {
    &__chevron {
      fill: $AppTextColorLight;
    }
  }
}
</style>
