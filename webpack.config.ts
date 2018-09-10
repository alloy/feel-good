import path from "path"
import webpack from "webpack"
import webpackDevServer from "webpack-dev-server"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

const config: webpack.Configuration & webpackDevServer.Configuration = {
  mode: "development",
  entry: [
      "react-hot-loader/patch",
    //   "webpack-dev-server/client?http://localhost:8080",
    //   "webpack/hot/only-dev-server",
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&__webpack_public_path=http://webpack:8080',
      "./src/index.tsx"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.bundle.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: "errors-only",
    hot: true,
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    // alias: {
    //   "styled-components": path.resolve("./node_modules/styled-components"),
    // },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [/src/],
        exclude: [/node_modules/, /__tests__/],
        use: [
          { loader: "cache-loader" },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
          // NOTE: Painfully slow startup
          // See: https://github.com/strothj/react-docgen-typescript-loader
          // {
          //   loader: "react-docgen-typescript-loader",
          // },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
};

export default config;