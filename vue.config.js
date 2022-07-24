const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  //关闭eslink
  lintOnSave: false,
  // experimentalDisableTemplateSupport: true,

  // 代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: {},
      },
    },
  },
});
