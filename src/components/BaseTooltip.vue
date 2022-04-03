<template>
  <div class="tooltip__wrapper">
    <div
      ref="trigger"
      @mouseenter="toggle"
      @mouseleave="toggle"
      @click="isShown = false"
    >
      <slot />
    </div>
    <transition name="fade">
      <div v-show="isShown" ref="tooltip" class="tooltip" :class="position">
        <div class="tooltip__content">
          <span>{{ text }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data: () => ({
    isShown: false,
    position: [],
    trigger: null,
    tooltip: null,
  }),
  methods: {
    toggle() {
      this.isShown = !this.isShown
      if (this.isShown) {
        this.$nextTick(() => {
          this.position = this.getPosition()
        })
      }
    },
    getPosition() {
      this.trigger = this.$refs.trigger.getBoundingClientRect()
      this.tooltip = this.$refs.tooltip.getBoundingClientRect()
      return [this.getY(), this.getX()]
    },
    getY() {
      if (
        window.innerHeight - this.trigger.top < this.tooltip.height &&
        this.trigger.left + this.trigger.width > this.tooltip.width &&
        window.innerWidth - this.trigger.left > this.tooltip.width
      ) {
        return 'top'
      }
      if (
        window.innerHeight - this.trigger.top <
          this.tooltip.height + this.trigger.height ||
        window.innerWidth - this.trigger.left < this.tooltip.width ||
        this.trigger.left + this.trigger.width < this.tooltip.width
      ) {
        return 'y-center'
      }
      return 'bottom'
    },
    getX() {
      if (
        window.innerHeight - this.trigger.top < this.tooltip.height &&
        this.trigger.left + this.trigger.width > this.tooltip.width &&
        window.innerWidth - this.trigger.left > this.tooltip.width
      ) {
        return 'x-center'
      }
      if (
        (window.innerWidth - this.trigger.left >
          this.trigger.width + this.tooltip.width &&
          window.innerHeight - this.trigger.top <
            this.tooltip.height + this.trigger.height) ||
        this.trigger.left + this.trigger.width < this.tooltip.width
      ) {
        return 'right'
      }
      if (
        (window.innerWidth - this.trigger.left <
          this.trigger.width + this.tooltip.width &&
          window.innerHeight - this.trigger.top <
            this.tooltip.height + this.trigger.height) ||
        window.innerWidth - this.trigger.left < this.tooltip.width
      ) {
        return 'left'
      }
      return 'x-center'
    },
  },
}
</script>

<style lang="scss" scoped>
.tooltip {
  pointer-events: none;
  position: absolute;

  &__wrapper {
    display: inline-block;
    position: relative;
  }

  &__content {
    padding: rem(5) rem(12);
    font-size: rem(14);
    color: $AppTextColorLight;
    white-space: nowrap;
    border-radius: rem(4);
    background-color: $deepgrey;

    &::before {
      content: '';
      top: 0;
      left: 50%;
      width: rem(8);
      height: rem(8);
      background-color: $deepgrey;
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
    }
  }

  &.top {
    top: calc(-100% - rem(15));

    .tooltip__content::before {
      left: 50%;
      top: 100%;
      border-radius: 0 0 rem(2) 0;
    }
  }
  &.bottom {
    top: calc(100% + rem(10));
  }
  &.y-center {
    top: 50%;
    transform: translateY(-50%);
  }
  &.x-center {
    left: 50%;
    transform: translateX(-50%);
  }
  &.right {
    left: calc(100% + rem(15));

    .tooltip__content::before {
      left: 0;
      top: 50%;
      border-radius: 0 0 0 rem(2);
    }
  }
  &.left {
    right: calc(100% + rem(15));

    .tooltip__content::before {
      left: 100%;
      top: 50%;
      border-radius: 0 rem(2) 0 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
