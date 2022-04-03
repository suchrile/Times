<template>
  <div class="button__wrapper">
    <button :type="type" :disabled="disabled" class="button">
      {{ $filters.lang(text) }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    disabled: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  padding: rem(8) rem(20);
  font-size: rem(18);
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: rem(10);
  background-color: $blue;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>
