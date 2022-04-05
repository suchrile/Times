<template>
  <div class="upload">
    <label>
      <input
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="upload"
      />
      {{ $filters.lang(text) }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    accept: String,
    multiple: Boolean,
  },
  emits: ['upload'],
  methods: {
    upload(event) {
      this.$emit('upload', Array.from(event.target.files))
    },
  },
}
</script>

<style lang="scss" scoped>
.upload {
  display: inline-block;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
  }

  label {
    font-size: rem(16);
    color: $blue;
  }
}
</style>
