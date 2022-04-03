const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Times',
    themeColor: '',
    msTileColor: '',
    manifestOptions: {
      background_color: '#1D1D1F'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/functions.scss";
          @import "@/styles/variables.scss";
          @import "@/styles/reset.scss";
          @import "@/styles/fonts.scss";
        `
      },
    }
  }
})
