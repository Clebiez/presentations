const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['@babel/polyfill', './index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!raw-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg'
      }
    ]
  }
};
