<template>
  <span class="note">{{ $filters.lang(text) }}</span>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
.note {
  display: block;
  margin-top: rem(8);
  padding: 0 rem(15);
  font-size: rem(13);
  line-height: 1.2;
  color: $grey;
}
</style>
