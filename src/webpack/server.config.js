const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  watch: true,
  target: 'node',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ca]ss$/,
        loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
    alias: {},
  },
  output: {
    path: path.join(process.cwd(), '/build/server'),
    publicPath: '/',
    filename: 'index.js',
  },
}
