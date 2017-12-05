module.exports = {
  /** Tell webpack to run babel on every file it runs through */
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { /** pass to loader */
          presets: [
            'react', 
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ]
        }
      }
    ], /* end of rules */
  },/* end of module */
};