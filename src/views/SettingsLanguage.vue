<template>
  <section class="settings-language">
    <base-select-sheet
      :selectData="languages"
      @select="changeLanguage($event)"
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
    languages: {
      title: 'SETTINGS_LANGUAGE_APP_LANGUAGE',
      items: [
        { title: 'G_APP_ENGLISH', value: 'en-US' },
        { title: 'G_APP_RUSSIAN', value: 'ru-RU' },
      ],
      selected: localStorage.getItem('lang'),
    },
  }),
  methods: {
    async changeLanguage(lang) {
      await this.$store.dispatch('setLanguage', lang.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.settings-language {
  margin-top: rem(20);
}
</style>
