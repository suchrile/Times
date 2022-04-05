<template>
  <div class="popup" :class="{ opened: isOpen }" @click.self="close">
    <div class="popup__body">
      <slot />
      <div class="popup__close" @click="close">
        <base-button view="icon grey" size="small" icon="xmark-regular" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: { BaseButton },
  data: () => ({
    isOpen: false,
  }),
  mounted() {
    document.body.classList.add('no-scroll')
    setTimeout(() => {
      this.isOpen = true
    })
  },
  beforeUnmount() {
    document.body.classList.remove('no-scroll')
  },
  methods: {
    close() {
      this.isOpen = false
      setTimeout(() => {
        this.$emit('close')
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  transition: background-color 0.2s ease;
  &.opened {
    background-color: rgba($color: #000000, $alpha: 0.25);
    .popup__body {
      transform: translateY(0);
    }
  }

  &__body {
    min-height: rem(100);
    margin: rem(10);
    padding: rem(15);
    border-radius: rem(16);
    background-color: $AppBackgroundColorLight;
    transform: translateY(calc(100% + rem(10)));
    transition: transform 0.3s cubic-bezier(0.32, 0.74, 0.3, 1.15);
    position: relative;
    z-index: 100;
  }

  &__close {
    top: rem(15);
    right: rem(15);
    position: absolute;
  }

  body[theme='dark'] & {
    &__body {
      background-color: $AppBackgroundColorDark;
    }
  }
}
</style>
