const path = require('path');
const nodeExternals = require('webpack-node-externals');

// This configuration outputs the transpiled server bundle into the server-build folder (line 14).
// The target of node & nodeExternals omit the files within the node_modules.

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
