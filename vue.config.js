const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    devServer:{
      port: 3000,
      open: true,
      host: 'localhost',
    }
  }
})
