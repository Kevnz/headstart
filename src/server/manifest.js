const path = require('path')

module.exports = [
  {
    plugin: require('blipp'),
  },
  {
    plugin: require('vision'),
  },
  {
    plugin: require('inert'),
  },
  {
    plugin: require('good'),
    options: {
      ops: {
        interval: 30 * 200,
      },
      reporters: {
        console: [
          {
            module: 'good-console',
            args: [{ log: '*', response: '*' }],
          },
          'stdout',
        ],
      },
    },
  },
]
