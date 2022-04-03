<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li>
        <button class="dropdown__item">
          <base-icon
            class="dropdown__item-icon indigo"
            name="gear-regular"
            size="20"
          />
          <span>Настройки</span>
        </button>
      </li>
      <li>
        <button class="dropdown__item" @click.stop="$emit('logout')">
          <base-icon
            class="dropdown__item-icon pink"
            name="right-from-bracket-regular"
            size="20"
          />
          <span>Выйти</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: {
    BaseIcon,
  },
  props: ['opened'],
  emits: ['close', 'logout'],
  mounted() {
    document.addEventListener('click', this.clickHandler)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickHandler)
  },
  methods: {
    clickHandler(e) {
      if (e.target !== this.$el) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  min-width: rem(180);
  top: calc(100% + rem(10));
  right: 0;
  color: $black;
  border-radius: rem(8);
  background-color: $softgrey;
  box-shadow: 0px 0 8px 1px rgba(0, 0, 0, 0.1);
  transform-origin: top right;
  position: absolute;
  z-index: 10;
  overflow: hidden;

  &__list {
    &:not(:last-child) {
      margin-bottom: rem(4);
    }

    & li:not(:last-child) {
      border-bottom: 1px solid $softgrey;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: rem(20) 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: rem(10);
    padding: rem(10) rem(15);
    text-align: left;
    border: none;
    background-color: white;
    transition: background-color 0.2s ease;
    position: relative;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 0 0 rem(100) $softgrey;
    }

    &:not(:first-child) {
      margin-top: rem(-1);
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: end;
      width: rem(18);
      pointer-events: none;
    }

    & span {
      line-height: 1;
      pointer-events: none;

      &.danger {
        color: $red;
      }
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: $AppBackgroundColorLight;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
