<template>
  <i :style="height">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      v-html="path"
      :style="height"
    ></svg>
  </i>
</template>

<script>
import icons from '@/icons'

export default {
  props: ['name', 'size'],
  computed: {
    path() {
      return icons[this.name].path
    },
    viewBox() {
      return icons[this.name].viewBox
    },
    height() {
      return `height: ${this.size}px`
    },
  },
}
</script>

<style lang="scss" scoped>
i {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}
</style>
