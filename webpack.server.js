const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  /** Inform webpack that we're buiding a bundle 
   * for nodeJS, rather than for the browser
   */
  target: 'node',
  /** Tell webpakc the root file of our server 
   * application
   */
  entry: './src/index.js',
  /**
   * Tell webpack where to put the output file
   * that is generated 
   */
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  /** anything that inside the node moduels 
   * will not be included into our server side bundle.js 
   * */
  externals: [
    webpackNodeExternals(),
  ]
};

module.exports = merge(baseConfig, config);