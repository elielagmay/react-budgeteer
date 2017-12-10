import path from 'path'
import webpack from 'webpack'

export default {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src')
  ],
  output: {
    publicPath: 'http://localhost:9000/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
        loader: 'file?name=[path][name].[ext]?[hash]',
      }
    ]
  },
  target: 'web',
  devtool: 'source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': JSON.stringify('development'),
    }),
  ],
}
