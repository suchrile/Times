<template>
  <header class="header">
    <div class="header__content">
      <div class="header__title">Times</div>
      <the-header-profile />
    </div>
  </header>
</template>

<script>
import TheHeaderProfile from '@/components/TheHeaderProfile.vue'
import BaseTooltip from '@/components/BaseTooltip.vue'

export default {
  components: {
    TheHeaderProfile,
    BaseTooltip,
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 rem(20);
    color: $AppTextColorLight;
    background-color: $AppBackgroundColorDark;
  }

  &__title {
    font-size: rem(20);
    font-weight: 500;
    pointer-events: none;
  }
}
</style>
