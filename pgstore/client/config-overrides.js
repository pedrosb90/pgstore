const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
  };
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    })
  );

  return config;
};
