const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/config.json", to: "config.json", toType: "file" },
      ],
    }),
  ],
};