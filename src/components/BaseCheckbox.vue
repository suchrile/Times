<template>
  <div class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      ref="checkbox"
      :disabled="disabled"
      :id="id"
      @change="$emit('checked', $refs.checkbox.checked)"
    />
    <label :for="id" v-html="$filters.lang(label)"></label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
  },
  emits: ['checked'],
  computed: {
    id() {
      return 'checkbox-' + Math.floor(Math.random() * 1000000)
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox {
  /* для элемента input c type="checkbox" */
  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  /* для элемента label, связанного с &__input */
  & label {
    display: inline-flex;
    align-items: center;
    line-height: 1.3;
    user-select: none;
    cursor: pointer;
  }

  /* создание в label псевдоэлемента before со следующими стилями */
  & label::before {
    content: '';
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1.5px solid #ccc;
    border-radius: 5px;
    margin-right: 0.5em;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill%3D%22%235fca7a%22><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>')
      no-repeat center;
    background-size: 0%;
    transition: 0.2s ease;
  }

  /* стили при наведении курсора на checkbox */
  & input:not(:disabled):not(:checked) + label:hover::before {
    border-color: $green;
  }

  /* стили для чекбокса, находящегося в состоянии checked */
  & input:checked + label::before {
    border-color: $green;
    background-size: 70%;
  }

  /* стили для чекбокса, находящегося в состоянии disabled */
  & input:disabled + label {
    opacity: 0.6;
  }
}
</style>
