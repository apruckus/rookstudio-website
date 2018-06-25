require("babel-polyfill");

const webpack = require('webpack');

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: [
    "babel-polyfill",
    'webpack-dev-server/client?http://0.0.0.0:80',
    APP_DIR + '/index.jsx', APP_DIR + '/main.less'
 ],
  output: {
    path: BUILD_DIR,
    publicPath: '/.',
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: "babel-loader",
        exclude: /node_modules/        
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader", options: { minimize: true } // creates style nodes from JS strings
        }, {
            loader: "css-loader", options: { minimize: true } // translates CSS into CommonJS
        }, {
            loader: "less-loader", options: { minimize: true } // compiles Less to CSS
        }]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },    
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=/images/[name].[ext]'
      },
      {
        test: /\.css$/,  
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: './src/images', to: './images' },
    ])
  ]
};

module.exports = config;