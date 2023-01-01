const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "./src/assets/style/_variables.scss";`
//       }
//     }
//   }
// };

