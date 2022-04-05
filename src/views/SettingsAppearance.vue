<template>
  <section class="settings-appearance">
    <base-select-sheet
      :selectData="themes"
      @select="changeTheme($event)"
      class="settings-appearance__select-list"
    />
  </section>
</template>

<script>
import BaseSelectSheet from '@/components/BaseSelectSheet.vue'
export default {
  components: {
    BaseSelectSheet,
  },
  data: () => ({
    themes: {
      title: 'SETTINGS_APPEARANCE_APP_THEME',
      items: [
        { title: 'SETTINGS_APPEARANCE_DEVICE', value: 'device' },
        { title: 'SETTINGS_APPEARANCE_LIGHT', value: 'light' },
        { title: 'SETTINGS_APPEARANCE_DARK', value: 'dark' },
      ],
      selected: localStorage.getItem('theme'),
    },
  }),
  methods: {
    changeTheme(theme) {
      if (theme.value === 'device') {
        const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)')
        if (deviceTheme.matches) {
          document.body.setAttribute('theme', 'dark')
        } else {
          document.body.setAttribute('theme', 'light')
        }
      } else {
        document.body.setAttribute('theme', theme.value)
      }
      localStorage.setItem('theme', theme.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.settings-appearance {
  margin-top: rem(20);
}
</style>
