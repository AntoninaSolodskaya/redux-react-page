const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              'babel-plugin-add-module-exports',
              'babel-plugin-styled-components'
            ]
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: './public',
  //   hot: true,
  // },
  devServer: {
    contentBase: './public',
    hot: true,
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            secure: false
        }
    }
}
};
