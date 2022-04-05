<template>
  <header class="header-mobile">
    <div class="header-mobile__content">
      <div class="header-mobile__back">
        <base-button
          text="G_APP_BACK"
          view="plain"
          size="large"
          icon="chevron-left-regular"
          @click="returnBack"
        />
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
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseIcon,
    BaseButton,
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
  user-select: none;
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
    transition: background-color 0.2s ease-in-out;
    position: fixed;
    z-index: 1;
  }

  &__back {
    display: flex;
    height: 100%;
  }

  &__title {
    padding: rem(10) 0;
    font-size: rem(16);
    font-weight: 600;
    cursor: default;
  }

  &__actions {
  }

  body[theme='dark'] & {
    &__content {
      background-color: #000;
    }
  }
}
</style>
