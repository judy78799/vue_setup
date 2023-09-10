const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  assetsDir: "./", //해당 설정을 상대경로로 수정합니다.
  publicPath:"./" //만약 css,js,img 등 에셋 경로가 다를 경우, 해당 경로도 수정 해야 합니다. 
}