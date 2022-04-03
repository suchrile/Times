<template>
  <header ref="header" class="header-mobile">
    <div class="header-mobile__small">
      <span>
        {{ $filters.lang(this.$route.name) }}
      </span>
    </div>
    <div class="header-mobile__large">
      <span>
        {{ $filters.lang(this.$route.name) }}
      </span>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler() {
      if (window.scrollY >= 30) {
        this.$refs.header.classList.add('small')
      } else {
        this.$refs.header.classList.remove('small')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile {
  z-index: 90;

  &.small {
    .header-mobile__small span {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .header-mobile__large {
      opacity: 0;
      visibility: hidden;
    }
  }
  &__small {
    top: 0;
    left: 0;
    width: 100vw;
    padding: rem(10) 0;
    font-size: rem(16);
    font-weight: 600;
    text-align: center;
    background-color: $AppBackgroundColorLight;
    position: fixed;
    z-index: 1;

    & span {
      display: block;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20%);
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
        transform 0.2s ease-in-out;
    }
  }
  &__large {
    padding: rem(44) rem(15) rem(10) rem(15);
    font-size: rem(30);
    font-weight: 700;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }
}
</style>
