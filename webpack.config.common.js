const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const rootPath = path.resolve(__dirname, "./");
const srcPath = path.resolve(rootPath, "src");
const libPath = path.resolve(rootPath, "dist");
const entry = srcPath + "/index.ts";
const mainConfig = {
  entry: entry,

  output: {
    path: libPath,
    filename: "index.js",
    library: "FilePicker",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  }
};

const providerConfig = {
  entry: entry,
  output: {
    path: libPath,
    filename: "index.js",
    library: "FilePicker"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  }
};

module.exports = [mainConfig, providerConfig];
