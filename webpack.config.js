const { join } = require('path');

module.exports = {
  mode: "production",
  entry: [
    './src/index.js'
  ],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'edge-chat-min.js'
  },
  watch: true,
  module: {
    rules: [{
      test: /\.js/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  devServer: {
    contentBase: [
      join(__dirname, 'example'),
      join(__dirname, 'dist'),
    ],
    compress: true,
    port: 8080,
    inline: true,
    hot: true
  }
}