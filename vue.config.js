const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    port: 8081,
    proxy: {
      "/api":{
      target: "http://localhost:5500/", 
      }
    }
  }
})
