const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/js", "/index.jsx"),
  output: {
    path: path.join(__dirname, "..", "/server", "/static", "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  performance: {
    hints: false,
  },
};
