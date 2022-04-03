<template>
  <select name="theme" id="" @change="changeAppTheme">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="option.value === currentTheme"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  data: () => ({
    currentTheme: localStorage.getItem('theme'),
    options: [
      { value: 'device', title: 'Device Theme' },
      { value: 'light', title: 'Light' },
      { value: 'dark', title: 'Dark' },
    ],
  }),
  methods: {
    changeAppTheme(e) {
      if (e.target.value === 'device') {
        document.body.setAttribute('theme', 'device')
        localStorage.setItem('theme', 'device')
      } else if (e.target.value === 'light') {
        document.body.setAttribute('theme', 'light')
        localStorage.setItem('theme', 'light')
      } else {
        document.body.setAttribute('theme', 'dark')
        localStorage.setItem('theme', 'dark')
      }
    },
  },
}
</script>
