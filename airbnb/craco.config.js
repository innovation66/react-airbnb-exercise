const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathname => {
    console.log(path.resolve(__dirname, pathname))
    return path.resolve(__dirname, pathname)
}

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}
