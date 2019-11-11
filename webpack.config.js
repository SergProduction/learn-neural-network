const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin")


const dev = {
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 3000,
    host: 'localhost',
    compress: true,
    contentBase: "./dist",
    historyApiFallback: {
      from: /(\/\w+)+/,
      to: '/',
    },
  },
}


const prod = {
  plugins: [
    new MinifyPlugin({
      mangle: { topLevel: true }
    })
  ]
}


const common = (env) => ({
  context: __dirname,
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules', 'src'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.ejs`,
    }),
    new webpack.EnvironmentPlugin({
      DEPLOYMENT: env,
      IS_DEV: env === 'dev'
    }),
  ],
})



module.exports = function(env, argv) {
  if (argv.mode === 'production') {
    return merge([
      common(env),
      prod,
    ])
  }
  if (argv.mode === 'development') {
    return merge([
      common(env),
      dev,
    ])
  }
}
