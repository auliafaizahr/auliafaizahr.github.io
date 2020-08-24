const path = require('path');
const webpack = require('webpack');
const $ = require('jquery');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebP = require("imagemin-webp");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['./assets/images/*.{jpg,png}'], 'dist', {
		use: [
			imageminWebp({quality: 75})
		]
	});

	console.log('Images optimized');
})();

module.exports = {
  entry: {
    js: "./js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./src/")
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
    filename: 'style.min.css'
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "./images/*.png", to: "./images/[name].webp" },
    //   ]
    // }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminWebP({
          quality: 75
        })
      ]
    }),
    // new ImageminWebpWebpackPlugin({
    //   config: [{
    //     test: /\.(jpe?g|png)/,
    //     options: {
    //       quality:  75
    //     }
    //   }],
    //   overrideExtension: true,
    //   detailedLogs: false,
    //   silent: false,
    //   strict: true
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true} },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
      },
    ]
  }
};