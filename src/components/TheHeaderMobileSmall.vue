<template>
  <header class="header-mobile">
    <div class="header-mobile__content">
      <div class="header-mobile__back">
        <button class="header-mobile__back-content" @click="returnBack">
          <base-icon name="chevron-left-regular" size="22" />
          <span class="header-mobile__back-title">
            {{ $filters.lang('G_APP_BACK') }}
          </span>
        </button>
      </div>
      <span class="header-mobile__title">
        {{ $filters.lang(this.$route.name) }}
      </span>
      <div class="header-mobile__actions"></div>
    </div>
  </header>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: {
    BaseIcon,
  },
  data: () => ({
    currRoute: null,
    prevRoute: null,
  }),
  mounted() {
    this.currRoute = this.$route.path
    this.prevRoute = this.currRoute.substring(
      0,
      this.currRoute.lastIndexOf('/')
    )
  },
  methods: {
    returnBack() {
      this.$router.push(this.prevRoute)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile {
  height: rem(44);
  z-index: 90;

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0 rem(15);
    text-align: center;
    background-color: $AppBackgroundColorLight;
    position: fixed;
    z-index: 1;
  }

  &__back {
    display: flex;
    align-items: center;
    height: 100%;

    &-content {
      display: flex;
      align-items: center;
      height: 100%;
      color: $blue;
      fill: $blue;
      border: none;
      background: none;
      -webkit-tap-highlight-color: transparent;
      overflow: hidden;
      cursor: pointer;

      &:active {
        opacity: 0.6;
      }
    }

    &-title {
      margin-left: rem(5);
      font-size: rem(18);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &__title {
    padding: rem(10) 0;
    font-size: rem(16);
    font-weight: 600;
    cursor: default;
  }

  &__actions {
  }
}
</style>
