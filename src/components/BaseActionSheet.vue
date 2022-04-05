<template>
  <section
    class="action-sheet"
    :class="{ opened: isOpen }"
    @click.self="cancel"
  >
    <div class="action-sheet__body">
      <ul class="action-sheet__list">
        <li
          v-for="action in actions"
          :key="action.value"
          class="action-sheet__item"
          :class="{ danger: action.danger }"
          @click="choose(action)"
        >
          {{ $filters.lang(action.title) }}
        </li>
      </ul>
      <ul v-if="!required" class="action-sheet__list">
        <li class="action-sheet__item" @click="cancel">
          {{ $filters.lang('G_APP_CANCEL') }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    actions: Array,
    required: Boolean,
  },
  emits: ['choose', 'cancel'],
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
    choose(action) {
      this.isOpen = false
      setTimeout(() => {
        this.$emit('choose')
      }, 250)
    },
    cancel() {
      if (!this.required) {
        this.isOpen = false
        setTimeout(() => {
          this.$emit('cancel')
        }, 250)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.action-sheet {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease;
  position: fixed;
  z-index: 99;
  &.opened {
    background-color: rgba($color: #000000, $alpha: 0.25);
    .action-sheet__body {
      transform: translateY(0);
    }
  }

  &__body {
    margin: rem(10);
    transform: translateY(calc(100% + rem(10)));
    transition: transform 0.25s ease;
    z-index: 100;
  }

  &__list {
    border-radius: rem(12);
    background-color: rgba($color: $AppBackgroundColorLight, $alpha: 0.9);
    backdrop-filter: blur(20px);
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: rem(6);
    }
  }

  &__item {
    margin-top: rem(-1);
    padding: rem(12) rem(15);
    font-size: rem(18);
    text-align: center;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid #dbdbdd;
    }

    &.danger {
      color: $red;
    }

    &:active {
      background-color: #dbdbdd;
    }
  }

  body[theme='dark'] & {
    &__list {
      background-color: rgba($color: $AppBackgroundColorDark, $alpha: 0.8);
    }
    &__item {
      &:not(:last-child) {
        border-bottom: 1px solid #2d2d30;
      }
      &:active {
        background-color: #2d2d30;
      }
    }
  }
}
</style>
