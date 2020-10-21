const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',//development OR production
  entry: "./src/array/index.ts",
  // entry: "./src/home.js",
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: "ts-loader"
      },
      exclude: /node_modules/ // 除node_modules文件夹下之外的以.ts结尾的文件
    }]

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};