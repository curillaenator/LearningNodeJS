const path = require("path");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: ["@babel/polyfill", "./src/index.tsx"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.[fullhash].js",
    publicPath: "/",
    clean: true,
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "Task Manager",
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "./src/public"),
    //       to: "",
    //       globOptions: {
    //         ignore: ["*.DS_Store"],
    //       },
    //     },
    //   ],
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.m?(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // {
      //   test: /\.woff2/,
      //   exclude: /node_modules/,
      //   type: "asset/inline",
      // },
    ],
  },

  devtool: "source-map", // turn off on final production
};
