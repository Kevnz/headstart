const path = require('path')
const nodeExternals = require('webpack-node-externals')
console.log('Exts', nodeExternals())
const isProd = !!(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
const getConfig = (entry, output) => ({
  watch: false,
  target: 'node',
  entry,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                  targets: {
                    node: 'current',
                    esmodules: false,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
    alias: {},
  },
  output,
})

const getConfigs = () => {
  return [
    getConfig('./src/server/index.js', {
      path: path.join(process.cwd(), '/build/server'),
      publicPath: '/',
      filename: 'index.js',
    }),
  ]
}

module.exports = getConfigs()
