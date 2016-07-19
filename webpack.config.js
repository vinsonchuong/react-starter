module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
        exclude: /node_modules/
      }
    ]
  }
};
