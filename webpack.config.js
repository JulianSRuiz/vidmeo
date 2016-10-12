const webpack = require('webpack');
module.exports = {
  entry:['./src/app.js'],
  module:{
    loaders: [
      { test: /\.jsx?$/
        // , exclude: /(node_modules|bower_components)/
        , loader: 'babel' },
      { test: /\.html$/, loader: "html"},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
    ]
  },
  output:{
    path: __dirname + '/public',
    filename: "/bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
]
}
