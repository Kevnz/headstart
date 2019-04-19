const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

console.log(path.join(process.cwd(), './build/ui/'))
module.exports = {
  entry: './src/ui/index.js',
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/'
              },
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  output: {
    path: path.join(process.cwd(), './build/ui/'),
    publicPath: '/files/',
    filename: 'bundle.js',
  },
}
