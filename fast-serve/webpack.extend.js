const path = require("path");
const webpackConfig = {
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "..", "components"),
    },
  },
};

/**
 * For even more fine-grained control, you can apply custom webpack settings using below function
 * @param {object} initialWebpackConfig - initial webpack config object
 * @param {object} webpack - webpack object, used by SPFx pipeline
 * @returns webpack config object
 */
const transformConfig = function (initialWebpackConfig, webpack) {
  // transform the initial webpack config here, i.e.
  // initialWebpackConfig.plugins.push(new webpack.Plugin()); etc.

  return initialWebpackConfig;
};

module.exports = {
  webpackConfig,
  transformConfig,
};
