const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variabled.scss";
        `
      },
    },
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#cabeea",
            "link-color": "#cabeea",
            "success-color": "#52c41a",
            "warning-color": "#faad14",
            "error-color": "#f5222d",
            "font-size-base": "14px",
            "heading-color": "rgba(0, 0, 0, 0.85)",
            "text-color": "rgba(0, 0, 0, 0.65)",
            "text-color-secondary": "rgba(0, 0, 0, 0.45)",
            "disabled-color": "rgba(0, 0, 0, 0.25)",
            "border-radius-base": "4px",
            "border-color-base": "#d9d9d9",
            "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)"
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
