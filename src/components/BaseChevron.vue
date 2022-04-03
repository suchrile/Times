<template>
  <div class="dropdown-chevron"></div>
</template>

<style lang="scss" scoped>
.dropdown-chevron {
  width: calc(var(--size) - var(--size) / 5);
  line-height: 1;
  pointer-events: none;
  position: relative;

  &.active {
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }

  &::before,
  &::after {
    content: '';
    top: 50%;
    left: 0;
    width: calc(var(--size) / 2);
    height: calc(var(--size) / 14);
    background-color: var(--color);
    position: absolute;
    transition: 0.2s ease;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
    left: calc(var(--size) / 3);
  }
}
</style>
