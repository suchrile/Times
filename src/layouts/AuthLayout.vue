<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
body[layout='auth'] {
  font-family: SFProDisplay;
  font-size: $AppDefaultFontSize;
  background-color: #fff;
  color: $AppTextColorDark;
  transition: background-color 0.3s ease, color 0.3s ease;

  &[theme='dark'] {
    background-color: $AppBackgroundColorDark;
    color: $AppTextColorLight;
  }

  @media (prefers-color-scheme: dark) {
    &[theme='device'] {
      background-color: $AppBackgroundColorDark;
      color: $AppTextColorLight;
    }
  }
}
</style>
