<template>
  <div class="header__profile-wrapper">
    <button class="header__profile" :class="{ opened }" @click.stop="toggle">
      <div class="header__profile-avatar">
        <img src="@/assets/avatar.jpg" alt="" />
      </div>
      <span class="header__profile-username">Артем</span>
      <base-chevron
        :class="{ active: opened }"
        style="--color: #f5f5f7; --size: 14px"
      />
    </button>
    <transition name="fade">
      <base-dropdown
        v-if="opened"
        :opened="opened"
        @close="toggle"
        @logout="logout"
      />
    </transition>
  </div>
</template>

<script>
import BaseDropdown from '@/components/BaseDropdown.vue'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseChevron from '@/components/BaseChevron.vue'

export default {
  components: {
    BaseDropdown,
    BaseTooltip,
    BaseChevron,
  },
  data: () => ({
    opened: false,
  }),
  methods: {
    toggle() {
      this.opened = !this.opened
    },
    async logout() {
      this.toggle()
      await this.$store.dispatch('logout')
      this.$router.push('/auth')
    },
  },
}
</script>

<style lang="scss" scoped>
.header__profile {
  display: flex;
  align-items: center;
  padding: rem(4) rem(10);
  color: inherit;
  border: none;
  border-radius: rem(8);
  background: none;
  position: relative;
  transition: background-color 0.1s ease;
  cursor: pointer;

  &-wrapper {
    position: relative;
  }

  &-avatar {
    width: rem(30);
    height: rem(30);
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &-username {
    margin-left: rem(8);
    margin-right: rem(6);
    pointer-events: none;
  }

  &.opened {
    background-color: rgba(#fff, 0.1);
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(#fff, 0.1);
    }
  }
}
</style>
